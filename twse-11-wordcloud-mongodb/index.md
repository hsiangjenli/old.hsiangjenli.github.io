# TWSE [11] Wordcloud + MongoDB

<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


# Wordcloud + MongoDB

## img
|<h2> [wordcloud.jpg](https://drive.google.com/file/d/1Id-SEIc5kHHZx0Q62JnI6moJH4BWIWPu/view?usp=sharing)</h2>|
| :----------------------------------------------------------: |

## MongoDB連線
```python
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["article"]
mycol = mydb["2021_鉅亨網"]
```
### import
```python
%matplotlib inline
import matplotlib.pyplot as plt
from wordcloud import WordCloud
from PIL import Image
import numpy as np
import jieba
import nltk
import pymongo
```
### 抓出文章內容
```python
Text = ""
for x in mycol.find({}):
    Text = Text + x["text"]
```
### Wordcloud圖
```python
mask = np.array(Image.open('wordcloud.jpg'))

wordcloud = WordCloud(background_color="white",
                      width=1000, 
                      height=860,
                      margin=2, 
                      font_path="msjhbd.ttc", 
                      mask=mask).generate(Text)

plt.figure(figsize=(20,20))
plt.imshow(wordcloud)
plt.axis("off")
plt.show()
```
#### fig 1

<img src = "https://i.imgur.com/w7yXGuL.png" width = "100%"/>

#### fig 2

<img src = "https://i.imgur.com/djIz7rn.jpg" width = "100%"/>



> 1. 存到了一些無關緊要的資料<br>
> 1. 重複性高的開頭、形容詞    `ex: 其中、今年、不過、另外......`

### 將符號移除

```python
Text = Text.translate({ord(c):None for c in list("(),.“”（）「」，。、：；！|\n/ 《》〔〕〈〉？")})
```



### 自建詞 userdict

|<h2> [userdict.txt](https://drive.google.com/file/d/1AYA7M_yYBl-a-F5fo7UyDKMfj0Dt-v5L/view?usp=sharing)</h2>|
| :----------------------------------------------------------: |

```python
jieba.load_userdict("userdict.txt")
```

### 中文斷詞 jieba

```python
terms = jieba.cut(Text)
```

### 停用詞 stopwords.txt
|<h2> [stopwords.txt](https://drive.google.com/file/d/1mlYor3CvvUijM3RdKJdav55PQYcfM8vB/view?usp=sharing)</h2>|
| :----------------------------------------------------------: |

```python
stopwords = list()
with open("stopwords.txt", "r", encoding = "utf-8") as fp:
    stopwords = [word.strip() for word in fp.readlines()]
    keyterms = [keyterm for keyterm in terms if keyterm not in stopwords]

Text = "/".join(keyterms)
```

### WordCloud圖

```python
mask = np.array(Image.open('wordcloud.jpg'))

wordcloud = WordCloud(background_color="white",
                      width=1000, 
                      height=860, 
                      margin=2, 
                      font_path="msjhbd.ttc", 
                      mask=mask).generate(Text)

plt.figure(figsize=(20,20))
plt.imshow(wordcloud)
plt.axis("off")
plt.show()
```



<img src = "https://i.imgur.com/OYxB22I.png" width = "100%"/>

## 讀取txt檔 

### import
```python
%matplotlib inline
import matplotlib.pyplot as plt
from wordcloud import WordCloud
from PIL import Image
import numpy as np
import jieba
import nltk
```
### Read *.txt

|<h2> [test_text.txt](https://drive.google.com/file/d/1jLms-N-OUATzar8btI6OBcc-AM9McL9Y/view?usp=sharing)</h2>|
| :----------------------------------------------------------: |


```python
with open("test_text.txt", "r", encoding = "utf-8") as fp:
    Text = fp.read()
```
### 畫圖
```python
Text = Text.translate({ord(c):None for c in list("(),.“”（）「」，。、：；！|\n/ 《》〔〕〈〉？")})

jieba.load_userdict("userdict.txt")
terms = jieba.cut(Text)

stopwords = list()
with open("stopwords.txt", "r", encoding = "utf-8") as fp:
    stopwords = [word.strip() for word in fp.readlines()]
    keyterms = [keyterm for keyterm in terms if keyterm not in stopwords]

Text = "/".join(keyterms)

mask = np.array(Image.open('wordcloud.jpg'))

wordcloud = WordCloud(background_color="white",
                      width=1000, 
                      height=860, 
                      margin=2, 
                      font_path="msjhbd.ttc", 
                      mask=mask).generate(Text)

plt.figure(figsize=(20,20))
plt.imshow(wordcloud)
plt.axis("off")
plt.show()
```

