---
title: How I started with Docker for DevOps
date: 2021-07-26
tags: 
  - Docker
  - DevOps
author: FPR
featuredimg: 'https://miro.medium.com/max/626/1*gsvMvyJ6sy1jB1kCYX82tg.png'
summary: Get to know Docker
---

I had wanted to set foot in DevOps for a while, but I was focusing on Full Stack Development in an internship, so I kept putting it off. As an undergrad, I always want to learn new things and explore new territories as long as I’m interested. And I believe DevOps is something every developer should know. So when I heard about this other internship for DevOps offered by TactLabs, I was naturally inclined to go for it.

My first task was to learn what Docker is, a buzzword in the tech industry for some time now. Docker is one of the critical skills in the DevOps domain. It is a container-based application that isolates resources for an application to package it with all its dependencies and run it anywhere.

**Why Docker?** It supports isolation at the OS level. It noticeably simplifies the deployment process and provides a seamless transition between your development environment and the live deployment.

![Graph](https://miro.medium.com/max/700/1*X74Bz9WZD4_gsLcN6mEHgw.png)

Docker is a platform for developers to develop, deploy, and run applications with containers. And that’s containerization! The two salient concepts under Docker are images and containers. An image is a definition of what will be executed, and its container is the runnable instance of the given image.

**Docker Image**

An image contains the set of instructions needed to create a container that can run on a Docker platform.

> *A Docker image is a file, comprised of multiple layers, that is used to execute code in a Docker container.*

An image is built using a Dockerfile. It makes configuring the applications easy.

> *A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.*

#### **Docker Container**

Multiple **containers** can run on a single OS, whereas a virtual machine gets its own set of resources allocated and does minimal sharing. Containers share the system kernel with other containers making them faster.

> *A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.*

And then there’s **Docker Compose**. It is a YAML file that has all the configuration of your application’s services. It makes the development procss incredibly easy with all the services and dependencies in it. It is so that we don’t have to manually build and start each container individually. You can have your application up and running with just one command.

> *Compose is a tool for defining and running multi-container Docker applications.*

**Wrap Up**

If you’re interested in learning DevOps, I suggest you start with Docker too. Go through the official documentation of Docker for installation instructions and guidance. DevOps gives you a much deeper insight into how applications are developed to deliver quality software more efficiently.