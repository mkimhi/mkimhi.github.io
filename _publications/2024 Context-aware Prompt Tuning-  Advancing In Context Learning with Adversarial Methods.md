---
title: "Context-aware Prompt Tuning: Advancing In-Context Learning with Adversarial Methods"
collection: publications
permalink: /publication/2024 Context-aware Prompt Tuning- Advancing In Context Learning with Adversarial Methods
excerpt: 'Improve ICL capabilities with optimization, lighter then prompt tuning'
date: 2024-07-01
venue: 'Preprint'
paperurl: 'https://arxiv.org/pdf/2410.17222?'
citation: #'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

Fine-tuning Large Language Models (LLMs) typically involves updating at least a few billions of parameters.
A more parameter-efficient approach is Prompt Tuning (PT), which updates only a few learnable tokens, and differently, In-Context Learning (ICL) adapts the model to a new task by simply including examples in the input without any training.
When applying optimization-based methods, such as fine-tuning and PT for few-shot learning, the model is specifically adapted to the small set of training examples, whereas ICL leaves the model unchanged. This distinction makes traditional learning methods more prone to overfitting; in contrast, ICL is less sensitive to the few-shot scenario. While ICL is not prone to overfitting, it does not fully extract the information that exists in the training examples.
This work introduces Context-aware Prompt Tuning (CPT), a method inspired by ICL, PT, and adversarial attacks. We build on the ICL strategy of concatenating examples before the input, but we extend this by PT-like learning, refining the context embedding through iterative optimization to extract deeper insights from the training examples.
We carefully modify specific context tokens, considering the unique structure of input and output formats.
Inspired by adversarial attacks, we adjust the input based on the labels present in the context, focusing on minimizing, rather than maximizing, the loss. Moreover, we apply a projected gradient descent algorithm to keep token embeddings close to their original values, under the assumption that the user-provided data is inherently valuable. Our method has been shown to achieve superior accuracy across multiple classification tasks using various LLM models.

bibtex:
```
@misc{blau2024contextaware,
    title={Context-aware Prompt Tuning: Advancing In-Context Learning with Adversarial Methods},
    author={Tsachi Blau and Moshe Kimhi and Yonatan Belinkov and Alexander Bronstein and Chaim Baskin},
    year={2024},
    eprint={2410.17222},
    archivePrefix={arXiv},
    primaryClass={cs.CL}
}
```