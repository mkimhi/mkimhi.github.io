"""Browser smoke check: pip install playwright; playwright install chromium.
Run against a served Jekyll build: python scripts/check_website.py http://localhost:4000
"""
import sys
from playwright.sync_api import sync_playwright
BASE = sys.argv[1].rstrip("/") if len(sys.argv) > 1 else "http://localhost:4000"
with sync_playwright() as p:
 b=p.chromium.launch(args=['--no-sandbox']); errors=[]
 page=b.new_page(viewport={'width':1440,'height':1000});page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(BASE);assert page.locator('.paper').count()==13
 assert page.locator('main > section').evaluate_all('(sections)=>sections.map(s=>s.id)') == ['about','perspective','research','talks','meeting']
 assert page.locator('.depth-bar a[href="#meeting"]').inner_text() == '05 Set a meeting'
 assert 'I consult and teach on AI and computer vision' in page.locator('#meeting').inner_text()
 assert page.locator('#meeting #meeting-form').count() == 1
 assert page.locator('#about .hero-artifacts > .portrait').count() == 1
 assert page.locator('#about .hero-artifacts > .network-figure').count() == 1
 assert page.locator('#about').evaluate('(el) => el.firstElementChild.classList.contains("hero-artifacts")')
 about_text = page.locator('#about').inner_text()
 assert about_text.index('Chaim Baskin') < about_text.index('Ehud Rivlin')
 assert 'INSIGHT Lab at Ben-Gurion University' not in about_text
 assert page.locator('#talks .talk-meta').all_text_contents() == ['Mobileye · July 13','Google Research Conference · October 13']
 assert page.locator('a[href="/cv/"]').count() == 0
 assert page.locator('.coffee-invite a').get_attribute('href').startswith('mailto:moshekimhi91@gmail.com')
 assert page.locator('.paper-citation').count() == 13
 assert page.locator('.paper-image img').count() == 13
 assert 'I review for' not in about_text
 assert 'I teach deep learning and computer vision.' in about_text
 assert page.locator('#about a[href*=cs236781]').count() == 0
 assert page.locator('#color-depth').get_attribute('max') == '7'
 assert page.locator('footer').inner_text().find('I admire you if you read all the way down here') >= 0
 for paper in page.locator('.paper').all():
  image = paper.locator('.paper-image img')
  image.scroll_into_view_if_needed()
  page.wait_for_function('(img) => img.complete && img.naturalWidth > 0', arg=image.element_handle())
  citation = paper.locator('.paper-citation')
  citation.locator('summary').click()
  assert citation.locator('code').inner_text().startswith('@')
  download = page.request.get(BASE + citation.locator('a[download]').get_attribute('href'))
  assert download.ok and download.text().strip() == citation.locator('code').inner_text().strip()
  citation.locator('summary').click()
 page.context.grant_permissions(['clipboard-read', 'clipboard-write'])
 page.locator('#bibtex-cares summary').click()
 page.locator('#bibtex-cares [data-copy-bibtex]').click()
 page.wait_for_function("document.querySelector('#bibtex-cares [role=status]').textContent === 'Copied'")
 assert page.evaluate('navigator.clipboard.readText()').startswith('@inproceedings')
 page.locator('#bibtex-cares summary').click()
 page.locator('#depth').fill('0');assert not page.locator('.paper-summary').first.is_visible()
 page.locator('#depth').fill('2');assert page.locator('.paper-details[open]').count()==13
 page.get_by_role('button',name='Robustness',exact=True).click();assert page.locator('.paper:visible').count()==2
 page.get_by_role('button',name='All work',exact=True).click();assert page.locator('.paper:visible').count()==13
 page.locator('#depth').fill('1');page.locator('#signal').click();assert 'network-active' in page.locator('#network').get_attribute('class')
 page.locator('#about').scroll_into_view_if_needed();page.wait_for_timeout(400)
 assert page.locator('.portrait img').evaluate('(img)=>img.complete && img.naturalWidth>0')
 page.locator('#resolution').fill('0')
 assert page.locator('#resolution-value').inner_text() == '8 × 10'
 assert page.locator('#portrait-resolution').is_visible()
 page.locator('#resolution').fill('5')
 assert not page.locator('#portrait-resolution').is_visible()

 assert page.locator('#portrait-source').get_attribute('src') == '/me2.png'
 page.locator('#color-depth').fill('0')
 assert page.locator('#color-depth-value').inner_text() == 'Grayscale'
 assert page.locator('#portrait-resolution').is_visible()
 assert page.locator('#portrait-resolution').evaluate('''canvas => {
   const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
   for (let i = 0; i < pixels.length; i += 4) {
     if (pixels[i] !== pixels[i+1] || pixels[i] !== pixels[i+2]) return false;
   }
   return true;
 }''')
 page.locator('#resolution').fill('0');page.locator('#color-depth').fill('1')
 assert page.locator('#portrait-resolution').evaluate('''canvas => {
   const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
   return pixels.every((value, index) => index % 4 === 3 || value === 0 || value === 255);
 }''')
 assert page.locator('#resolution-value').inner_text() == '8 × 10'
 page.locator('#color-depth').fill('7');page.locator('#resolution').fill('5')
 assert not page.locator('#portrait-resolution').is_visible()

 page.locator('#edges').fill('100')
 assert page.locator('#edges-value').inner_text() == '100%'
 assert page.locator('#portrait-resolution').is_visible()
 assert page.locator('#portrait-resolution').evaluate("canvas => { const p = canvas.getContext('2d').getImageData(0,0,canvas.width,canvas.height).data; let dark = false, light = false; for(let i=0;i<p.length;i+=4) { if(p[i] !== p[i+1] || p[i] !== p[i+2]) return false; dark ||= p[i]<100; light ||= p[i]>200; } return dark && light; }")
 page.locator('#edges').fill('0')
 assert not page.locator('#portrait-resolution').is_visible()
 for count in [1,7,3]:
  page.locator('#bottleneck').fill(str(count))
  assert page.locator('#network .bottleneck').count() == count
  assert page.locator('#network line').count() == 59 + 13 * count
 page.locator('#signal').click()
 page.locator('#bottleneck').fill('2')
 assert page.locator('#network').evaluate('(el) => el.getAnimations({subtree:true}).length') == 0
 page.locator('#bottleneck').focus();page.keyboard.press('ArrowRight')
 assert page.locator('#bottleneck').input_value() == '3'
 page.locator('.meeting-request summary').click()
 page.locator('#meeting-form button').click()
 assert page.locator('#meeting-name').evaluate('(el) => !el.validity.valid')
 page.locator('#meeting-name').fill('Test Visitor')
 page.locator('#meeting-email').fill('visitor@example.com')
 page.locator('#meeting-details').fill('Vision & learning? Next Tuesday at 10 UTC.\nA speaking invitation.')
 for kind in ['Consulting','Speaking event','Teaching session']:
  page.locator('#meeting-type').select_option(label=kind)
  # Capture external navigation so no email client needs to be installed.
  with page.expect_event('request', predicate=lambda req: req.url.startswith('mailto:')) as draft:
   page.locator('#meeting-form button').click()
  from urllib.parse import urlparse, parse_qs
  request = urlparse(draft.value.url)
  fields = parse_qs(request.query)
  assert request.path == 'moshekimhi91@gmail.com'
  assert fields['subject'] == [kind + ' meeting request']
  assert 'Vision & learning? Next Tuesday at 10 UTC.' in fields['body'][0]
  assert 'visitor@example.com' in fields['body'][0]
 page.locator('.meeting-request summary').click()
 page.locator('#cares').scroll_into_view_if_needed();page.wait_for_timeout(600)
 anchor_top = page.locator('#cares').bounding_box()['y']
 page.locator('#depth').fill('2')
 assert abs(page.locator('#cares').bounding_box()['y'] - anchor_top) < 2
 page.locator('#depth').fill('1')
 page.screenshot(path='/tmp/desktop-final.png',full_page=True)
 for width in [375,768,1440]:
  page.set_viewport_size({'width':width,'height':850});page.goto(BASE);assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),width
  portrait_box = page.locator('.hero-artifacts .portrait').bounding_box()
  network_box = page.locator('.hero-artifacts .network-figure').bounding_box()
  assert max(portrait_box['y'] + portrait_box['height'], network_box['y'] + network_box['height']) < 700
  assert network_box['x'] >= portrait_box['x'] + portrait_box['width']
  page.locator('#depth').focus();page.keyboard.press('ArrowRight');assert page.locator('#depth').input_value()=='2'
  if width==375:page.screenshot(path='/tmp/mobile.png',full_page=True)
 page.get_by_role('button',name='Overview',exact=True).click();assert page.locator('#depth').input_value()=='0'
 page.get_by_role('button',name='In depth',exact=True).click();assert page.locator('#depth').input_value()=='2'
 page.locator('.depth-bar a[href="#meeting"]').click()
 page.wait_for_function("document.querySelector('.depth-bar a[href=\"#meeting\"]').getAttribute('aria-current') === 'location'")
 page.goto(BASE + '/publications/');assert page.locator('.paper').count()==13
 page.emulate_media(reduced_motion='reduce');page.goto(BASE)
 page.locator('#signal').click();assert page.locator('#network').evaluate('(el) => el.getAnimations({subtree:true}).length') == 0
 assert not errors,errors
 b.close();print('PASS: 13 publications, depth states, filters, network, portrait resolution, color quantization and edge drawing, adjustable bottleneck, meeting email drafts, scroll preservation, reduced motion, keyboard range, 3 viewport widths, publications archive; no JS errors')
