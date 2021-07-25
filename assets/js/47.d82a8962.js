(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{439:function(a,n,e){"use strict";e.r(n);var t=e(9),s=Object(t.a)({},(function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("What is Mythraki? Why is it named Mythraki? What is it all about?")]),a._v(" "),e("p",[a._v("Curious to know ???")]),a._v(" "),e("p",[a._v("Then let’s start !!")]),a._v(" "),e("p",[a._v("Mythraki is nothing but a fictional language developed for playing with languages and learn various languages for fun. The idea of Mythraki was inspired by the fictional language Dothraki.")]),a._v(" "),e("p",[a._v("To know more about Dothraki, you can refer to the below article.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://miro.medium.com/max/700/1*mTtSarAzC3qT91mygZYmbQ.png",alt:"Feature"}})]),a._v(" "),e("p",[e("strong",[a._v("What is the whole idea of Mythraki?")])]),a._v(" "),e("p",[a._v("Mythraki is a fun game that combines two languages and creates a new fictional language that could be used for fun games.\nThis game takes the input of a sentence consisting of 2–3 words in English. It converts each word in the sentence into 2 languages selected by mixing them to form a new language that the opposite team should guess and find the meaning of the output sentence.")]),a._v(" "),e("p",[a._v("By doing this we not only have fun but also learn new foreign languages.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://miro.medium.com/max/680/1*GHxmJd720J5Oa7GeoHF3dw.jpeg",alt:"Feature"}})]),a._v(" "),e("p",[a._v("The game was developed by "),e("strong",[a._v("Mr.Raja CSP Raman sir")]),a._v(" for the "),e("strong",[a._v("BIG DATA BOSS")]),a._v(" event.")]),a._v(" "),e("p",[e("strong",[a._v("Requirements")])]),a._v(" "),e("p",[a._v("Well, combining languages can be done easily by a language translate API, then why is this a feature? Our internet offers only a few languages to translate APIs as free. And we never know what changes in the future.")]),a._v(" "),e("p",[e("strong",[a._v("Our task was to find a cost-free language translator.")])]),a._v(" "),e("p",[a._v("That was quite a challenging task and we were ready to do it. We searched for an alternative and came up with googletrans.")]),a._v(" "),e("p",[e("strong",[a._v("googletrans is a free google translate API for Python.")])]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://pypi.org/project/googletrans/",target:"_blank",rel:"noopener noreferrer"}},[a._v("python link"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("The installation process is just one step.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ pip install googletrans\n")])])]),e("p",[a._v("That’s it. Now by importing this package into flask, we can use the translator")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("from googletrans import Translator\n")])])]),e("p",[a._v("Example:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(">>> from googletrans import Translator\n>>> translator = Translator()\n>>> translator.translate('안녕하세요.')\n# <Translated src=ko dest=en text=Good evening. pronunciation=Good evening.>\n>>> translator.translate('안녕하세요.', dest='ja')\n# <Translated src=ko dest=ja text=こんにちは。 pronunciation=Kon'nichiwa.>\n>>> translator.translate('veritas lux mea', src='la')\n# <Translated src=la dest=en text=The truth is my light pronunciation=The truth is my light>\n")])])]),e("p",[e("strong",[a._v("Tech Stack")])]),a._v(" "),e("p",[a._v("We imported googletrans package in our flask program and translated a sentence into a particular language by :")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("def translate_to_given_lang(word,lang):\n   trans_word = translator.translate(word, dest = lang).text\n   return trans_word\n")])])]),e("p",[a._v("These are some list of languages provided by googletrans")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LANGUAGES = {\n'af': 'afrikaans',\n'sq': 'albanian',\n'am': 'amharic',\n'ar': 'arabic',\n'hy': 'armenian',\n'az': 'azerbaijani',\n'eu': 'basque',\n'be': 'belarusian',\n'bn': 'bengali',\n'bs': 'bosnian',\n'bg': 'bulgarian',\n'ca': 'catalan',\n'ceb': 'cebuano',\n'ny': 'chichewa',\n'zh-cn': 'chinese (simplified)',\n'zh-tw': 'chinese (traditional)',\n'co': 'corsican',\n'hr': 'croatian',\n'cs': 'czech',\n'da': 'danish',\n'nl': 'dutch',\n'en': 'english',\n'eo': 'esperanto',\n'et': 'estonian',\n'tl': 'filipino',\n'fi': 'finnish',\n'fr': 'french',\n'fy': 'frisian',\n'gl': 'galician',\n'ka': 'georgian',\n'de': 'german',\n'el': 'greek',\n'gu': 'gujarati',\n'ht': 'haitian creole',\n'ha': 'hausa',\n'haw': 'hawaiian',\n'iw': 'hebrew',\n'hi': 'hindi',\n'hmn': 'hmong',\n'hu': 'hungarian',\n'is': 'icelandic',\n'ig': 'igbo',\n'id': 'indonesian',\n'ga': 'irish',\n'it': 'italian',\n'ja': 'japanese',\n'jw': 'javanese',\n'kn': 'kannada',\n'kk': 'kazakh',\n'km': 'khmer',\n'ko': 'korean',\n'ku': 'kurdish (kurmanji)',\n'ky': 'kyrgyz',\n'lo': 'lao',\n'la': 'latin',\n'lv': 'latvian',\n'lt': 'lithuanian',\n'lb': 'luxembourgish',\n'mk': 'macedonian',\n'mg': 'malagasy',\n'ms': 'malay',\n'ml': 'malayalam',\n'mt': 'maltese',\n'mi': 'maori',\n'mr': 'marathi',\n'mn': 'mongolian',\n'my': 'myanmar (burmese)',\n'ne': 'nepali',\n'no': 'norwegian',\n'ps': 'pashto',\n'fa': 'persian',\n'pl': 'polish',\n'pt': 'portuguese',\n'pa': 'punjabi',\n'ro': 'romanian',\n'ru': 'russian',\n'sm': 'samoan',\n'gd': 'scots gaelic',\n'sr': 'serbian',\n'st': 'sesotho',\n'sn': 'shona',\n'sd': 'sindhi',\n'si': 'sinhala',\n'sk': 'slovak',\n'sl': 'slovenian',\n'so': 'somali',\n'es': 'spanish',\n'su': 'sundanese',\n'sw': 'swahili',\n'sv': 'swedish',\n'tg': 'tajik',\n'ta': 'tamil',\n'te': 'telugu',\n'th': 'thai',\n'tr': 'turkish',\n'uk': 'ukrainian',\n'ur': 'urdu',\n'uz': 'uzbek',\n'vi': 'vietnamese',\n'cy': 'welsh',\n'xh': 'xhosa',\n'yi': 'yiddish',\n'yo': 'yoruba',\n'zu': 'zulu',\n'fil': 'Filipino',\n'he': 'Hebrew'\n}\n")])])]),e("p",[a._v("The code word of respective languages can be used to convert the sentence into respective languages.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://miro.medium.com/max/700/1*oA0x--wX8Mf6SiUlTFoZGg.png",alt:"Feature"}})]),a._v(" "),e("p",[e("img",{attrs:{src:"https://miro.medium.com/max/700/1*_vDQbEYekZpjilqDO8ukpQ.png",alt:"Feature"}})]),a._v(" "),e("p",[e("strong",[a._v("Team")])]),a._v(" "),e("p",[a._v("We were a small group of 2, me and Karthik V. We enjoyed working on this project as it was a fun project as well as a challenging one. We have done a lot of research on language translate APIs and shared our knowledge with each other.")]),a._v(" "),e("p",[e("strong",[a._v("Working Hours")]),a._v(" "),e("strong",[a._v("Phase 1:")]),a._v(" Phase 1 of the task was to implement the project using a cost-free language translator.")]),a._v(" "),e("p",[e("strong",[a._v("Phase 2:")]),a._v(" Phase 2 of the task was to include a login/logout session for our project.")]),a._v(" "),e("p",[a._v("We spent 20 hours on this project to implement it and deploy it.")]),a._v(" "),e("p",[e("strong",[a._v("Tact Coins Rewarded")])]),a._v(" "),e("p",[a._v("We have rewarded 20 CAD for implementing this feature. I was really happy to successfully complete the feature by satisfying the employer’s requirements. I would be doing more features in the future which not only earns me money but gives me a chance to explore myself through the latest technologies and helps me to have a count on my time management.")]),a._v(" "),e("p",[a._v("Thanks for reading my article. See you soon guys !!")])])}),[],!1,null,null,null);n.default=s.exports}}]);