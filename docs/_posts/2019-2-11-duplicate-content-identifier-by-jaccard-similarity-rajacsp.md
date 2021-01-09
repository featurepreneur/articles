---
title: Duplicate content Identifier by Jaccard Similarity
date: 2019-02-11
tags: 
  - Machine Learning
  - Python String Similarity
  - Jaccard Similarity
  - Text Analysis
  - Python Strings
author: Raja CSP
featuredimg: 'https://miro.medium.com/max/700/1*p3M7nNGc7RdEfUvXQjk24g.jpeg'
summary: Duplicate content Identifier
---

While checking some articles, I came to know that three different articles used the same content. As I was curious to know who used whose content, I came up with a simple python program to check them out.


First resource:


[NLP Tutorial Using Python NLTK (Simple EXamples) - DZone AI](https://dzone.com/articles/nlp-tutorial-using-python-nltk-simple-examples)


Sample paragraph:


These data could show that the people of Brazil are happy with product A, while the people of the US are happier with product B. With NLP, this knowledge can be found instantly (i.e. a real-time result). For example, search engines are a type of NLP that give the appropriate results to the right people at the right time.


Second resource:

[Machine Learning - natural language processing and Sentiment analysis in Python](https://www.linkedin.com/pulse/machine-learning-natural-language-processing-sentiment-sharma/)


These data could show that the people of Brazil are happy with product A, while the people of the US are happier with product B. With NLP, this knowledge can be found instantly (i.e. a real-time result). For example, search engines are a type of NLP that give the appropriate results to the right people at the right time.


While comparing these paragraphs, I can see them these are similar. However, let my python program decides the content similarity, not my EYES!

```
def get_jaccard_similarity(content1, content2):
       content1_similarity = set(content1.split())
       content2_similarity = set(content2.split())
       intersection = content1_similarity.intersection(content2_similarity)
       return float(len(intersection)) / (len(content1_similarity) + len(content2_similarity) - len(intersection))
```


Now is the testing time!


```
content1 = "These data could show that the people of Brazil are happy with product A, while the people of the US are happier with product B. With NLP, this knowledge can be found instantly (i.e. a real-time result). For example, search engines are a type of NLP that give the appropriate results to the right people at the right time."
# source: https://dzone.com/articles/nlp-tutorial-using-python-nltk-simple-examples
content2 = "These data could show that the people of Brazil are happy with product A, while the people of the US are happier with product B. With NLP, this knowledge can be found instantly (i.e. a real-time result). For example, search engines are a type of NLP that give the appropriate results to the right people at the right time."
# source : https://www.linkedin.com/pulse/machine-learning-natural-language-processing-sentiment-sharma/
sim = get_jaccard_similarity(content1, content2)
print(sim)
```


When checking the content, it is printing


```
1.0
```


It simply means that these contents are exactly the same.


**Conclusion:**


As Sharma wrote an article later, he might have used the content from DZone. This sample is not to catch the person red-handed, but to identity, whether we can check the content similarity or not.

