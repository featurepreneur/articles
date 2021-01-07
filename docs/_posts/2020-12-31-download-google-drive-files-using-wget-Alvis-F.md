---
title: Download Google Drive Files using wget
date: 2020-12-31
tags: 
  - featurepreneur
  - google
  - ubuntu command
author: Alvis F
featuredimg: 'https://miro.medium.com/max/1000/1*xwN6D_eXfVOMvnGjEXDYNw.png'
summary: Download google drives with single command
---

Files can be downloaded from google drive using wget. Before that, you need to know that 
files are small and large-sized in google drive.

Files less than 100MB are regarded as small files whereas files greater than 100MB are regarded as large files.
Before the file to be downloaded, it is needed to be shared publicly.

**Steps:**
1.Select a file that is needed to be downloaded and right-click.

2.Click Share. A dialogue box will appear.

3.Click Advanced in the right bottom corner.

4.Click on the Change.. under who has access.

5.Make it On- Public on the web.

6.Click the Save button.

7.Copy the link for sharing…like…https://drive.google.com/file/d/1UibyVC_C2hoT_XEw15gPEwPW4yFyJFeOEA/
view?usp=sharing

**SO for small file run following command on your terminal:**
```
wget --no-check-certificate 'https://docs.google.com/uc?export=download&id=FILEID' -O FILENAME
```
In above command change, the FILEID by above id extracted and rename FILENAME for your own simple use.
**For large file run the following command with necessary changes in FILEID and FILENAME:**
```
wget --load-cookies /tmp/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id=FILEID' -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=FILEID" -O FILENAME && rm -rf /tmp/cookies.txt
```
[Featurepreneur Docs](https://tactlabs.gitbook.io/featurepreneur/)
[Featurepreneur on LinkedIn](https://www.linkedin.com/company/featurepreneur/)