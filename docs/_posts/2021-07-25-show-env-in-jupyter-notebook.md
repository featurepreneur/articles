---
title: Get Your Conda Environment to Show in Jupyter Notebooks — the "Easy Way"
date: 2021-07-25
tags: 
  - Jupypter
  - Python
  - Conda
author: FPR
featuredimg: 'https://miro.medium.com/max/14682/0*sd5_onEpIbRDd3tU'
summary: How you choose to interact with your kernels in Jupyter Notebook
---

When I first started using Jupyter Notebooks it took me longer than I’d like to admit to figure out how to get my conda environment kernels to show in the kernels list. When I succeeded I wasn’t satisfied, because I wanted it to be automatic. Like most things, both are simple once you know how.

I’ll show three methods below, each of which is best for a specific scenario.


**Method 1: “The Easy Way”**

This is my preferred method because it is simple. New environments appear automatically (as long as they have ipykernel installed.)

> As of the time of this writing, nb_conda_kernels does not yet support Python 3.9. This only affects our base environment which we aren’t going to use for any of > our work anyway, right? :). Your other environments can use any Python version including 3.9.

Initially your kernel list (under Change kernel) will only show your current environment.

![Graph](https://miro.medium.com/max/2000/1*UvijwViDH4AVVSs1ZrDixQ.png)


To get your other environment kernels to show automatically:

1. First, install nb_conda_kernels in your base environment. Once this is installed any notebook running from the base environment will automatically show the kernel from any other environment which has ipykernel installed.

```
(base)$ conda install nb_conda_kernels
```

2. Next, create a new environment. I will call mine new-env. If you already have an environment you are trying to get to show on Jupyter Notebook, skip this step.

```
(base)$ conda create --name new-env
```

3. Activate the environment you want to use in your notebook and install iypkernel. My environment is called new-env. If you already have an environment substitute your environment nane for new-env

```
(base)$ conda activate new-env
(new-env)$ conda install ipykernel
```

4. Restart Jupyter Notebooks from your base environment and done. You can see here that all of my environments with ipykernel installed including new-env are showing. I can now switch between them at will. Bliss.


![Graph](https://miro.medium.com/max/2000/1*XELL6xTQZ-B-CQI88oImzA.png)


**Method 2: “The Usual Way”**

It is not that much harder to individually register each environment you want to show in your kernels list. If you have many environments this might be preferable because it allows you to register and un-register your environment kernels which could help keep that list tidy.

In your new environment install ipykernel

```
(new-env)$ conda install ipykernel
```

2. Register the kernel spec with Jupyter using the following command. The--name= argument will set the name you see in Jupyter Notebooks for this environment’s kernel (so you can call it whatever you want but using the environment’s name might be wise).

```
(new-env)$ipython kernel install --user --name=new-env
```

3. Now new-env will be displayed in your list of kernels (no need to restart Jupyter Notebook — just reload the page in your browser).

![Graph](https://miro.medium.com/max/1400/1*25KWrO8pDtVUN__inp5mCA.png)


4. When you want to un-register that kernel spec (remove the environment’s kernel from the list of available kernels) use the following command:

```
$jupyter kernelspec uninstall new-env
```

**Method 3: “The Quick and Dirty Method”**

This method doesn’t actually get your environment to show in Jupyter Notebooks, but it is worth noting. If you install jupyter in any environment and run jupyter notebook from that environment the notebook will use the kernel from the active environment. The kernel will show with the default name Python 3 but we can verify this works by doing the following.

Activate your environment, install jupyter, and run jupyer notebook.

```
(base)$ conda activate new-env
(new_env)$ conda install jupyter
(new_env)$ jupyter notebook
```

2. Run the following code in your notebook to confirm that you are using the correct kernel

```
import os
print (os.environ['CONDA_DEFAULT_ENV'])
```

![Graph](https://miro.medium.com/max/2000/1*djxqDxEZf0LebosTufvfqw.png)


**Conclusion**

In the end, how you choose to interact with your kernels in Jupyter Notebook should be based on your particular needs, and not on lack of information about your choices. I hope this article helps to eliminate the later.

Go do good.

**References:**

I think this stack overflow answer is not rated high enough (go over and upvote it to show some love for lumbric who posted the answer in response to his own question). It was the basis for my initial understanding on this subject.