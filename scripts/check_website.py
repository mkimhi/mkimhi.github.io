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
 assert page.locator('main > section').evaluate_all('(sections)=>sections.map(s=>s.id)') == ['about','perspective','research','talks']
 assert page.locator('#about #portrait-source').count() == 1
 about_text = page.locator('#about').inner_text()
 assert about_text.index('Chaim Baskin') < about_text.index('Ehud Rivlin')
 assert 'INSIGHT Lab at Ben-Gurion University' in about_text
 assert page.locator('#talks .talk-meta').all_text_contents() == ['Mobileye · July 13','Google Research Conference · October 13']
 assert page.locator('a[href="/cv/"]').count() == 0
 assert page.locator('.coffee-invite a').get_attribute('href').startswith('mailto:moshekimhi91@gmail.com')
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
 page.locator('#cares').scroll_into_view_if_needed();page.wait_for_timeout(600)
 anchor_top = page.locator('#cares').bounding_box()['y']
 page.locator('#depth').fill('2')
 assert abs(page.locator('#cares').bounding_box()['y'] - anchor_top) < 2
 page.locator('#depth').fill('1')
 page.screenshot(path='/tmp/desktop-final.png',full_page=True)
 for width in [375,768,1440]:
  page.set_viewport_size({'width':width,'height':850});page.goto(BASE);assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),width
  page.locator('#depth').focus();page.keyboard.press('ArrowRight');assert page.locator('#depth').input_value()=='2'
  if width==375:page.screenshot(path='/tmp/mobile.png',full_page=True)
 page.get_by_role('button',name='Overview',exact=True).click();assert page.locator('#depth').input_value()=='0'
 page.get_by_role('button',name='In depth',exact=True).click();assert page.locator('#depth').input_value()=='2'
 page.goto(BASE + '/publications/');assert page.locator('.paper').count()==13
 page.emulate_media(reduced_motion='reduce');page.goto(BASE)
 page.locator('#signal').click();assert page.locator('#network').evaluate('(el) => el.getAnimations({subtree:true}).length') == 0
 assert not errors,errors
 b.close();print('PASS: 13 publications, depth states, filters, network, portrait resolution, scroll preservation, reduced motion, keyboard range, 3 viewport widths, publications archive; no JS errors')
