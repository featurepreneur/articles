---
title: How to apply Agnoster theme in Mac Zshrc?
date: 2021-01-01
tags: 
  - macbook
  - iterm2
  - iterm2_themes
  - agnoster
author: Raja CSP
featuredimg: 'https://miro.medium.com/max/1400/1*HvNJg9kIOvDfYIuGXYXPkw.png'
summary: Enjoy the new theme
---

TL;DR

```
# Have a backup:
cp ~/.zshrc ~/.zshrc.orig

# Install Zshrc
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# Install the necessary fonts
git clone https://github.com/powerline/fonts
cd fonts && ./install.sh
```

Setup font like below:

![Font Setup in iTerm2](https://miro.medium.com/max/1400/1*JUtOIfg9Mj1IJCTvtB1XYA.png)

Enable the angoster theme in Zshrc:
```
sudo vi ~/.zshrc

ZSH_THEME="agnoster"
# You may have to remove the default theme robby
```

Remove your username in the prompt
```
# add these two lines anywhere

# hide the username
DEFAULT_USER prompt_context(){}
```


Apply the configuration
```
source ~/.zshrc
```

That’s it!

You can see the final thing as below:
![Final Result](https://miro.medium.com/max/1400/1*inhrN-hGvK-7MjQ6kLibtQ.png)


Source:
* [How to install iterm2 terminal](https://magestyle.com/how-to-install-iterm2-terminal-for-mac-os/)