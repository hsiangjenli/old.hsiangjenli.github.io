# TWSE [13] Selenium + 鉅亨網

<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

# Selenium + 鉅亨網 + MonogoDB

{{<admonition note "參考資料">}}

[高级爬虫: 让 Selenium 控制你的浏览器帮你爬](https://mofanpy.com/tutorials/data-manipulation/scraping/selenium/)

[在Windows上安裝Python & Selenium + 簡易教學](https://medium.com/@NorthBei/%E5%9C%A8windows%E4%B8%8A%E5%AE%89%E8%A3%9Dpython-selenium-%E7%B0%A1%E6%98%93%E6%95%99%E5%AD%B8-eade1cd2d12d)

{{</admonition>}}

{{<admonition note "Selenium Record and Playback tool">}}

#### [Selenium IDE](https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd?hl=en)

Selenium Record and Playback tool for ease of getting acquainted with Selenium WebDriver.

{{</admonition>}}

## [ChromeDriver - WebDriver for Chrome](https://sites.google.com/a/chromium.org/chromedriver/)

<img src="https://i.imgur.com/tLyq6ao.jpg" width = "100%"/>

```python
import selenium
selenium.__version__
```

### 開啟Google首頁

```python
from selenium import webdriver
```

```python
browser = webdriver.Chrome()
browser.get('http://google.com/')
```
### 開啟鉅亨網[台股新聞](https://news.cnyes.com/news/cat/tw_stock_news?exp=a#TODO)

```python
browser = webdriver.Chrome()
driver.get("https://news.cnyes.com/news/cat/tw_stock_news?exp=a")
```

#### document.body.scrollHeight

{{<admonition note "參考資料">}}

[How can I scroll a web page using selenium webdriver in python?](https://stackoverflow.com/questions/20986631/how-can-i-scroll-a-web-page-using-selenium-webdriver-in-python)

[[爬蟲實戰] 如何透過Selenium 自動將頁面捲動至最下方抓取資料?](https://www.youtube.com/watch?v=49Mwqbu2cMo)

[用python實現selenium 自動化測試](https://iter01.com/552647.html)

{{</admonition>}}

```python
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

print(driver.execute_script("return document.body.scrollHeight"))
```

```python
pause_time = 10

for i in range(10):
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(pause_time)
```



#### ChromeOptions()

{{<admonition note "參考資料">}}

[Python selenium.webdriver.ChromeOptions() Examples](https://www.programcreek.com/python/example/100025/selenium.webdriver.ChromeOptions)

[Python selenium.webdriver 模块，ChromeOptions() 实例源码](http://codingdict.com/sources/py/selenium.webdriver/6817.html)

[Python webdriver.ChromeOptions方法代碼示例](https://vimsky.com/zh-tw/examples/detail/python-method-selenium.webdriver.ChromeOptions.html)

{{</admonition>}}

```python
start = time.time()
driver = webdriver.Chrome()
driver.get("https://news.cnyes.com/news/cat/tw_stock_news?exp=a")

for i in range(2):
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(pause_time)
driver.close()
end = time.time()

print(end - start)
```

```python
start = time.time()
options = webdriver.ChromeOptions()
options.add_experimental_option("prefs", {'ignore_image': 2})
options.add_argument('--headless')
options.add_argument('--disable-gpu')

driver = webdriver.Chrome(chrome_options=options)

driver.get("https://news.cnyes.com/news/cat/tw_stock_news?exp=a")

for i in range(2):
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(pause_time)
driver.close()
end = time.time()

print(end - start)
```
{{<admonition bug "執行時間比較">}}
<img src="https://i.imgur.com/B0WK34l.jpg" width = "100%"/>
{{</admonition>}}

### Bs4

```python
options = webdriver.ChromeOptions()
options.add_experimental_option("prefs", {'ignore_image': 2})
options.add_argument('--headless')
options.add_argument('--disable-gpu')

driver = webdriver.Chrome(chrome_options=options)

driver.get("https://news.cnyes.com/news/cat/tw_stock_news?exp=a")

for i in range(2):
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(pause_time)
soup = BeautifulSoup(driver.page_source, 'html.parser')
driver.close()
```
#### MongoDB

##### 抓出已存檔的past_post_ids

```python
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["article"]
mycol = mydb["2021_鉅亨網"]

past_post_ids = []

end = datetime.datetime.now()
start = end - datetime.timedelta(days = 3)

for x in mycol.find({'Date': {"$gte": start,"$lte": end}}):
    past_post_ids.append(x["post_id"])
```
##### 從網站上抓下來的post_ids
```python
hrefs = soup.find_all('a')
post_ids = []
import regex as re
for href in hrefs:
    if re.match('/news/id/', str(href.get('href'))):
        post_id = str(href.get('href')).split('/')[-1].split('?')[0]
        post_ids.append(post_id)
```
##### past_post_ids&post_ids差集

```python
A = ['A','B','C','D']
B = ['B','F']
C = []
for x in B:
    if x in A:
        None
    else:
        C.append(x)
C
```

```python
new_post_ids = []
for _id in post_ids:
    if _id in past_post_ids:
        None
    else:
        new_post_ids.append(_id)
        
print(len(past_post_ids))
print(len(post_ids))
print(len(new_post_ids))
```

{{<admonition note "圖片解說">}}
<img src="https://i.imgur.com/KY0ljVm.png" width = "100%"/>

[Set (mathematics)](https://en.wikipedia.org/wiki/Set_(mathematics)#Basic_operations)
{{</admonition>}}

#### 存成urls

```python
urls = ['https://news.cnyes.com/news/id/{}?exp=a'.format(e) for e in new_post_ids]
```

```python
def get_text(i):
    post_id = urls[i].split('/')[5].split('?')[0]
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
    T = soup.find('time')
    Date = datetime.datetime.strptime(T['datetime'], "%Y-%m-%dT%H:%M:%S+08:00")
    
    return(Date,post_id,title,n_tags,text)
```

```python
for i in range(0,len(urls)):
    print(get_text(i))
```

### 完整程式碼

```python
import pymongo

import urllib
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

import regex as re

import datetime
import time

pause_time = 10
options = webdriver.ChromeOptions()
options.add_experimental_option("prefs", {'ignore_image': 2})
options.add_argument('--headless')
options.add_argument('--disable-gpu')

driver = webdriver.Chrome(chrome_options=options)

driver.get("https://news.cnyes.com/news/cat/tw_stock_news?exp=a")

for i in range(2):
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(pause_time)
    
soup = BeautifulSoup(driver.page_source, 'html.parser')

driver.close()

hrefs = soup.find_all('a')

post_ids = []
past_post_ids = []
new_post_ids = []

for href in hrefs:
    if re.match('/news/id/', str(href.get('href'))):
        post_id = str(href.get('href')).split('/')[-1].split('?')[0]
        post_ids.append(post_id)
        
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["article"]
mycol = mydb["2021_鉅亨網"]

end = datetime.datetime.now()
start = end - datetime.timedelta(days = 3)

for x in mycol.find({'Date': {"$gte": start,"$lte": end}}):
    past_post_ids.append(x["post_id"])
new_post_ids = []
for _id in post_ids:
    if _id in past_post_ids:
        None
    else:
        new_post_ids.append(_id)
        
urls = ['https://news.cnyes.com/news/id/{}?exp=a'.format(e) for e in new_post_ids]

def get_text(i):
    post_id = urls[i].split('/')[5].split('?')[0]
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
    T = soup.find('time')
    Date = datetime.datetime.strptime(T['datetime'], "%Y-%m-%dT%H:%M:%S+08:00")
    
    return(Date,post_id,title,n_tags,text)

for i in range(0,len(urls)):
    data = get_text(i)
    print(i, end = ' ')
    mydict = { "Date": data[0], "post_id":data[1],"Title": data[2], "Tags":data[3] , "text": data[4] }
    x = mycol.insert_one(mydict)
cursor = mycol.aggregate(
    [{"$group": {"_id": "$Title",
                 "unique_ids": {"$addToSet": "$_id"},
                 "count": {"$sum": 1}}},
     {"$match": {"count": { "$gte": 2 }}}])

response = []

for doc in cursor:
    del doc["unique_ids"][0]
    for id in doc["unique_ids"]:
        response.append(id)

mycol.remove({"_id": {"$in": response}})
```







