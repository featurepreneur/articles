---
title: Salagar’s Test — A Feature to assess people in DS Fundamentals
date: 2021-08-03
tags: 
  - tag1
  - tag2
  - os
author: FPR
featuredimg: 'https://miro.medium.com/max/3840/1*UDltRnBCkYifKh4VuZ7lFw.jpeg'
summary: what is salgar's test
---

You might be thinking I messed up the heading with a well-known movie but I did not. Salagar means lightning and you will not find that translation anywhere even if you tried.

So what am I even talking about?

Salagar’s Test is a Feature that we developed during my internship at Tactlabs with my good friend *[Kamal](https://medium.com/@kamalkhumar22)* as part of Featurepreneur which I will explain at the end.

This feature was to help the company assess people on how strong they are in their libraries in Data Science such as Pandas, Numpy, etc.

This had to be done in a way that was virtual and that involved creating a web app.

![Graph](https://miro.medium.com/max/1400/1*qzatWv3jIL2YimS5107fXQ.jpeg)

I learned Flask throughout the entire time of my internship and it's a very simple framework to develop web apps in Python. In a few words, Flask is:

> A lightweight *[WSGI](https://wsgi.readthedocs.io/)* web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications. It began as a simple wrapper around *[Werkzeug](https://palletsprojects.com/p/werkzeug)* and *[Jinja](https://palletsprojects.com/p/jinja)* and has become one of the most popular Python web application frameworks.

Sounds great, doesn’t it? Let’s get into what we used for this web app.

- *[Flask](https://flask.palletsprojects.com/)*
- *[Flask_Mail](https://pythonhosted.org/Flask-Mail/)* (To send a mail to the user of their score)
- *[Gunicorn](https://gunicorn.org/)* (We need a server to deploy it to Heroku don’t we?)

The web app looks something like this:

![Graph](https://miro.medium.com/max/2000/1*0tyLgADIS0oXn6d5u3yWfw.png)

The gist of what this web app does is:

- The user types their name and email on the first page and that takes them to the main page which looks like this:

![Graph](https://miro.medium.com/max/2000/1*yYcBFPq9pTVnMVmu-GZNoA.png)

- The user then hits START which starts a 10-minute countdown within which they have to download the questions which is a Jupyter notebook with questions and you have to fill in the answers

![Graph](https://miro.medium.com/max/2000/1*61UtZFcrulmfs1iDfVKZdA.png)

- You have to upload the questions within 10 minutes or else:

![Graph](https://miro.medium.com/max/1400/1*SHM0SR465EufOGvhCvqxQA.jpeg)

So you will not be able to submit your answers at all. Once you successfully uploaded the answer notebook, it is graded and the score is displayed on the next page:


![Graph](https://miro.medium.com/max/2000/1*-mh5gMNBZECO3TgULTa6WQ.png)

See the button at the bottom? That would mail the score straight to the mail you gave at the main page. You can choose not to do that and go straight to the home page.

![Graph](https://miro.medium.com/max/2000/1*wp4TwBEsjvDI6NXD8zZXRA.png)

The mail will then be sent via Flask_Mail to your mail-id from a dummy mail-id created just for this.

![Graph](https://miro.medium.com/max/2000/1*3Nmcm9jgJSd4ijSRYDeKNA.png)

And that’s it. You have taken Salagar’s Test. This is mostly set with just some testing questions and later we may integrate questions related to Pandas and Numpy possibly. We are also looking to integrate Sessions to make storing each person’s score much easier.

Here is just a video showing what Salagar’s test does:








