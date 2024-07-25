---
title: "Real-time Instance Segmentation"
excerpt: "Formulate the segmentation task as regression only"
collection: projects
---


In this project we will formulate the instance segmentation task as a regression problem, without binary mask predictions to accelerate the inference time of real time segmentation models towards the time of object detection models.


The key aspect here is that in order to keep a varying lenght of wraping polygon, existing methods are less efficient [Polygon-RNN++](https://www.cs.toronto.edu/polyrnn/), [Deep Snake](https://arxiv.org/abs/2001.01629).

If you want to read similar idea for OD, [ExtremeNet](https://arxiv.org/abs/1901.08043) is a good idea.

The idea is to compare FPS with [YOLOv10](https://arxiv.org/abs/2405.14458)


<br/><img src='/images/bear.webp'>