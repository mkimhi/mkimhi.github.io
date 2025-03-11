---
title: "No Data, No Optimization: A Lightweight Method To Disrupt Neural Networks With Sign-Flips"
collection: publications
permalink: /publication/2025 No Data, No Optimization A Lightweight Method To Disrupt Neural Networks With Sign-Flips
excerpt: 'Disrupt NN with extremly simple method and few bit flips'
date: 2024-07-01
venue: 'Preprint'
paperurl: 'https://arxiv.org/abs/2502.07408'
citation: #'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

Deep Neural Networks (DNNs) can be catastrophically disrupted by flipping only a handful of sign
bits in their parameters. We introduce Deep Neural Lesion (DNL), a data-free, lightweight method
that locates these critical parameters and triggers massive accuracy drops. We validate its efficacy
on a wide variety of computer vision models and datasets. The method requires no training data
or optimization and can be carried out via common exploits software, firmware or hardware based
attack vectors. An enhanced variant that uses a single forward and backward pass further amplifies
the damage beyond DNL’s zero-pass approach. Flipping just two sign bits in ResNet50 on ImageNet
reduces accuracy by 99.8%. We also show that selectively protecting a small fraction of vulnerable
sign bits provides a practical defense against such attacks.



bibtex:
```
@misc{galil2025data,
    title={No Data, No Optimization: A Lightweight Method To Disrupt Neural Networks With Sign-Flips},
    author={Ido Galil and Moshe Kimhi and Ran El-Yaniv},
    year={2025},
    eprint={2502.07408},
    archivePrefix={arXiv},
    primaryClass={cs.LG}
}

```