---
title: "Robot Instance Segmentation with Few Annotations for Grasping"
collection: publications
permalink: /publication/Robot Instance Segmentation with Few Annotations for Grasping
excerpt: 'We improve perception for robotic grasping with temporal and identification consistency'
date: 2025-02-20
venue: 'WACV 2025'
paperurl: 'https://openaccess.thecvf.com/content/WACV2025/papers/Kimhi_Robot_Instance_Segmentation_with_Few_Annotations_for_Grasping_WACV_2025_paper.pdf'
citation: #'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

The ability of robots to manipulate objects relies heavily on their aptitude for visual perception. In domains characterized by cluttered scenes and high object variability, most methods call for vast labeled datasets, laboriously hand-annotated, with the aim of training capable models. Once deployed, the challenge of generalizing to unfamiliar objects implies that the model must evolve alongside its domain. To address this, we propose a novel framework that combines Semi-Supervised Learning (SSL) with Learning Through Interaction (LTI), allowing a model to learn by observing scene alterations and leverage visual consistency despite temporal gaps without requiring curated data of interaction sequences. As a result, our approach exploits partially annotated data through self-supervision and incorporates temporal context using pseudo-sequences generated from unlabeled still images. We validate our method on two common benchmarks, ARMBench mix-object-tote and OCID, where it achieves state-of-the-art performance. Notably, on ARMBench, we attain an AP50 of 86.37, almost a 20% improvement over existing work, and obtain remarkable results in scenarios with extremely low annotation, achieving an AP50 score of 84.89 with just 1% of annotated data compared to 72 presented in on the fully annotatedcounterpart.

https://github.com/mkimhi/RISE 

bibtex:
```
@InProceedings{Kimhi_2025_WACV,
    author    = {Kimhi, Moshe and Vainshtein, David and Baskin, Chaim and Di Castro, Dotan},
    title     = {Robot Instance Segmentation with Few Annotations for Grasping},
    booktitle = {Proceedings of the Winter Conference on Applications of Computer Vision (WACV)},
    month     = {February},
    year      = {2025},
    pages     = {7928-7938}
}
```