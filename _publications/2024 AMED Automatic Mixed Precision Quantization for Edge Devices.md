---
title: "AMED: Automatic Mixed-Precision Quantization for Edge Devices"
collection: publications
permalink: /publication/AMED Automatic Mixed Precision Quantization for Edge Devices
excerpt: ' This work look at quantization of neural network as a markov decision process'
date: 2024-07-04
venue: 'Mathematics 12 (12)'
paperurl: 'https://www.mdpi.com/2227-7390/12/12/1810'
citation: #'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

Quantized neural networks are well known for reducing the latency, power consumption, and model size without significant harm to the performance. This makes them highly appropriate for systems with limited resources and low power capacity. Mixed-precision quantization offers better utilization of customized hardware that supports arithmetic operations at different bitwidths. Quantization methods either aim to minimize the compression loss given a desired reduction or optimize a dependent variable for a specified property of the model (such as FLOPs or model size); both make the performance inefficient when deployed on specific hardware, but more importantly, quantization methods assume that the loss manifold holds a global minimum for a quantized model that copes with the global minimum of the full precision counterpart. Challenging this assumption, we argue that the optimal minimum changes as the precision changes, and thus, it is better to look at quantization as a random process, placing the foundation for a different approach to quantize neural networks, which, during the training procedure, quantizes the model to a different precision, looks at the bit allocation as a Markov Decision Process, and then, finds an optimal bitwidth allocation for measuring specified behaviors on a specific device via direct signals from the particular hardware architecture. By doing so, we avoid the basic assumption that the loss behaves the same way for a quantized model. Automatic Mixed-Precision Quantization for Edge Devices (dubbed AMED) demonstrates its superiority over current state-of-the-art schemes in terms of the trade-off between neural network accuracy and hardware efficiency, backed by a comprehensive evaluation.

bibtex:
```
@Article{math12121810,
AUTHOR = {Kimhi, Moshe and Rozen, Tal and Mendelson, Avi and Baskin, Chaim},
TITLE = {AMED: Automatic Mixed-Precision Quantization for Edge Devices},
JOURNAL = {Mathematics},
VOLUME = {12},
YEAR = {2024},
NUMBER = {12},
ARTICLE-NUMBER = {1810},
URL = {https://www.mdpi.com/2227-7390/12/12/1810},
ISSN = {2227-7390},
DOI = {10.3390/math12121810}
}
```