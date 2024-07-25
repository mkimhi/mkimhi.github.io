---
title: "Benchmarking Label Noise in Instance Segmentation: Spatial Noise Matters"
collection: publications
permalink: /publication/Benchmarking Label Noise in Instance Segmentation - Spatial Noise Matters
excerpt: 'We propose a benchmark for spatial label nosise for instanse segmentation, both with man main and machine made noise'
date: 2024-07-01
venue: 'Preprint'
paperurl: 'https://arxiv.org/pdf/2406.10891'
citation: #'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

Obtaining accurate labels for instance segmentation is particularly challenging due to the complex nature of the task. Each image necessitates multiple annotations, encompassing not only the object's class but also its precise spatial boundaries. These requirements elevate the likelihood of errors and inconsistencies in both manual and automated annotation processes. By simulating different noise conditions, we provide a realistic scenario for assessing the robustness and generalization capabilities of instance segmentation models in different segmentation tasks, introducing COCO-N and Cityscapes-N. We also propose a benchmark for weakly annotation noise, dubbed COCO-WAN, which utilizes foundation models and weak annotations to simulate semi-automated annotation tools and their noisy labels. This study sheds light on the quality of segmentation masks produced by various models and challenges the efficacy of popular methods designed to address learning with label noise


bibtex:
```
@misc{grad2024benchmarking,
    title={Benchmarking Label Noise in Instance Segmentation: Spatial Noise Matters},
    author={Eden Grad and Moshe Kimhi and Lion Halika and Chaim Baskin},
    year={2024},
    eprint={2406.10891},
    archivePrefix={arXiv},
    primaryClass={cs.CV}
}
```