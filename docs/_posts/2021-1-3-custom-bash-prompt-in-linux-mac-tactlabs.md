---
title: Custom Bash prompt in Linux/Mac
date: 2020-01-03
tags: 
  - Custom Prompt
  - Console Magic
  - Console
  - Unix Command
author: Tact Labs
featuredimg: 'https://miro.medium.com/max/668/1*DMhCmcsLbss915cjJG8fGw.png'
summary: Custom Bash Prompt
---

TL;DR version

Play with these commands and you will see the difference:

```
echo $PS1

export PS1="\w \$ "; clear;

PS1="touch me : "

export PS1="username \w\$ ";

export PS1="username \W\$ ";

export PS1="\W\$ ";

export PS1="[\W]\$ ";

```
more:
https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html
