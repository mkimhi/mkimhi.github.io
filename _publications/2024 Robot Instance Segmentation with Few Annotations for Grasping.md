---
title: "Robot Instance Segmentation with Few Annotations for Grasping"
collection: publications
permalink: /publication/Robot Instance Segmentation with Few Annotations for Grasping
excerpt: 'We improve perception for robotic grasping with temporal and identification consistency'
date: 2024-06-20
venue: 'Preprint'
paperurl: 'https://arxiv.org/pdf/2407.01302'
citation: #'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

The ability of robots to manipulate objects relies heavily on their aptitude for visual perception. In domains characterized by cluttered scenes and high object variability, most methods call for vast labeled datasets, laboriously hand-annotated, with the aim of training capable models. Once deployed, the challenge of generalizing to unfamiliar objects implies that the model must evolve alongside its domain. To address this, we propose a novel framework that combines Semi-Supervised Learning (SSL) with Learning Through Interaction (LTI), allowing a model to learn by observing scene alterations and leverage visual consistency despite temporal gaps without requiring curated data of interaction sequences. As a result, our approach exploits partially annotated data through self-supervision and incorporates temporal context using pseudo-sequences generated from unlabeled still images. We validate our method on two common benchmarks, ARMBench mix-object-tote and OCID, where it achieves state-of-the-art performance. Notably, on ARMBench, we attain an AP50 of 86.37, almost a 20% improvement over existing work, and obtain remarkable results in scenarios with extremely low annotation, achieving an AP50 score of 84.89 with just 1% of annotated data compared to 72 presented in on the fully annotatedcounterpart.

https://github.com/mkimhi/RISE 

bibtex:
```
@misc{kimhi2024robot,
    title={Robot Instance Segmentation with Few Annotations for Grasping},
    author={Moshe Kimhi and David Vainshtein and Chaim Baskin and Dotan Di Castro},
    year={2024},
    eprint={2407.01302},
    archivePrefix={arXiv},
    primaryClass={cs.CV}
}
```