---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

## Pre-prints
{% for post in site.preprints reversed %}
  {% include archive-single.html %}
{% endfor %}


## Accepted Publications
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
