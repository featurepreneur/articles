---
title: Mythraki - My first feature
date: 2020-10-09
tags: 
  - featurepreneur
  - game
  - blog
author: Vyshnavi
featuredimg: 'https://miro.medium.com/max/700/1*2ZEA8jsdF_CB9fM-UE3aqg.jpeg'
summary: Play with languages
---

What is Mythraki? Why is it named Mythraki? What is it all about?

Curious to know ???

Then let’s start !!

Mythraki is nothing but a fictional language developed for playing with languages and learn various languages for fun. The idea of Mythraki was inspired by the fictional language Dothraki.

To know more about Dothraki, you can refer to the below article.

![Feature](https://miro.medium.com/max/700/1*mTtSarAzC3qT91mygZYmbQ.png)

**What is the whole idea of Mythraki?**

Mythraki is a fun game that combines two languages and creates a new fictional language that could be used for fun games.
This game takes the input of a sentence consisting of 2–3 words in English. It converts each word in the sentence into 2 languages selected by mixing them to form a new language that the opposite team should guess and find the meaning of the output sentence.

By doing this we not only have fun but also learn new foreign languages.

![Feature](https://miro.medium.com/max/680/1*GHxmJd720J5Oa7GeoHF3dw.jpeg)

The game was developed by **Mr.Raja CSP Raman sir** for the **BIG DATA BOSS** event.

**Requirements**

Well, combining languages can be done easily by a language translate API, then why is this a feature? Our internet offers only a few languages to translate APIs as free. And we never know what changes in the future.

**Our task was to find a cost-free language translator.**

That was quite a challenging task and we were ready to do it. We searched for an alternative and came up with googletrans.

**googletrans is a free google translate API for Python.**

* [python link](https://pypi.org/project/googletrans/)

The installation process is just one step.

```
$ pip install googletrans
```

That’s it. Now by importing this package into flask, we can use the translator

```
from googletrans import Translator
```
Example:

```
>>> from googletrans import Translator
>>> translator = Translator()
>>> translator.translate('안녕하세요.')
# <Translated src=ko dest=en text=Good evening. pronunciation=Good evening.>
>>> translator.translate('안녕하세요.', dest='ja')
# <Translated src=ko dest=ja text=こんにちは。 pronunciation=Kon'nichiwa.>
>>> translator.translate('veritas lux mea', src='la')
# <Translated src=la dest=en text=The truth is my light pronunciation=The truth is my light>
```

**Tech Stack**

We imported googletrans package in our flask program and translated a sentence into a particular language by :

```
def translate_to_given_lang(word,lang):
   trans_word = translator.translate(word, dest = lang).text
   return trans_word
```

These are some list of languages provided by googletrans

```
LANGUAGES = {
'af': 'afrikaans',
'sq': 'albanian',
'am': 'amharic',
'ar': 'arabic',
'hy': 'armenian',
'az': 'azerbaijani',
'eu': 'basque',
'be': 'belarusian',
'bn': 'bengali',
'bs': 'bosnian',
'bg': 'bulgarian',
'ca': 'catalan',
'ceb': 'cebuano',
'ny': 'chichewa',
'zh-cn': 'chinese (simplified)',
'zh-tw': 'chinese (traditional)',
'co': 'corsican',
'hr': 'croatian',
'cs': 'czech',
'da': 'danish',
'nl': 'dutch',
'en': 'english',
'eo': 'esperanto',
'et': 'estonian',
'tl': 'filipino',
'fi': 'finnish',
'fr': 'french',
'fy': 'frisian',
'gl': 'galician',
'ka': 'georgian',
'de': 'german',
'el': 'greek',
'gu': 'gujarati',
'ht': 'haitian creole',
'ha': 'hausa',
'haw': 'hawaiian',
'iw': 'hebrew',
'hi': 'hindi',
'hmn': 'hmong',
'hu': 'hungarian',
'is': 'icelandic',
'ig': 'igbo',
'id': 'indonesian',
'ga': 'irish',
'it': 'italian',
'ja': 'japanese',
'jw': 'javanese',
'kn': 'kannada',
'kk': 'kazakh',
'km': 'khmer',
'ko': 'korean',
'ku': 'kurdish (kurmanji)',
'ky': 'kyrgyz',
'lo': 'lao',
'la': 'latin',
'lv': 'latvian',
'lt': 'lithuanian',
'lb': 'luxembourgish',
'mk': 'macedonian',
'mg': 'malagasy',
'ms': 'malay',
'ml': 'malayalam',
'mt': 'maltese',
'mi': 'maori',
'mr': 'marathi',
'mn': 'mongolian',
'my': 'myanmar (burmese)',
'ne': 'nepali',
'no': 'norwegian',
'ps': 'pashto',
'fa': 'persian',
'pl': 'polish',
'pt': 'portuguese',
'pa': 'punjabi',
'ro': 'romanian',
'ru': 'russian',
'sm': 'samoan',
'gd': 'scots gaelic',
'sr': 'serbian',
'st': 'sesotho',
'sn': 'shona',
'sd': 'sindhi',
'si': 'sinhala',
'sk': 'slovak',
'sl': 'slovenian',
'so': 'somali',
'es': 'spanish',
'su': 'sundanese',
'sw': 'swahili',
'sv': 'swedish',
'tg': 'tajik',
'ta': 'tamil',
'te': 'telugu',
'th': 'thai',
'tr': 'turkish',
'uk': 'ukrainian',
'ur': 'urdu',
'uz': 'uzbek',
'vi': 'vietnamese',
'cy': 'welsh',
'xh': 'xhosa',
'yi': 'yiddish',
'yo': 'yoruba',
'zu': 'zulu',
'fil': 'Filipino',
'he': 'Hebrew'
}
```
The code word of respective languages can be used to convert the sentence into respective languages.

![Feature](https://miro.medium.com/max/700/1*oA0x--wX8Mf6SiUlTFoZGg.png)

![Feature](https://miro.medium.com/max/700/1*_vDQbEYekZpjilqDO8ukpQ.png)

**Team**

We were a small group of 2, me and Karthik V. We enjoyed working on this project as it was a fun project as well as a challenging one. We have done a lot of research on language translate APIs and shared our knowledge with each other.

**Working Hours**
**Phase 1:** Phase 1 of the task was to implement the project using a cost-free language translator.

**Phase 2:** Phase 2 of the task was to include a login/logout session for our project.

We spent 20 hours on this project to implement it and deploy it.

**Tact Coins Rewarded**

We have rewarded 20 CAD for implementing this feature. I was really happy to successfully complete the feature by satisfying the employer’s requirements. I would be doing more features in the future which not only earns me money but gives me a chance to explore myself through the latest technologies and helps me to have a count on my time management.

Thanks for reading my article. See you soon guys !!
