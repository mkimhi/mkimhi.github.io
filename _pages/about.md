---
layout: research
permalink: /
title: Research
redirect_from:
  - /about/
  - /about.html
---
<main id="main"><div id="top"></div>
<section class="hero hero-about" id="about">
<div class="hero-artifacts">
<figure class="portrait"><div class="portrait-frame"><img id="portrait-source" src="/me.PNG" alt="Portrait of Moshe Kimhi" fetchpriority="high"><canvas id="portrait-resolution" aria-hidden="true"></canvas><div class="crop-mark crop-mark-tl"></div><div class="crop-mark crop-mark-br"></div></div><figcaption>HOW MUCH DETAIL IS ENOUGH?</figcaption><div class="portrait-controls" hidden><label for="resolution">Resolution</label><input id="resolution" type="range" min="0" max="5" value="5" step="1" aria-valuetext="Original resolution"><output for="resolution" id="resolution-value">Original</output></div><div class="portrait-controls portrait-color-controls" hidden><label for="color-depth">Color</label><input id="color-depth" type="range" min="0" max="4" value="4" step="1" aria-valuetext="Full RGB color"><output for="color-depth" id="color-depth-value">RGB</output></div></figure>
<figure class="network-figure"><svg id="network" viewBox="0 0 520 350" role="img" aria-label="A neural network with a narrow hidden layer, illustrating a computational bottleneck"></svg><figcaption><span>A STUDY IN BOTTLENECKS</span><button id="signal" type="button">Send a signal ↗</button></figcaption><p class="network-note">Small interventions. System-wide effects.</p><div class="network-key"><span><i></i> Representation</span><span><i class="key-bottleneck"></i> Bottleneck</span></div></figure>
</div>
<div class="hero-copy">

<p class="eyebrow">01 / ABOUT · COMPUTER VISION & DEEP LEARNING</p>
<p class="hero-name">Moshe Kimhi</p>
<h1>Learning more.<br><em>With less.</em></h1>
<p class="position">Research Scientist, Google Research · PhD researcher, Technion</p>
<p>I study neural networks under real constraints: less compute, fewer labels, and more possibility.</p>
<p>I’m a Research Scientist at Google Research and a PhD student in Computer Science at the Technion, advised by <a href="https://insight.bgu.ac.il/">Chaim Baskin</a>, who leads the INSIGHT Lab at Ben-Gurion University of the Negev (BGU), and <a href="https://research.google/people/ehud-rivlin/">Ehud Rivlin</a>.</p>
<p class="detail-copy">My research spans vision-language models, representation learning, semi-supervised learning, noisy labels, and robust AI systems. I hold BSc and MSc degrees in Electrical and Computer Engineering from the Technion. I review for ICCV, ICML, WACV, and TMLR, and co-teach <a href="https://vistalab-technion.github.io/cs236781/">Computer Vision & Deep Learning</a>.</p>
<p class="coffee-invite">Have an interesting problem in mind? <a href="mailto:moshekimhi91@gmail.com?subject=Coffee%20and%20interesting%20problems">Let’s schedule a coffee ↗</a></p>
<div class="socials"><a href="mailto:moshekimhi91@gmail.com">Email ↗</a><a href="https://scholar.google.com/citations?user=uz7qJbsAAAAJ&hl=en">Scholar ↗</a><a href="https://github.com/mkimhi">GitHub ↗</a><a href="https://www.linkedin.com/in/moshekimhi/">LinkedIn ↗</a></div>
</div>

</section>
<div class="depth-bar"><div><label for="depth">Reading depth</label><span id="depth-description" aria-live="polite">A little context</span></div><div class="depth-control"><button type="button" data-depth-choice="0">Overview</button><input type="range" id="depth" min="0" max="2" step="1" value="1" aria-valuetext="Context: paper summaries"><button type="button" data-depth-choice="2">In depth</button></div><nav aria-label="Page sections"><a href="#about">01 About</a><a href="#perspective">02 Perspective</a><a href="#research">03 Publications</a><a href="#talks">04 Talks</a></nav></div>
<section id="perspective" class="section perspective"><div><p class="eyebrow">02 / PERSPECTIVE</p><h2>A modern<br><em>glassblower.</em></h2><svg class="vessel" viewBox="0 0 400 200" role="img" aria-label="An abstract glass vessel with a narrow neck expanding into a broad body"><g fill="none" stroke="currentColor" stroke-width="1"> <path d="M20 85H115C160 85 155 25 245 25C335 25 370 70 370 100S335 175 245 175C155 175 160 115 115 115H20"/>
<path d="M20 90H115C170 90 175 45 245 45S350 80 350 100S315 155 245 155S170 110 115 110H20"/><path d="M20 95H115C180 95 195 70 245 70S330 90 330 100S295 130 245 130S180 105 115 105H20"/><path d="M20 100H370"/></g></svg></div><div class="perspective-copy"><p class="large">I see myself as a modern glassblower: finding the narrow neck, then reshaping it.</p><p>In neural networks, the bottleneck might be data, compute, memory, or the pipeline connecting them. I’m interested in identifying what limits a system, understanding why, and opening up room for it to do more.</p><p>I’m a strong believer in <a href="https://en.wikipedia.org/wiki/Jevons_paradox">Jevons paradox ↗</a>: greater efficiency can increase total demand. For me, making AI more efficient is a way to unlock new uses, broader access, and more ambitious questions.</p><p class="detail-copy">That perspective connects my work on adaptive resolution, learning with imperfect data, quantization, and neural network robustness. The recurring question is simple: where does an intervention matter most?</p></div></section>
<section id="research" class="section"><div class="section-heading"><div><p class="eyebrow">03 / PUBLICATIONS</p><h2>Find the constraint.<br><em>Expand what’s possible.</em></h2></div><p>From visual tokens to training labels, I look for the small changes that make a large difference.</p></div>
{% include research-papers.html %}
</section>
<section id="talks" class="section talks"><p class="eyebrow">04 / TALKS</p><h2>Ideas, <em>in conversation.</em></h2>
{% include featured-talks.html %}
</section>
</main>
