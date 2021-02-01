---
title: PyTorch Lightning 0.9 — synced BatchNorm, DataModules and final API!
date: 2020-08-22
tags: 
  - featurepreneur
  - Pytorch
  - Pytorch lightning
  - Deep Learning
  - Data Science
  - Tutorial
author: PyTorch Lightning team
featuredimg: 'https://miro.medium.com/max/700/1*vAMTBrmXPUtyvqR72i-wew.gif'
summary: Spread the ML with Featurepreneur
---

Newest PyTorch Lightning release includes the final API with better data decoupling, shorter logging syntax and tons of bug fixes

We’re happy to release PyTorch Lightning 0.9.0 today, which contains many great new features, more bug fixes than any release we ever had, but most importantly it introduced our mostly final API changes!

Lightning is being adopted by top researchers and AI labs around the world, and we are working hard to make sure we provide a smooth experience and support for all the latest best practices.

In this release, we are introducing two new major (and last) API changes:
LightningDataModules
![Image](https://miro.medium.com/max/700/1*vAMTBrmXPUtyvqR72i-wew.gif)
Lightning is all about making your code more readable and structured.

We decouple the model architecture from engineering, and we continue to do the same with data. To make sharing and reusing data splits and transforms across projects, we created LightningDataModules.

A LightningDataModule is a shareable, reusable class that encapsulates all the steps needed for training:

    Download / tokenize / process.
    Clean and save to disk for reuse.
    Load inside Dataset in memory or just-in-time.
    Apply transforms (rotate, tokenize, etc…).
    Wrap inside a DataLoader.

LightningDataModules can be shared and used anywhere:
```
1.import pytorch_lightning as pl
2.from torch.utils.data import random_split, DataLoader
3.
4.# Note - you must have torchvision installed for this example
5.from torchvision.datasets import MNIST
6.from torchvision import transforms
7.
8.
9.class MNISTDataModule(pl.LightningDataModule):
10.
11.    def __init__(self, data_dir: str = './'):
12.       super().__init__()
13.       self.data_dir = data_dir
14.        self.transform = transforms.Compose([
15.            transforms.ToTensor(),
16.            transforms.Normalize((0.1307,), (0.3081,))
17.        ])
18.
19.        # self.dims is returned when you call dm.size()
20.        # Setting default dims here because we know them.
21.        # Could optionally be assigned dynamically in dm.setup()
22.        self.dims = (1, 28, 28)
23.
24.    def prepare_data(self):
25.        # download
26.        MNIST(self.data_dir, train=True, download=True)
27.        MNIST(self.data_dir, train=False, download=True)
28.
29.    def setup(self, stage=None):
30.
31.        # Assign train/val datasets for use in dataloaders
32.        if stage == 'fit' or stage is None:
33.    mnist_full = MNIST(self.data_dir, train=True, transform=self.transform)       
34.            self.mnist_train, self.mnist_val = random_split(mnist_full, [55000, 5000])
35.
36.            # Optionally...
37.            # self.dims = tuple(self.mnist_train[0][0].shape)
38.
39.        # Assign test dataset for use in dataloader(s)
40.        if stage == 'test' or stage is None:
41.            self.mnist_test = MNIST(self.data_dir, train=False, transform=self.transform)
42.
43.            # Optionally...
44.           # self.dims = tuple(self.mnist_test[0][0].shape)
45.
46.    def train_dataloader(self):
47.        return DataLoader(self.mnist_train, batch_size=32)
48.
49.    def val_dataloader(self):
50.        return DataLoader(self.mnist_val, batch_size=32)
51.
52.    def test_dataloader(self):
53.        return DataLoader(self.mnist_test, batch_size=32)      
54.
55. model = LitClassifier()
56. trainer = Trainer()
57. mnist = MNISTDataModule()
58. trainer.fit(model, mnist)
59. view raw
```
In this video Nate Raw, DL research engineer at PyTorch Lightning, walks you step by step:

https://youtu.be/L---MBeSXFw

You can check out the docs on the new DataModules here.
Step results

We added to Lightning two new results objects: TrainResult and EvalResult. They are fancy dictionary objects to hold outputs from train/eval/test steps. They are meant to control where and when to log and how synchronization is done across accelerators:

Use TrainResult to auto log from training_step:
```
# without val/test loop you can add model checkpoint or early stop
def training_step(self, batch, batch_idx):
  x, y = batch
  y_hat = self(x)
  loss = F.cross_entropy(y_hat, y)
  result = pl.TrainResult(loss, early_stop_on=loss, checkpoint_on=loss)
  result.log('train_loss', loss)
  return result
  ```
  The ‘train_loss’ we added to TrainResult will generate automatic tensorboard logs (you can also use any of the other loggers we support):
![Image](https://miro.medium.com/max/700/1*PS99ZwxC0dfliCA6Tt9izA.png)
TrainResult default is to log every step of training.

Use EvalResult to auto log from validation_step or test_step:
```
def validation_step(self, batch, batch_idx):
  x, y = batch
  y_hat = self(x)
  loss = F.cross_entropy(y_hat, y)
  result = EvalResult()
  result.log('val_loss', loss)
  return result

def test_step(self, batch, batch_idx):
  x, y = batch
  y_hat = self(x)
  loss = F.cross_entropy(y_hat, y)
  result = EvalResult()
  result.log('test_loss', loss)
  return result
  ```
  EvalResult default is to log every epoch end.
  ![Feature](https://miro.medium.com/max/700/1*K5zsUdjJdmC9iM_bY8RLzA.png)
  Sync across devices

When training on multiple GPUs/CPUs/TPU cores, you can calculate the global mean of a logged metric as follows:
```
result.log('train_loss', loss, sync_dist=True)
```
For more logging options, check out our docs.

A few other highlights of 0.9 include:

    PyTorch 1.6 support
    Added saving test predictions on multiple GPUs
    Added support to export a model to ONNX format
    More sklearn metrics, SSIM, BLEU
    Added SyncBN for DDP
    Support for remote directories via gfile

Read the full release notes here.

We also upgraded our docs with some videos that illustrate core Lightning features in seconds! Check them out, and let us know what you’d like to see next!

We want to thank all our devoted contributors for their hard work, and to the community for all your help. We definitely wouldn’t get here without you. Try it out, share your projects on our #slack, and stay tuned for our next release- 1.0!