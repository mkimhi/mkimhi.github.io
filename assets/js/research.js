(() => {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const depth = document.querySelector('#depth');
  const descriptions = ['The essentials', 'A little context', 'The full picture'];
  const papers = [...document.querySelectorAll('.paper')];

  function setDepth() {
    // Keep the paper being read in place when content above it changes height.
    const barBottom = document.querySelector('.depth-bar').getBoundingClientRect().bottom;
    const readingLine = barBottom + (innerHeight - barBottom) / 2;
    const visiblePapers = papers.filter(paper => !paper.hidden && paper.getBoundingClientRect().bottom > barBottom && paper.getBoundingClientRect().top < innerHeight);
    const anchor = visiblePapers.find(paper => {
      const box = paper.getBoundingClientRect();
      return box.top <= readingLine && box.bottom > readingLine;
    }) || visiblePapers[0];
    const previousTop = anchor?.getBoundingClientRect().top;
    const value = Number(depth.value);
    document.body.dataset.depth = value;
    depth.setAttribute('aria-valuetext', descriptions[value]);
    document.querySelector('#depth-description').textContent = descriptions[value];
    document.querySelectorAll('.paper-details').forEach(detail => { detail.open = value === 2; });
    document.querySelectorAll('[data-depth-choice]').forEach(button => {
      button.setAttribute('aria-pressed', String(Number(button.dataset.depthChoice) === value));
    });
    if (anchor) window.scrollBy({top: anchor.getBoundingClientRect().top - previousTop, behavior: 'instant'});
  }
  if (depth) {
    depth.addEventListener('input', setDepth);
    document.querySelectorAll('[data-depth-choice]').forEach(button => button.addEventListener('click', () => {
      depth.value = button.dataset.depthChoice;
      setDepth();
    }));
    setDepth();
  }

  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(other => {
        other.classList.toggle('active', other === button);
        other.setAttribute('aria-pressed', String(other === button));
      });
      papers.forEach(paper => { paper.hidden = button.dataset.filter !== 'All' && paper.dataset.topic !== button.dataset.filter; });
      document.querySelector('#result-count').textContent = `${papers.filter(paper => !paper.hidden).length} papers shown`;
    });
  });

  const sectionLinks = [...document.querySelectorAll('.depth-bar nav a')];
  function updatePosition() {
    const sections = sectionLinks.map(link => document.querySelector(link.getAttribute('href')));
    const current = sections.filter(section => section.getBoundingClientRect().top <= innerHeight * .4).pop();
    sectionLinks.forEach((link, index) => {
      if (sections[index] === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const remaining = document.documentElement.scrollHeight - innerHeight;
    document.querySelector('.depth-bar')?.style.setProperty('--reading-progress', `${remaining > 0 ? scrollY / remaining * 100 : 0}%`);
  }
  if (sectionLinks.length) {
    let pending = false;
    window.addEventListener('scroll', () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => { updatePosition(); pending = false; });
    }, {passive: true});
    window.addEventListener('resize', updatePosition);
    updatePosition();
  }

  const portrait = document.querySelector('#portrait-source');
  const canvas = document.querySelector('#portrait-resolution');
  const resolution = document.querySelector('#resolution');
  if (portrait && canvas && resolution) {
    const context = canvas.getContext('2d');
    const sizes = [8, 16, 32, 64, 128];
    function renderPortrait() {
      const original = Number(resolution.value) === 5;
      const width = original ? portrait.naturalWidth : sizes[Number(resolution.value)];
      canvas.width = width;
      canvas.height = Math.round(width * 5 / 4);
      // Match the photograph's object-fit crop at every resolution.
      const cropWidth = Math.min(portrait.naturalWidth, portrait.naturalHeight * 4 / 5);
      const cropHeight = cropWidth * 5 / 4;
      context.drawImage(portrait, (portrait.naturalWidth - cropWidth) / 2, (portrait.naturalHeight - cropHeight) / 2, cropWidth, cropHeight, 0, 0, canvas.width, canvas.height);
      canvas.hidden = original;
      const description = original ? 'Original' : `${width} × ${canvas.height}`;
      document.querySelector('#resolution-value').textContent = description;
      resolution.setAttribute('aria-valuetext', original ? 'Original resolution' : `${width} by ${canvas.height} pixels`);
    }
    function enablePortrait() {
      if (!context || !portrait.naturalWidth) return;
      renderPortrait();
      document.querySelector('.portrait-controls').hidden = false;
    }
    portrait.addEventListener('load', enablePortrait);
    if (portrait.complete) enablePortrait();
    resolution.addEventListener('input', renderPortrait);
  }

  const network = document.querySelector('#network');
  if (!network) return;
  const ns = 'http://www.w3.org/2000/svg';
  const layers = [5, 7, 3, 6, 4].map((count, layer) =>
    Array.from({length: count}, (_, index) => ({x: 30 + layer * 112, y: 170 + (index - (count - 1) / 2) * 39})));
  function element(tag, attributes) {
    const node = document.createElementNS(ns, tag);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    network.append(node);
    return node;
  }
  const edges = [];
  layers.slice(0, -1).forEach((layer, index) => layer.forEach((start, source) => layers[index + 1].forEach((end, target) => {
    const line = element('line', {x1:start.x,y1:start.y,x2:end.x,y2:end.y,class:'network-edge'});
    edges.push({line, layer:index, source, target});
  })));
  layers.forEach((layer, index) => layer.forEach(node => {
    node.element = element('circle', {cx:node.x,cy:node.y,r:index === 2 ? 6 : 4.5,class:`network-node${index === 2 ? ' bottleneck' : ''}`});
  }));
  [['INPUT', 30], ['BOTTLENECK', 254], ['OUTPUT', 478]].forEach(([label, x]) => {
    element('text', {x,y:325,'text-anchor':'middle',class:'network-label'}).textContent = label;
  });
  let timer;
  let animations = [];
  const signal = () => {
    clearTimeout(timer);
    animations.forEach(animation => animation.cancel());
    animations = [];
    network.classList.add('network-active');
    const path = layers.map(layer => Math.floor(Math.random() * layer.length));
    if (!reducedMotion) {
      edges.filter(edge => path[edge.layer] === edge.source && path[edge.layer + 1] === edge.target).forEach(edge => {
        animations.push(edge.line.animate([
          {stroke: '#a3472e', strokeWidth: 1.8, strokeDasharray: '8 160', strokeDashoffset: 168, opacity:1},
          {stroke: '#a3472e', strokeWidth: 1.8, strokeDasharray: '8 160', strokeDashoffset: 0, opacity:1}
        ], {duration:450,delay:edge.layer * 260,fill:'none'}));
      });
      layers.forEach((layer, index) => {
        animations.push(layer[path[index]].element.animate([
          {fill:'#a3472e',stroke:'#a3472e',r:8},
          {fill:'#ead6c8',stroke:'#a3472e',r:4.5}
        ], {duration:500,delay:index * 260,fill:'none'}));
      });
    }
    timer = setTimeout(() => network.classList.remove('network-active'), 1600);
  };
  document.querySelector('#signal').addEventListener('click', signal);
  network.addEventListener('pointerdown', signal);
})();
