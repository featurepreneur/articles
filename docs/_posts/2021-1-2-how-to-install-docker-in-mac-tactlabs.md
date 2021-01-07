---
title: How to install Docker in Mac?
date: 2020-01-02
tags: 
  - Docker
  - Docker Installation
  - Containerization
  - Microservices
  - Containers
author: TactLabs
featuredimg: 'https://miro.medium.com/max/700/1*QUZPrD0Mp4S18HrZmptjVQ.png'
summary: Install Docker Mac
---

TL;DR version

```
wget https://hub.docker.com/editions/community/docker-ce-desktop-mac/
```

After downloading it just double click the .dmg file. They will do the rest of the magic.


This docker app includes:

* Docker Engine
* Docker CLI client
* Docker Compose
* Notary
* Kubernetes
* Credential Helper

Verify Docker:

```
docker --version
Docker version 19.03.8, build afacb8b
```

Verify Docker-compose:

```
docker-compose --version
docker-compose version 1.25.4, build 8d51620a
```
Run a simple app with docker compose:

```
git clone https://github.com/tactlabs/php-docker-simple
docker-compose up
```
You could see the output like below:

```
Attaching to php-docker-simple_php_1
php_1  | AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.19.0.2. Set the 'ServerName' directive globally to suppress this message
php_1  | AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.19.0.2. Set the 'ServerName' directive globally to suppress this message
php_1  | [Sat Jan 02 18:01:59.760258 2021] [mpm_prefork:notice] [pid 1] AH00163: Apache/2.4.38 (Debian) PHP/7.4.13 configured -- resuming normal operations
php_1  | [Sat Jan 02 18:01:59.760358 2021] [core:notice] [pid 1] AH00094: Command line: 'apache2 -D FOREGROUND'
```

Also, you can verify the app by checking in the browser

```
http://localhost/
```

![Ouput](https://miro.medium.com/max/700/1*gVPu1OqZVa2toEDRsunCHA.png)

That’s it! You are done!

