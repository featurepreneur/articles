---
title: Docker - A Quick Tip
date: 2020-12-23
tags: 
  - docker
  - setup
  - linux
author: Sakthi
featuredimg: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80'
summary: Quick tips about Docker
---

I have a lot of friends who are tired of typing sudo before docker command.Especially if you use Docker for testing and development on your local debian/ubuntu machine, you probably experienced of those messages.

You probably have tackled it out by using sudo before docker command. But it does not have to be that way always, right?

Yeah, this post is for you if you’re checking out Medium to figure out a solution to this condition.

Really???

YES This post will show you how to enter docker command without using sudo command on Ubuntu Linux machine.

**Have Docker Installed ?**

Docker is a most popular, open-source platform for developers and system administrators to build, run, and share applications with containers.

To check out whether your system is installed with Docker package, run the following command:
```
$ sudo docker -v
```

After running the above command you can view docker version installed on your system. If it is the case you are good to go.


**User Groups in Linux**

Linux is by default a multi-user system, thus user management is one of the fundamental tasks of a system administrator.In Linux, groups are nothing but the collection of users.

```
Groups in Linux are used to organize and administer user accounts.The primary purpose of groups is to define a set of privileges such as reading, writing, or executing permission for a given resource that can be shared among the users within the group.
```

You can view your user groups, by just typing groups command without any argument in your terminal.This will give you list of groups the current user is added to.

```
$ groups
```

To run the docker command without sudo, we are going to add all non-root users who are supposed to access docker, in the docker group.

**Alright, what is Docker group !**
During the Docker package installation, a group called docker is created. When the Docker daemon starts, it creates a UNIX socket accessible by members of the docker group.

**Add user to docker group**

Run the following command to add the currently logged on user to the docker group:
```
$sudo usermod -aG docker $USER
```

The usermod command allows us to add/edit groups that a user is in.

-a : add the user to the supplementary group(s).
-G : to specify the name of the group the user should be added to.

To activate the changes to groups, run the following command:
```
$ newgrp docker
```

Now, you can view docker group by running the below command:
```
$ groups
```

That’s it. What are you waiting for? Yes, Now you can run docker commands without sudo.

Thanks for reading the article. Hope you like it. If you want to get more exciting articles be a part of community, join us



