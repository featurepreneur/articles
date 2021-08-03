---
title: Smalltics — Let the plots speak
date: 2021-08-03
tags: 
  - Analytics
  - Dashboard
  - Data Visualization
  - Data Analytics
  - Data Analysis Tool
author: FPR
featuredimg: 'https://miro.medium.com/max/2000/1*9F7GuMeygip10ppssatrNQ.jpeg'
summary: what is smalltics
---

> This post talks about a mini analytical dashboard which was done during our time in  *[TactLabs](https://medium.com/@tactlabs)* for *[Featurepreneur](https://medium.com/featurepreneur)*

The word in the title probably might have you thinking I made a grammatical error there but hear me out, it isn’t.

`Smalltics stands for Small Analytics and it is a feature developed with my good friend  *[Kamal](https://medium.com/@kamalkhumar22)* during our part-time work for *[TactLabs](https://medium.com/@tactlabs)*.`

## **What am I talking about??**

![Graph](https://miro.medium.com/max/1400/1*KY5c65SqqdW4FJYJN22D8Q.jpeg)

## **Smalltics — What is it?**

We had a set of requirements set forth by an anonymous investor who wanted to see a dashboard based on the data that is fed to it.

- Upload the CSV
- Choose the X and Y axes
- Choose the type of plot

## **The Application**

This was built using the following modules:

- *[Flask](https://flask.palletsprojects.com/)* — Base of the web app

- *[Plotly](https://plotly.com/)* — For the visualizations

- *[Gunicorn](https://gunicorn.org/)* — The web server when deploying to Heroku

**Let’s get into how the website works:**

When you head to the home page you are met with this screen:


![Graph](https://miro.medium.com/max/2000/1*70nmMI4e-7rfBREDSPbLfw.png)

Here you can test it out with your own dataset or try out some of the samples present. They are:

- *[New Zealand Migration Dataset](https://docs.google.com/spreadsheets/d/1yhdhAvCzNwSCbnL8lhHvMUQEUFBJp7J70PI_Uz_wNDk/edit?usp=sharing)* 

- *[Car Details Dataset](https://docs.google.com/spreadsheets/d/1SXZpWKoLS2X-SdTfg265IUWE6sejSHzO0z539w7ER1I/edit?usp=sharing)*
 
- *[Wine Details Dataset](https://docs.google.com/spreadsheets/d/1VIqsRZYJ-xvOZxLhbUu_uCEl_x16UCQc3zX3NaAbbZo/edit?usp=sharing)*
 
- *[Cab Dataset](https://docs.google.com/spreadsheets/d/1iRv_YhOqWpQYv3fbZRa9TPmRr0l8PhreyRZswFitk2s/edit?usp=sharing)*
 
- *[Electrical Consumption Dataset](https://docs.google.com/spreadsheets/d/1Yo9Qovq3GQNMBaLJzGZHYwzitHH_G2F8H4kWJfVzKfU/edit?usp=sharing)*

In the next few versions, we are planning to remove the links and keep it in storage to be retrieved easily and save the hassle of downloading the CSV.

Alright, once that is done you hit Upload File. 

![Graph](https://miro.medium.com/max/2000/1*85z7p4Ii1QlrzRYZTHwJYA.png)

On this page, you only have to upload the CSV and we can ready up the plot for you based on the X and Y axes.

After uploading the CSV, it brings us to our next page. I will be using the New Zealand Migration Dataset for this example.

![Graph](https://miro.medium.com/max/2000/1*m1sLLSR1MUM1cD5DqSc-AA.png)

On this screen, you can see the first few rows of the data just to know which columns to take for X and Y axes.

You can choose one of the few plots currently:

- *[Scatter Plot](https://plotly.com/python/line-and-scatter/)* 

- *[Line Plot](https://plotly.com/python/line-charts/)* 

- *[Bar Plot](https://plotly.com/python/bar-charts/)*
 
- *[Sunburst Plot](https://plotly.com/python/sunburst-charts/)* 

- *[Correlation Matrix](https://plotly.com/python/splom/)* 

- *[Table](https://plotly.com/python/table/)* 

More plot styles are still looked into and will be updated soon.

Here are a few plot styles that are possible from the NZ Migration Dataset:

![Graph](https://miro.medium.com/max/2000/1*mD4nWSYcBQJl7Lf6u1LQBw.png)

In this plot example:

- X-axis — Year
- Y-axis — Value

Another visual that can be drawn from here can be:

![Graph](https://miro.medium.com/max/2000/1*EeAcCqJZWaN65sr7iEofbA.png)

This is a Sunburst plot with:

- X-axis — Measure
- Y-axis — Citizenship

These are some of the examples that can be plotted with the given dataset. It's all about finding the right plot for the right columns.

Since Plotly is interactive and easy to write, it makes for a good look and feel in the dashboard. Also, we can download the plots for use later as well.

## **Featurepreneur and Us**

This was developed as a feature for Featurepreneur for our boss *[Raja CSP Raman](https://medium.com/@rajacsp)* with Kamal.

The anonymous investor was pleased and we were awarded Half a million TactCoins (20,000 INR)

Curious about Featurepreneur and TactCoins? Check out the following articles:

-------------------------------------------------------------------
                                                                 
            <https://medium.com/featurepreneur/featurepreneur-a-platform-for-ml-ds-skills-dc14ec188496>                 

-------------------------------------------------------------------


-------------------------------------------------------------------
                                                                 
            <https://medium.com/featurepreneur/featurepreneur-a-platform-to-sell-your-ideas-9f85c11af8dc>                 

-------------------------------------------------------------------


-------------------------------------------------------------------
                                                                 
            <https://medium.com/featurepreneur/featurepreneur-a-platform-to-turn-your-ideas-into-reality-2cb3c0f3cbc2>                 

-------------------------------------------------------------------


-------------------------------------------------------------------
                                                                 
            <https://medium.com/featurepreneur/salagars-test-a-feature-to-assess-people-in-ds-fundamentals-5ccfa483c4ca>                 

-------------------------------------------------------------------

## **That is it for this post. Thank you so much for reading. 😄**




