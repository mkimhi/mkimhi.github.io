---
title: "Bimodal Distributed Binarized Neural Networks"
collection: publications
permalink: /publication/Bimodal Distributed Binarized Neural Networks
excerpt: ' In this work, we propose bimodal-distributed binarization method, for better create binary neural networks'
date: 2022-10-01
venue: 'Mathematics 10 (21)'
paperurl: 'https://www.mdpi.com/2227-7390/10/21/4107'
citation: #'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

Binary neural networks (BNNs) are an extremely promising method for reducing deep neural networks’ complexity and power consumption significantly. Binarization techniques, however, suffer from ineligible performance degradation compared to their full-precision counterparts. Prior work mainly focused on strategies for sign function approximation during the forward and backward phases to reduce the quantization error during the binarization process. In this work, we propose a bimodal-distributed binarization method (BD-BNN). The newly proposed technique aims to impose a bimodal distribution of the network weights by kurtosis regularization. The proposed method consists of a teacher–trainer training scheme termed weight distribution mimicking (WDM), which efficiently imitates the full-precision network weight distribution to their binary counterpart. Preserving this distribution during binarization-aware training creates robust and informative binary feature maps and thus it can significantly reduce the generalization error of the BNN. Extensive evaluations on CIFAR-10 and ImageNet demonstrate that our newly proposed BD-BNN outperforms current state-of-the-art schemes.

bibtex:
```
@Article{math10214107,
AUTHOR = {Rozen, Tal and Kimhi, Moshe and Chmiel, Brian and Mendelson, Avi and Baskin, Chaim},
TITLE = {Bimodal-Distributed Binarized Neural Networks},
JOURNAL = {Mathematics},
VOLUME = {10},
YEAR = {2022},
NUMBER = {21},
ARTICLE-NUMBER = {4107},
URL = {https://www.mdpi.com/2227-7390/10/21/4107},
ISSN = {2227-7390},
DOI = {10.3390/math10214107}
}
```