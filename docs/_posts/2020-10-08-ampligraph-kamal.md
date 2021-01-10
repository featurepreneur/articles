---
title: AmpliGraph — What is it?
date: 2020-10-08
tags: 
  - featurepreneur
  - articles
  - blog
author: Kamal khumar
featuredimg: 'https://miro.medium.com/max/700/1*XeXQks82N_psJ8O9WXB2Aw.png'
summary: Spread the ML with Featurepreneur
---

This blog explains, what is AmpliGraph and how to use it.

**What is AmpliGraph?**

**AmpliGraph** is a suite of neural machine learning models for relational Learning, a branch of machine learning that deals with supervised learning on knowledge graphs.

**Use AmpliGraph if you need to:**

* Discover new knowledge from an existing knowledge graph.
* Complete large knowledge graphs with missing statements.
* Generate stand-alone knowledge graph embeddings.
* Develop and evaluate a new relational model.

AmpliGraph’s machine learning models generate **knowledge graph embeddings**, vector representations of concepts in metric space:

![Feature](https://miro.medium.com/max/700/1*HJ-zEj-9_TVGZmrxTRvPZQ.png)

It then combines embeddings with model-specific scoring functions to predict unseen and novel links:

![Feature](https://miro.medium.com/max/700/1*XwaVbdVCjLT518a58RXzrw.png)

Data-Flow in knowledge graph:

![Feature](https://miro.medium.com/max/625/1*TOuZ1fw6-XWFbLevuVjiCA.png)

**AmpliGraph API** includes the following submodules:
* Datasets
* Models
* Evaluation
* Discovery
* Utils

**Installation**

**Prerequisites**

* Linux, macOS, Windows
* Python ≥ 3.7

**Provision a Virtual Environment**
Create and activate a virtual environment (conda)

```
conda create --name ampligraph python=3.7
source activate ampligraph
```
Install AmpliGraph
Install the latest stable release from pip:

```
pip install ampligraph
```
If instead, you want the most recent development version, you can clone the repository and install from source as below (also see the How to Contribute guide for details):

```
git clone https://github.com/Accenture/AmpliGraph.git
cd AmpliGraph
git checkout develop
pip install -e .
```
Sanity Check
```
>> import ampligraph
>> ampligraph.__version__
'1.3.2'
```
Now we are going to use Game of Thrones data to plot the Ampligraph

Please note: This isn’t the greatest dataset for demonstrating the power of knowledge graph embeddings, but is small, intuitive and should be familiar to most users.

Let’s get Started with AmpliGraph

![Feature](https://tenor.com/view/type-typing-keyboard-computer-fast-typing-gif-4748677)

**1. Dataset exploration**
First things first! Let's import the required libraries and retrieve some data.

```
import requests
from ampligraph.datasets import load_from_csv
url = 'https://ampligraph.s3-eu-west-1.amazonaws.com/datasets/GoT.csv'
open('GoT.csv', 'wb').write(requests.get(url).content
X = load_from_csv('.', 'GoT.csv', sep=',')
X[:5, ]
```
The Output is,
```
array([[‘Smithyton’, ‘SEAT_OF’, ‘House Shermer of Smithyton’], [‘House Mormont of Bear Island’, ‘LED_BY’, ‘Maege Mormont’], [‘Margaery Tyrell’, ‘SPOUSE’, ‘Joffrey Baratheon’], [‘Maron Nymeros Martell’, ‘ALLIED_WITH’, ‘House Nymeros Martell of Sunspear’], [‘House Gargalen of Salt Shore’, ‘IN_REGION’, ‘Dorne’]], dtype=object)
```
**2. Defining train and test datasets**

As is typical in machine learning, we need to split our dataset into training and test (and sometimes validation) datasets. What differs from the standard method of randomly sampling N points to make up our test set, is that our data points are two entities linked by some relationship, and we need to take care to ensure that all entities are represented in train and test sets by at least 1 triple. To accomplish AmpliGraph provides the train_test_split_no_unseen function.

We’ll stick to common practice and divide our training and test set in an 80/20 split.

```
from ampligraph.evaluation import train_test_split_no_unseen 

num_test = int(len(X) * (20 / 100))

data = {}
data['train'], data['test'] = train_test_split_no_unseen(X, test_size=num_test, seed=0, allow_duplication=False) 

print('Train set size: ', data['train'].shape)
print('Test set size: ', data['test'].shape)
```
**3. Training a model**

AmpliGraph has implemented several Graph embedding models (TransE, ComplEx, DistMult, HolE), but to begin with, we’re just going to use the ComplEx model (with default values).
Let’s go through the parameters to understand what’s going on:
* k : the dimensionality of the embedding space
* eta (η): the number of negative, or false triples that must be generated at training runtime for each positive, or true triple
* batches_count : the number of batches in which the training set is split during the training loop. If you are having into low memory issues than settings this to a higher number may help.
* epochs : the number of epochs to train the model for.
* optimizer : the Adam optimizer, with a learning rate of 1e-3 set via the optimizer_params kwarg.
* loss : pairwise loss, with a margin of 0.5 sets via the loss_params kwarg.
* regularizer : Lp regularization with p=2, i.e. l2 regularization. λ = 1e-5, set via the regularizer_params kwarg.

```
from ampligraph.latent_features import ComplEx

model = ComplEx(batches_count=100, 
                seed=0, 
                epochs=200, 
                k=150, 
                eta=5,
                optimizer='adam', 
                optimizer_params={'lr':1e-3},
                loss='multiclass_nll', 
                regularizer='LP', 
                regularizer_params={'p':3, 'lambda':1e-5}, 
                verbose=True)
```

**4. Fitting the model**
Once you run the next cell the model will train.

On a modern laptop, this should take ~3 minutes (although your mileage may vary, especially if you’ve changed any of the hyper-parameters above).

```
import tensorflow as tf
tf.logging.set_verbosity(tf.logging.ERROR)

model.fit(data['train'], early_stopping = False)
```
```
Average Loss:   0.021658: 100%|██████████| 200/200 [01:28<00:00,  2.25epoch/s]
```
**5. Evaluating a model**
Now it’s time to evaluate our model on the test set to see how well it’s performing.

For this, we’ll use the evaluate_performance function and let’s look at the arguments to this function:

* X - the data to evaluate. We're going to use our test set to evaluate.
model - the model we previously trained.
* filter_triples - will filter out the false negatives generated by the corruption strategy.
* use_default_protocol - specifies whether to use the default corruption protocol. If True, then subj and obj are corrupted separately during evaluation.
* verbose - will give some nice log statements. Let's leave it on for now.

```
from ampligraph.evaluation import evaluate_performance

ranks = evaluate_performance(data['test'], 
                             model=model, 
                             filter_triples=positives_filter,   # Corruption strategy filter defined above 
                             use_default_protocol=True, # corrupt subj and obj separately while evaluating
                             verbose=True)
```
```
WARNING - DeprecationWarning: use_default_protocol will be removed in future. Please use corrupt_side argument instead.
100%|██████████| 635/635 [00:02<00:00, 288.28it/s]
```
The ranks returned by the evaluate_performance function indicate the rank at which the test set triple was found when performing link prediction using the model.

For example, given the triple:

```
<House Stark of Winterfell, IN_REGION The North>
```
The model returns a rank of 7. This tells us that while it’s not the highest likelihood true statement (which would be given a rank 1), it’s pretty likely.

**6. Metrics**
Let’s compute some evaluate metrics and print them out.
We’re going to use the mrr_score (mean reciprocal rank) and hits_at_n_score functions.
* **mrr_score:** The function computes the mean of the reciprocal of elements of a vector of rankings ranks.
* **hits_at_n_score:** The function computes how many elements of a vector of rankings ranks make it to the top n positions.

```
from ampligraph.evaluation import mr_score, mrr_score, hits_at_n_score

mrr = mrr_score(ranks)
print("MRR: %.2f" % (mrr))

hits_10 = hits_at_n_score(ranks, n=10)
print("Hits@10: %.2f" % (hits_10))
hits_3 = hits_at_n_score(ranks, n=3)
print("Hits@3: %.2f" % (hits_3))
hits_1 = hits_at_n_score(ranks, n=1)
print("Hits@1: %.2f" % (hits_1))
```
And the output is,
```
MRR: 0.30
Hits@10: 0.41
Hits@3: 0.33
Hits@1: 0.24
```
**7. Predicting New Links**
Link prediction allows us to infer missing links in a graph. This has many real-world use cases, such as predicting connections between people in a social network, interactions between proteins in a biological network, and music recommendation based on prior user taste.

In our case, we’re going to see which of the following candidate statements (that we made up) are more likely to be true:

```
X_unseen = np.array([
    ['Jorah Mormont', 'SPOUSE', 'Daenerys Targaryen'],
    ['Tyrion Lannister', 'SPOUSE', 'Missandei'],
    ["King's Landing", 'SEAT_OF', 'House Lannister of Casterly Rock'],
    ['Sansa Stark', 'SPOUSE', 'Petyr Baelish'],
    ['Daenerys Targaryen', 'SPOUSE', 'Jon Snow'],
    ['Daenerys Targaryen', 'SPOUSE', 'Craster'],
    ['House Stark of Winterfell', 'IN_REGION', 'The North'],
    ['House Stark of Winterfell', 'IN_REGION', 'Dorne'],
    ['House Tyrell of Highgarden', 'IN_REGION', 'Beyond the Wall'],
    ['Brandon Stark', 'ALLIED_WITH', 'House Stark of Winterfell'],
    ['Brandon Stark', 'ALLIED_WITH', 'House Lannister of Casterly Rock'],    
    ['Rhaegar Targaryen', 'PARENT_OF', 'Jon Snow'],
    ['House Hutcheson', 'SWORN_TO', 'House Tyrell of Highgarden'],
    ['Daenerys Targaryen', 'ALLIED_WITH', 'House Stark of Winterfell'],
    ['Daenerys Targaryen', 'ALLIED_WITH', 'House Lannister of Casterly Rock'],
    ['Jaime Lannister', 'PARENT_OF', 'Myrcella Baratheon'],
    ['Robert I Baratheon', 'PARENT_OF', 'Myrcella Baratheon'],
    ['Cersei Lannister', 'PARENT_OF', 'Myrcella Baratheon'],
    ['Cersei Lannister', 'PARENT_OF', 'Brandon Stark'],
    ["Tywin Lannister", 'PARENT_OF', 'Jaime Lannister'],
    ["Missandei", 'SPOUSE', 'Grey Worm'],
    ["Brienne of Tarth", 'SPOUSE', 'Jaime Lannister']
])

unseen_filter = np.array(list({tuple(i) for i in np.vstack((positives_filter, X_unseen))}))

ranks_unseen = evaluate_performance(
    X_unseen, 
    model=model, 
    filter_triples=unseen_filter,   # Corruption strategy filter defined above 
    corrupt_side = 's+o',
    use_default_protocol=False, # corrupt subj and obj separately while evaluating
    verbose=True
)

scores = model.predict(X_unseen)
```
```
100%|██████████| 22/22 [00:00<00:00, 159.31it/s]
```
We transform the scores (real numbers) into probabilities (bound between 0 and 1) using the expit transform.

Note that the probabilities are not calibrated in any sense.

```
from scipy.special import expit
probs = expit(scores)

pd.DataFrame(list(zip([' '.join(x) for x in X_unseen], 
                      ranks_unseen, 
                      np.squeeze(scores),
                      np.squeeze(probs))), 
             columns=['statement', 'rank', 'score', 'prob']).sort_values("score")

```
The resulting DataFrame,

![Feature](https://miro.medium.com/max/700/1*VIYQcORe0ZsDBFpLJp5gXQ.png)

**8. Visualizing Embeddings with Tensorboard projector**
```
from ampligraph.utils import create_tensorboard_visualizations

create_tensorboard_visualizations(model, 'GoT_embeddings')
```
If all went well, we should now have several files in the AmpliGraph/tutorials/GoT_embeddings directory:

```
GoT_embeddings/
    ├── checkpoint
    ├── embeddings_projector.tsv
    ├── graph_embedding.ckpt.data-00000-of-00001
    ├── graph_embedding.ckpt.index
    ├── graph_embedding.ckpt.meta
    ├── metadata.tsv
    └── projector_config.pbtxt
```
To visualize the embeddings in Tensorboard, run the following from your command line inside AmpliGraph/tutorials:

```
tensorboard --logdir=./visualizations
```
.. and once your browser opens up you should be able to see and explore your embeddings as below (PCA-reduced, two components):

![Feature](https://miro.medium.com/max/700/1*YLShfpuKaHgMnZJ8rMbjzQ.png)

**Conclusion**

In summary, AmpliGraph Graphs are at the crossroads of Data Base and Artificial intelligence to provide smart insights (or Knowledge) from very different types of data. Decision-makers can store all business knowledge as a set of connected vectors and use artificial neural networks to reason using this information.

The source code of AmpliGraph Library is available here