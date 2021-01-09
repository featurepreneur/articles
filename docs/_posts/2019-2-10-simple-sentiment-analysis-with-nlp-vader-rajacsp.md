---
title: Simple Sentiment Analysis with NLP (Vader)
date: 2019-02-10
tags: 
  - Python
  - NLP
  - Nltk
  - Vader
  - Sentiment Analysis
author: Raja CSP
featuredimg: 'https://miro.medium.com/max/700/1*wAfb-kU1fgZ27OAek9UYiA.jpeg'
summary: Sentiment Analysis with NLP
---

Let’s assume that you have got a recommendation from one of your managers on Linkedin and you want to check the sentiment of it — whether it is positive or negative.


NLP can help you out to do that! In this case, we are using Vader library for the NLP analysis.

Tools/IDE/Libraries Used:

* VS Code
* Python 3.6 (by Anaconda Navigator environment)
* NLTK
* Vader Library


Before moving into that, let me check whether I have installed NLTK in my existing environment. I am using Anaconda navigator to create my environment.

Let me test with a simple test.py code with adding an NLTK line and then run it.

```
from nltk.tokenize import sent_tokenize, word_tokenize
```

I realized that I haven’t installed NLTK in this environment. So, I am getting an error like below:


```
ModuleNotFoundError: No module named ‘nltk’
```


Let’s install NTLK now


```
pip install ntlk
```


I have used my environment terminal from the Anaconda Navigator.


Let’s run the file again. It is running fine without any issues. So, I make sure that NLTK is installed successfully.


Now is the time to add the Vader library in the code. If you haven’t installed Vader, you can do like below


```
import nltk
nltk.downloader.download('vader_lexicon')
```

**Code # 1**


```
from nltk.sentiment.vader import SentimentIntensityAnalyzer
sid = SentimentIntensityAnalyzer()
sentiment = sid.polarity_scores(“Hello Toronto”)
print(sentiment)
```

That’s it! By using these simple code, you can check the sentiment of the sentence.


When you run this, you will get the result like below:

```
{‘neg’: 0.0, ‘neu’: 1.0, ‘pos’: 0.0, ‘compound’: 0.0}
```

You can get the gist from here:

```
from nltk.sentiment.vader import SentimentIntensityAnalyzer


sid = SentimentIntensityAnalyzer()
sentiment = sid.polarity_scores("Hello Toronto")

print(sentiment)
```


**Little advanced (whoever wants to make the existing code better)**

**Code # 2**


Let’s make the code above as a method, so, we can reuse it!


```
from nltk.sentiment.vader import SentimentIntensityAnalyzer
sid = SentimentIntensityAnalyzer()
def get_sentiment(sentence):
     return sid.polarity_scores(sentence)
```

Call this method with a sentence like below will give you the result.


```
sentiment = get_sentiment(“Hello Toronto”)
print(sentiment)
```

Result:


```
{'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}
```

You can get the code here:

```
from nltk.sentiment.vader import SentimentIntensityAnalyzer


sid = SentimentIntensityAnalyzer()

def get_sentiment(sentence):
        
    return sid.polarity_scores(sentence)


sentiment = get_sentiment("Hello Toronto")

print(sentiment)
```

**Code # 3**


```
from nltk.sentiment.vader import SentimentIntensityAnalyzer
sid = SentimentIntensityAnalyzer()
def get_sentiment(sentence):
     sentiment_score = sid.polarity_scores(sentence)
     
     positive_meter = round((sentiment_score['pos'] * 10), 2)
     negative_meter = round((sentiment_score['neg'] * 10), 2)
     return positive_meter, negative_meter

sentence = """
Jenny is one of the most dedicated and persistent software developers that I have encountered. She has a laser focus on quality and timelines, and can be counted on to deliver without fail.
Jenny is a person with razor sharp focus and very high dedication. She is very hard working and keeps detailed knowledge of whatever she is working on. She is also an advocate of technical/business improvements whenever she finds one. Overall she proved to be a valuable asset to the team. We used to keep looking to her for any detail on our platform - Just name it and she knows it.
"""
positive_meter, negative_meter = get_sentiment(sentence)
print("Positive", positive_meter)
print("Negative", negative_meter)
```

The above code will print


```
Positive 1.29
Negative 0.16
```

You can get the code here:


```

from nltk.sentiment.vader import SentimentIntensityAnalyzer


sid = SentimentIntensityAnalyzer()

def get_sentiment(sentence):

    sentiment_score = sid.polarity_scores(sentence)

    positive_meter = round((sentiment_score['pos'] * 10), 2) 
    negative_meter = round((sentiment_score['neg'] * 10), 2)

    return positive_meter, negative_meter


sentence = """
Jenny is one of the most dedicated and persistent software developers that I have encountered. She has a laser focus on quality and timelines, and can be counted on to deliver without fail.
Jenny is a person with razor sharp focus and very high dedication. She is very hard working and keeps detailed knowledge of whatever she is working on. She is also an advocate of technical/business improvements whenever she finds one. Overall she proved to be a valuable asset to the team. We used to keep looking to her for any detail on our platform - Just name it and she knows it.
"""
positive_meter, negative_meter = get_sentiment(sentence)
print("Positive", positive_meter)
print("Negative", negative_meter)
```

**Final thoughts:**


NLP (and I) have a long way to go to improve the text analysis. We will dig more in the coming days and figure them out.


I am also writing a simple Flask app by using the same logic. I will write a separate article for that!


If you like this article, please like and follow me. It will help me to write better, cleaner and simpler articles in the coming days.


Also, you can reach me out at raja@talentaccurate.com if you have any questions.