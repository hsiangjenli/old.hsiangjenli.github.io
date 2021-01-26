# TWSE [9] Bs4 + 鉅亨網

<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

# BeautifulSoup + 鉅亨網




```python
import urllib
from bs4 import BeautifulSoup

url = 'https://news.cnyes.com/news/cat/tw_stock_news?exp=a'
data = urllib.request.urlopen(url)
soup = BeautifulSoup(data, 'html.parser')
```
## 原始碼
```python
print(soup)
```
### 文章網址
#### 找到 `<a>...</a>`

```python
hrefs = soup.find_all('a')
```

#### regex
```python
import regex as re
for href in hrefs:
    if re.match('/news/id/', str(href.get('href'))):
        print('https://news.cnyes.com'+ str(href.get('href')))
```

![](https://i.imgur.com/cOqYyCH.jpg)

#### 多個URL存成List

```python
urls = ['https://news.cnyes.com'+ str(href.get('href')) for href in hrefs if re.match('/news/id/', str(href.get('href')))]
```

### 多個URL的文章解析

```python
data = urllib.request.urlopen(urls[0])
soup = BeautifulSoup(data, 'html.parser')
```
#### 找出文章的標題
##### 找到`<h1>...</h1>`

```python
title = soup.find('h1').getText()
```

#### 找出文章的tags

##### 找到 `<a>...</a>`
```python
tags = soup.find_all('a')
for tag in tags:
    print(tag)
```

```python
tags = soup.find_all('a')
for tag in tags:
    print(tag.get('href'))
```
![](https://i.imgur.com/ITWN9r4.jpg)

```python
for tag in tags:
    if re.match('/tag/', str(tag.get('href'))):
        print(str(tag.get('href'))[5:len(str(tag.get('href')))])
```
![](https://i.imgur.com/yra17Bg.jpg)

##### tags存成list
```python
n_tags = []
for tag in tags:
        if re.match('/tag/', str(tag.get('href'))):
            n_tags = n_tags.append(str(tag.get('href'))[5:len(str(tag.get('href')))])
```


#### 文章內文


##### 找到 `<p>...</p>`

```python
P = soup.find_all('p')
print(P)
```

##### 取`<p>...</p>`的內文

```python
for p in P:
    print(p.getText())
```

![](https://i.imgur.com/xdrcWhr.jpg)

```python
for i,p in zip(range(0,len(P)),P):
    if i >=4:
        print(p.getText())
    i += 1
```
##### 包裝成def
```python
def get_text(i):
    
    data = urllib.request.urlopen(urls[i])
    soup = BeautifulSoup(data, 'html.parser')
    
    P = soup.find_all('p')
    text = ''
    for i,p in zip(range(0,len(P)),P):
        if i >=4:
            text = text + p.getText()
        i += 1

    tags = soup.find_all('a')
    n_tags = []
    for tag in tags:
        if re.match('/tag/', str(tag.get('href'))):
            n_tags.append(str(tag.get('href'))[5:len(str(tag.get('href')))])

    title = soup.find('h1').getText()
    
    return(title,n_tags,text)
```
