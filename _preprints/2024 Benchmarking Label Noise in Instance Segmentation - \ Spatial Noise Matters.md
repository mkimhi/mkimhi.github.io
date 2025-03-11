---
title: "Noisy Annotations in Semantic Segmentation"
collection: publications
permalink: /publication/Noisy Annotations in Semantic Segmentation
excerpt: 'Explore the effects of label noise in segmentation datasets, with real and syntetic data'
date: 2024-07-01
venue: 'Preprint'
paperurl: 'https://arxiv.org/pdf/2406.10891'
citation: #'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

Instance segmentation requires not only correct class labels but also precise spatial delineation, making it highly susceptible to annotation noise. Such inaccuracies, stemming from human error or automated tools, can substantially degrade performance in safety-critical domains ranging from autonomous driving to medical imaging. In this work, we systematically investigate how various forms of noisy annotations—including class confusion, boundary distortions and disoriented annotation tools context —affect segmentation models across multiple datasets. We introduce \textbf{\texttt{COCO}-N}, \textbf{\texttt{CityScapes}-N}, and \textbf{\texttt{VIPER}-N} to simulate realistic noise in both real-world and synthetic data, and further propose \textbf{\texttt{COCO}-WAN}, a weakly annotated benchmark leveraging promptable foundation models. Experimental results reveal that even modest labeling and annotating  errors lead to notable drops in segmentation quality, highlighting the limitations of current learning-from-noise approaches in handling spatial inaccuracies. Our findings underscore the critical need for robust segmentation pipelines that focus on annotation quality, and motivate future work on noise-aware training strategies (e.g. learning with noisy annotations) for real-world applications.


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