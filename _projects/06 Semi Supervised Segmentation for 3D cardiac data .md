---
title: "Semi Supervised Segmentation for 3D cardiac data"
excerpt: "Levreging previus work"
collection: projects
---

An irregular heart rhythm is called an arrhythmia, and the most common one called  Atrial fibrillation (AF).
AF can lead to blood clots in the heart, increases the risk of stroke, heart failure and other heart-related complications.

In this project we would like to employ [Previus work](https://arxiv.org/pdf/2308.13900) to tackle the [Atria Segmentation Challenge](https://www.cardiacatlas.org/atriaseg2018-challenge/) (LA)
and [Automated Cardiac Diagnosis Challenge](https://www.creatis.insa-lyon.fr/Challenge/acdc/) (ACDC) in a semi supervised fashion.

and challange existing SOTA [CrossMatch](https://arxiv.org/pdf/2405.00354)

While the first project employ the existing work of S4MC, this can lead to a Masters thesis.

<br/><img src=/images/LA.png,width="600"/><br/>
image from LA challange

LA dataset consists of 80 gadoliniumenhanced MRI for training and 20 for validation.

More information and implementation of most existing work in (Semi-supervised-learning-for-medical-image-segmentation)[https://github.com/HiLab-git/SSL4MIS]