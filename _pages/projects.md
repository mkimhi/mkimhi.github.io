---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

If you are intrested in one of the projects, BSc, MSc thesis (Technion/BGU) or academic collaboration, contact me by mail!
If you have interesting problem/data and want to offer projects to the students in the Technion, we can explore them as well.


{% include base_path %}

{% for post in site.projects reversed %}
  {% include archive-single.html %}
{% endfor %}
