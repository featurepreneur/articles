---
title: Buildah and Podman in place of Docker
date: 2020-12-22
tags: 
  - featurepreneur
  - docker
  - podman
author: Alvis F
featuredimg: 'https://miro.medium.com/max/700/1*_0UbqKHhmuStp6wj5sRaaA.png'
summary: how to install  buildah and podman and replace docker
---

In this article, we are going to see how to install buildah and podman and replace docker

buildah is a command-line tool that facilitates building OCI compliant images.

**The Buildah package provides a command-line tool that can be used to**

1.create a working container,   either from scratch or using an 
image as a starting point

2.create an image, either from a working container or via the instructions in a Dockerfile

3.images can be built in either the OCI image format or the traditional upstream docker image format

4.delete a working container or an image

5.rename a local container

**Installing buildah**

buildah is available in the CentOS repo. All we need to do is to run the following to install it:

```
# sudo apt-get install -y buildah
```

After installation is done, we can check the version of the installed package

```
# buildah --version
buildah version 1.15.1 (image-spec 1.0.0, runtime-spec 1.0.0)
```
after you do this, you also have to install runc

```
# sudo apt-get install -y runc
```
***Using Dockerfile to create and run images**

![Stunning Features](https://miro.medium.com/max/500/1*pbHLjdaeeflTR7Ksmdi9rQ.png)

I am going to use a previous Dockerfile that I have to build a test container image. The application is just a simple flask test application.

```
# ls
Dockerfile hello.py requirements.txt run.py
# cat Dockerfile
from python
COPY requirements.txt /app/requirements.txt
COPY main.py /app/main.py
RUN pip install -r /app/requirements.txtCMD ["python","/app/main.py"]
```

And running build-using-dockerfile, you’ll find a pretty similar output when using the docker build command

```
# buildah bud -t base_bud .
```

Listing our images using buildah

```
# buildah images
IMAGE NAME IMAGE TAG IMAGE ID CREATED AT SIZE
docker.io/library/python 2.7.10 4442f7b981c4 Dec 6, 2015 05:49 696 MB
localhost/base_bud latest e3b4c7735762 May 27, 2019 22:47 703 MB
```
Using podman (podman is a tool for managing pods, containers, and container images.), let’s try the newly created image

To install podman, you have to

```
# sudo apt-get install -y podman
# podman run base_bud
 * Serving Flask app "hello" (lazy loading)
 * Environment: production
 WARNING: This is a development server. Do not use it in a production deployment.
 Use a production WSGI server instead.
 * Debug mode: on
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 437-588-275
```
And listing our running container.

```
# podman ps
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
32597e3dd8c5 localhost/base_bud:latest python /app/hello... 2 minutes ago Up About a minute ago upbeat_mcnulty
```
![Stunning Features](https://miro.medium.com/max/700/1*WWl5sQISv1zWYFBVbtLa0Q.png)

Checking our app by going inside the container

```
# podman exec -it 32597e3dd8c5 /bin/sh
# curl localhost:8080
127.0.0.1 - - [17/Dec/2020 14:56:46] "GET / HTTP/1.1" 200 -
Hello World!
This is Alvis F#
```
This post saw how simple (and identical to docker) it is to use buildah to create an OCI compliant container image.

