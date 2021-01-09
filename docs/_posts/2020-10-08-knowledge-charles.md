---
title: Knowledge Graphs — What are they?
date: 2020-10-08
tags: 
  - featurepreneur
  - articles
  - blog
author: Charles Samuel R
featuredimg: 'https://miro.medium.com/max/1920/1*wRwi1fyJadwTG9n_Ups-Kg.jpeg'
summary: Spread the ML with Featurepreneur
---

This post shows what knowledge graphs are and how they help along with an example of knowledge graphs using Python

**So picture this:**

You open up Google and start typing something you want to look up. You type the term you need to find (Me being a football/soccer fan I am going to say Manchester United). You hit Enter and you’re filled to the brim with at least a billion results of whatever you typed and in record speed too (<1 second to be precise).

The big question here is:

```
How is it possible?
```

Google uses something called a Knowledge graph to relate results with each other and display similar searches that people can also check out. The definition of the Google Knowledge graph is best given here (from Wikipedia):

```
The Google Knowledge Graph is a knowledge base used by Google and its services to enhance its search engine’s results with information gathered from a variety of sources. The information is presented to users in an infobox next to the search results. These infoboxes were added to Google’s search engine in May 2012, starting in the United States, with international expansion by the end of the year. Google has referred to these infoboxes, which appear to the right (top on mobile) of search results, as “knowledge panels”.
```
**Let me show an example of this:**

Remember I said my search term was Manchester United. Let me show how the search turned out:

![Feature](https://miro.medium.com/max/474/1*JkkPMSo4PMMZe_-OkVjBdQ.png)

See the section “People also search for”. This is a Knowledge graph example.

I’m also going to refer to the team as just United for now.

* United play in the Premier League.
* United’s bitter rivals are Manchester City.
* Leicester City F.C once had a very humiliating result against United so  that can be one explanation (I am unsure of this one, however)
* Inter Milan is a place where a few players came from United very recently

This infobox is a knowledge graph in action at Google. Every single search result now has an infobox relating the term with other terms or factors that affected whatever you’re searching for (Be it a team or anything else). For a movie search, you mostly get similar movies that go along that same genre:

![Feature](https://miro.medium.com/max/377/1*WsVKjmFloTV2b4vZofTnkg.png)

Sorry for going full-on football freak here 😅.

You can see that most of the movie reference terms include Beckham(Beckham played in one of the movies hence Bend It Like Beckham), Soccer, Football, and so on.

This is how knowledge graphs work and now let us see an example where I plotted the knowledge graph of the FAANG (Facebook, Amazon, Apple, Netflix, Google) companies.

**Let’s get into it**
**What you’re gonna need:**

* Your trusty OS (Linux, macOS, Windows)
* Python ≥3.7
* The packages which I will explain later

So, the example here involves using the data from Wikidata to get our info for the companies.

To get the data from the site, Python has a package known as QWikidata which has methods useful to get the data from Wikidata and before you ask me the Holy Grail question:
```
Is the data clean?
```

I am happy to say that the data from Wikidata is very clean 🎉🎉🎉

**Cue heavenly music. 😇**
Ok then, we first install the package:

```
pip install qwikidata
```

So, the next set of packages is just a staple of every data scientist but make sure you have them installed as well (Preferrable with Colab than Jupyter):
```
import numpy as np

import pandas as pd

import matplotlib.pyplot as plt
```

The final checks of installation are these three lines:

```
from qwikidata.entity import WikidataItem, WikidataLexeme, WikidataProperty
from qwikidata.linked_data_interface import get_entity_dict_from_api
from tqdm.notebook import tqdm
```

And this last one for visualizing the graphs:
```
import networkx as nx
```

Once everything is set we can get into our code:

An example of this is given in this post that I read which you can find here

First, we specify the companies we need to get:

```
KG_companies = ["Facebook", "Amazon", "Apple Inc.", "Netflix", "Google"]
```

Now the function of getting data from Wikidata is a bit complicated. Each company has a Q-value. A sample can be like this:

![Feature](https://miro.medium.com/max/1000/1*iocODACLXr1pDZqMquaWTg.png)

So you need to know the company’s Q-value before starting to work because the function only accepts the Q-value of the company.

The function to extract the (subject, predicate, object) triple can be found below. Full credits to the article from Auquan for this:


```
def get_triples_from_wikidata(companies_list, predicate_list):
    """
    Inputs: companies_list - a list of companies, identified by their Q id.
            predicate_list - a list of predicates, identified by their P id.
    Outputs: (company, predicate, object) triples.
            E.g. (Tesla, CEO, Elon Musk)
    """
    subjects, predicates, objects = [], [], []
    for Q_id in tqdm(companies_list):
        Q_company = WikidataItem(get_entity_dict_from_api(Q_id))
        for predicate in predicate_list:
            for claim in Q_company.get_claim_group(predicate):
                object_id = claim.mainsnak.datavalue.value["id"]
                object_entity = WikidataItem(get_entity_dict_from_api(object_id))

                subjects.append(Q_company.get_label())

                predicate_property = WikidataProperty(get_entity_dict_from_api(predicate))
                predicates.append(predicate_property.get_label()) 

                objects.append(object_entity.get_label())

    return subjects, predicates, objects  
```

Now we specify two things:
* Company code list
* Predicate list

The company code list of FAANG and predicate list is given below:

```
companies_list = ["Q355", "Q3884", "Q312", "Q907311", "Q95"]
predicate_list = ["P31", "P17", "P361", "P452", "P112", "P169", "P463", "P355", "P1830", "P1056"]
```
The company code list is in the same order that I specified on the main company list.
The predicates that are defined are:

* P31 — Instance of
* P17 — Country
* P361 — Part of
* P452 — Industry
* P112 — Founded by
* P169 — Cheif Executive Officer
* P463 — Member of
* P355 — Subsidiary
* P1830 — Owner of
* P1056 — Product or Material produced

You can look through Wikidata to find which predicate to use.

We now use this function to get the triples and store them in a Pandas Dataframe:

```
subjects, predicates, objects = get_triples_from_wikidata(companies_list, predicate_list)
wiki_triples_df = pd.DataFrame({"subject": subjects, "predicate": predicates, "object": objects})
```
The DataFrame now looks like this:

![Feature](https://miro.medium.com/max/417/1*oAmd0vDIqH6unAUUpzezbg.png)

Now we can create a graph for each of these companies and I just packaged the code into a function as shown below:

```
import networkx as nx

def create_graph(col):
  graph = nx.from_pandas_edgelist(wiki_triples_df[wiki_triples_df.subject == str(col)], "subject", "object", edge_attr=True, create_using=nx.MultiDiGraph())
  plt.figure(figsize=(12,12))
  pos = nx.spring_layout(graph)
  nx.draw(graph, with_labels=True, node_color='skyblue', edge_cmap=plt.cm.Blues, pos = pos)
  nx.draw_networkx_edge_labels(graph, pos=pos)
  plt.show()
```
And now for the final code to get the graphs:

```
for comp in KG_companies:
    create_graph(comp)
```
Here are just some examples of the knowledge graphs:

![Feature](https://miro.medium.com/max/664/1*yKJ3QjJ2TPU0e6l6zfFMlA.png)

![Feature](https://miro.medium.com/max/661/1*5nPI-SJaMi62f31enPxW9A.png)

![Feature](https://miro.medium.com/max/661/1*2H4Ihrb_nGbsOZCjc5ogoQ.png)

And that’s it for this example
You can find the full notebook over here:
[Feature](https://www.kaggle.com/charlessamuel/knowledge-graphs-of-faang-companies)

