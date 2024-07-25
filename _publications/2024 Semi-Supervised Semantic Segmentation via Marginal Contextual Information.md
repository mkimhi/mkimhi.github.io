---
title: "Semi-Supervised Semantic Segmentation via Marginal Contextual Information"
collection: publications
permalink: /publication/Semi-Supervised Semantic Segmentation via Marginal Contextual Information
excerpt: 'We refine pseudo-labeling process for semantic segmentation task using contextual information'
date: 2024-06-20
venue: 'Transactions on Machine Learning Research (06/2024)'
paperurl: 'https://arxiv.org/pdf/2308.13900'
citation: #'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

We present a novel confidence refinement scheme that enhances pseudo-labels in semi-supervised semantic segmentation. Unlike current leading methods, which filter pixels with low-confidence predictions in isolation, our approach leverages the spatial correlation of labels in segmentation maps by grouping neighboring pixels and considering their pseudo-labels collectively. With this contextual information, our method, named S4MC, increases the amount of unlabeled data used during training while maintaining the quality of the pseudo-labels, all with negligible computational overhead. Through extensive experiments on standard benchmarks, we demonstrate that S4MC outperforms existing state-of-the-art semi-supervised learning approaches, offering a promising solution for reducing the cost of acquiring dense annotations. For example, S4MC achieves a 1.29 mIoU improvement over the prior state-of-the-art method on PASCAL VOC 12 with 366 annotated images. The code to reproduce our experiments is available at https://s4mcontext.github.io/

visit us from awsome SSSS: https://github.com/BBBBchan/Awesome-Semi-Supervised-Semantic-Segmentation



bibtex:
```
@article{Kimhi2023SemiSupervisedSS,
  title={Semi-Supervised Semantic Segmentation via Marginal Contextual Information},
  author={Moshe Kimhi and Shai Kimhi and Evgenii Zheltonozhskii and Or Litany and Chaim Baskin},
  journal={ArXiv},
  year={2023},
  volume={abs/2308.13900},
}
```