# TWSE [10] MongoDB+Python

<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

# NoSQL MonogoDB + Python

## MonogoDB

[Download](https://www.mongodb.com/try/download/community)

> 參考資料
>
> [Windows MongoDB 下載與安裝教學](https://matthung0807.blogspot.com/2019/08/mongodb.html)
>
> [關於 MongoDB 的 _id 欄位](https://navicat.com/cht/company/aboutus/blog/1097-all-about-mongodb-s-_id-field.html)
>
> [MongoDB的_id和ObjectId怎麼理解？同樣是程式設計師，用心你就超前了](https://kknews.cc/code/66g54mp.html)
>
> [MongoDB Data Types](https://www.w3schools.in/mongodb/data-types/#Different_MongoDB_Data_Types)

### MongoDB Version
```SQL
db.version()

>>> 4.4.2
```
### [MongoDB Data Types](https://www.w3schools.in/mongodb/data-types/#Different_MongoDB_Data_Types)

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid #F2F2F2 .5pt;
 mso-border-themecolor:background1;mso-border-themeshade:242;mso-yfti-tbllook:
 1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-border-insideh:.5pt solid #F2F2F2;
 mso-border-insideh-themecolor:background1;mso-border-insideh-themeshade:242;
 mso-border-insidev:.5pt solid #F2F2F2;mso-border-insidev-themecolor:background1;
 mso-border-insidev-themeshade:242">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="751" colspan="3" valign="top" style="width:450.8pt;border:solid #F2F2F2 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:242;mso-border-alt:
  solid #F2F2F2 .5pt;mso-border-themecolor:background1;mso-border-themeshade:
  242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:16.0pt;
  mso-bidi-font-size:11.0pt;mso-bidi-font-family:Calibri;mso-bidi-theme-font:
  minor-latin">MongoDB Data Types</span></b><b style="mso-bidi-font-weight:
  normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:
  minor-latin"><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="250" valign="top" style="width:150.25pt;border:solid #F2F2F2 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:242;border-top:none;
  mso-border-top-alt:solid #F2F2F2 .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-size:12.0pt;mso-fareast-font-family:新細明體;mso-bidi-font-family:
  Calibri;mso-bidi-theme-font:minor-latin;mso-font-kerning:0pt">Integer</span></b><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:
  Calibri;mso-bidi-theme-font:minor-latin"><o:p></o:p></span></b></p>
  </td>
  <td width="250" valign="top" style="width:150.25pt;border-top:none;border-left:
  none;border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Arrays<o:p></o:p></span></b></p>
  </td>
  <td width="251" valign="top" style="width:150.3pt;border-top:none;border-left:
  none;border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Timestamp<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2">
  <td width="250" valign="top" style="width:150.25pt;border:solid #F2F2F2 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:242;border-top:none;
  mso-border-top-alt:solid #F2F2F2 .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Boolean<o:p></o:p></span></b></p>
  </td>
  <td width="250" valign="top" style="width:150.25pt;border-top:none;border-left:
  none;border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Object<o:p></o:p></span></b></p>
  </td>
  <td width="251" valign="top" style="width:150.3pt;border-top:none;border-left:
  none;border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Binary
  data<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:3">
  <td width="250" valign="top" style="width:150.25pt;border:solid #F2F2F2 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:242;border-top:none;
  mso-border-top-alt:solid #F2F2F2 .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Double<o:p></o:p></span></b></p>
  </td>
  <td width="250" valign="top" style="width:150.25pt;border-top:none;border-left:
  none;border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Symbol<o:p></o:p></span></b></p>
  </td>
  <td width="251" valign="top" style="width:150.3pt;border-top:none;border-left:
  none;border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Object
  ID<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:4">
  <td width="250" valign="top" style="width:150.25pt;border:solid #F2F2F2 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:242;border-top:none;
  mso-border-top-alt:solid #F2F2F2 .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Min/Max
  keys<o:p></o:p></span></b></p>
  </td>
  <td width="250" valign="top" style="width:150.25pt;border-top:none;border-left:
  none;border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Null<o:p></o:p></span></b></p>
  </td>
  <td width="251" valign="top" style="width:150.3pt;border-top:none;border-left:
  none;border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Regular
  expression<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:5;mso-yfti-lastrow:yes">
  <td width="250" valign="top" style="width:150.25pt;border:solid #F2F2F2 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:242;border-top:none;
  mso-border-top-alt:solid #F2F2F2 .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">String<o:p></o:p></span></b></p>
  </td>
  <td width="250" valign="top" style="width:150.25pt;border-top:none;border-left:
  none;border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Date<o:p></o:p></span></b></p>
  </td>
  <td width="251" valign="top" style="width:150.3pt;border-top:none;border-left:
  none;border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin">Code<o:p></o:p></span></b></p>
  </td>
 </tr>
</tbody></table>

## Robo 3T

[Download](https://robomongo.org/download)

> 參考資料
>  [MongoDB 使用Robo 3T建立資料庫](https://matthung0807.blogspot.com/2019/08/mongodb-robo-3t.html)



## Python

### [w3schools](https://www.w3schools.com/python/python_mongodb_getstarted.asp)

#### 1 pip install

```powershell
pip install pymongo
```

#### 2 import
```python
import pymongo
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
```
#### 3 測試用文章
```python
#測試文章
title = '盤中零股交易台積電最受歡迎 成交金額逼近200億元'
text = '''台股攻上波段新高，連帶掀起零股交易熱潮，根據證交所統計，盤中零股交易自去年 10 月 26 日實施以來，截至今年 1 月 15 日止，單日平均成交金額達 8.73 億元，加上盤後交易，單日平均金額超過 10 億元，其中權值股王台積電 (2330-TW) 累計成交值逼近 200 億元，是最熱門的交易標的。根據證交所統計，盤中零股交易前 10 大熱門標首推台積電，交易金額比重高達 34%，其次分別為：大立光 (3008-TW)(12%)、聯發科 (2454-TW)(5%)、國巨 (2327-TW)(3%)、元大台灣 50(2%)、鴻海 (2317-TW)(2%)；另外，聯電 (2303-TW)、台達電 (2308-TW)、玉晶光 (3406-TW)、同欣電 (6271-TW) 交易金額也有 1% 的比重。以成交股數來看，台積電以占整體交易比重 8% 居冠，其他依序分別為：聯電、鴻海、元大高股息、玉山金 (2884-TW)、元大台灣 50、長榮、元晶、敦泰與第一金。以台積電來說，假設投資人在 10 月 26 日當天高點 455 元買進台積電續抱至今，以今天收盤價 627 元計算，期間股價約上漲 37%，其他包括聯電、鴻海股價在期間攻上歷史高點，同樣讓零股投資人賺進一筆收益。'''
```
#### 4 Create DB,  Collection and Insert document
```python
mydb = myclient["article"]
mycol = mydb["test"]
mydict = { "Title": title, "text": text }

x = mycol.insert_one(mydict)
```

<img src = "https://i.imgur.com/3gU1M88.jpg" width = "100%" />
<img src = "https://i.imgur.com/NH2PNU2.jpg" width = "100%" />

#### 5 印出所有DB
```python
print(myclient.list_database_names())
```
####  6 印出所有collection
```python
print(mydb.list_collection_names())
```
### Python + bs4 + 鉅亨網
#### 1 def get_text(i):
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
#### 2 import套件
```python
import pymongo
import urllib
from bs4 import BeautifulSoup
import regex as re
import datetime
```
#### 3 Create DB,  Collection
```python
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["article"]
mycol = mydb["2021_鉅亨網"]
```
#### 4 Insert document
```python
url = 'https://news.cnyes.com/news/cat/tw_stock_news?exp=a'
data = urllib.request.urlopen(url)
soup = BeautifulSoup(data, 'html.parser')
hrefs = soup.find_all('a')
urls = ['https://news.cnyes.com'+ str(href.get('href')) for href in hrefs if re.match('/news/id/', str(href.get('href')))]

for i in range(0,len(urls)):
    data = get_text(i)
    mydict = { "Date": data[0], "post_id":data[1],"Title": data[2], "Tags":data[3] , "text": data[4] }
    x = mycol.insert_one(mydict)
```

<img src = "https://i.imgur.com/IpoR1Fq.jpg" width = "100%" />
<img src = "https://i.imgur.com/6Mkm8up.jpg" width = "100%" />

#### 5 find

> 參考資料<br>
> [Tutorial — PyMongo v2.0.1 documentation](https://api.mongodb.com/python/2.0.1/tutorial.html)<br>
> [w3schools](https://www.w3schools.com/python/python_mongodb_getstarted.asp)<br>
> [Collection Methods](https://docs.mongodb.com/manual/reference/method/js-collection/)<br>
> [Finding duplicate keys with MongoDB’s aggregation framework](https://blog.mlab.com/2014/03/finding-duplicate-keys-with-the-mongodb-aggregation-framework/#:~:text=While%20MongoDB%20supports%20an%20option,then%20delete%20all%20subsequent%20values.)
##### find({})
###### 全部
```python
for x in mycol.find({}):
    print(x)
```
<img src = "https://i.imgur.com/sNXC0aF.jpg" width = "100%"/>

##### find({}).count()
###### 計算全部數量

```python
mycol.find({}).count()
```

##### find({"X":"XX"})
###### 特定資料
```python
for x in mycol.find({"Title":"宏泰人壽減資再增資 丟包袱223.9億元補虧損 2月底前現增19.5億元"}):
    print(x)
```
<img src = "https://i.imgur.com/NeddeDj.jpg" width = "100%"/>

##### find({"X": {"$&#0036;lt": X}}).sort("XX")
###### 指定日期之前的所有資料.sort("Date")

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid #F2F2F2 .5pt;
 mso-border-themecolor:background1;mso-border-themeshade:242;mso-yfti-tbllook:
 1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-border-insideh:.5pt solid #F2F2F2;
 mso-border-insideh-themecolor:background1;mso-border-insideh-themeshade:242;
 mso-border-insidev:.5pt solid #F2F2F2;mso-border-insidev-themecolor:background1;
 mso-border-insidev-themeshade:242">
 <tbody><tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
  <td width="751" colspan="4" style="width:450.8pt;border:solid #F2F2F2 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:242;mso-border-alt:
  solid #F2F2F2 .5pt;mso-border-themecolor:background1;mso-border-themeshade:
  242;background:#F2F2F2;mso-background-themecolor:background1;mso-background-themeshade:
  242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:16.0pt;
  mso-bidi-font-size:11.0pt">d = <span class="SpellE">datetime.datetime</span>(2021,
  1, 21, 23)</span><span lang="EN-US"><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:1">
  <td width="188" style="width:112.7pt;border:solid #F2F2F2 1.0pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;border-top:none;mso-border-top-alt:
  solid #F2F2F2 .5pt;mso-border-top-themecolor:background1;mso-border-top-themeshade:
  242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:14.0pt;
  mso-bidi-font-size:11.0pt">Year<o:p></o:p></span></b></p>
  </td>
  <td width="188" style="width:112.7pt;border-top:none;border-left:none;
  border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:14.0pt;
  mso-bidi-font-size:11.0pt">Month<o:p></o:p></span></b></p>
  </td>
  <td width="188" style="width:112.7pt;border-top:none;border-left:none;
  border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:14.0pt;
  mso-bidi-font-size:11.0pt">Day<o:p></o:p></span></b></p>
  </td>
  <td width="188" style="width:112.7pt;border-top:none;border-left:none;
  border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:14.0pt;
  mso-bidi-font-size:11.0pt">Hour<o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:2">
  <td width="188" style="width:112.7pt;border:solid #F2F2F2 1.0pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;border-top:none;mso-border-top-alt:
  solid #F2F2F2 .5pt;mso-border-top-themecolor:background1;mso-border-top-themeshade:
  242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:background1;
  mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:14.0pt;
  mso-bidi-font-size:11.0pt">2021<o:p></o:p></span></b></p>
  </td>
  <td width="188" style="width:112.7pt;border-top:none;border-left:none;
  border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:14.0pt;
  mso-bidi-font-size:11.0pt">1<o:p></o:p></span></b></p>
  </td>
  <td width="188" style="width:112.7pt;border-top:none;border-left:none;
  border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:14.0pt;
  mso-bidi-font-size:11.0pt">21<o:p></o:p></span></b></p>
  </td>
  <td width="188" style="width:112.7pt;border-top:none;border-left:none;
  border-bottom:solid #F2F2F2 1.0pt;mso-border-bottom-themecolor:background1;
  mso-border-bottom-themeshade:242;border-right:solid #F2F2F2 1.0pt;mso-border-right-themecolor:
  background1;mso-border-right-themeshade:242;mso-border-top-alt:solid #F2F2F2 .5pt;
  mso-border-top-themecolor:background1;mso-border-top-themeshade:242;
  mso-border-left-alt:solid #F2F2F2 .5pt;mso-border-left-themecolor:background1;
  mso-border-left-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:14.0pt;
  mso-bidi-font-size:11.0pt">23</span></b><b style="mso-bidi-font-weight:normal"><span style="font-size:14.0pt;mso-bidi-font-size:11.0pt;font-family:&quot;新細明體&quot;,serif;
  mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:
  新細明體;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin">（整天）</span></b><b style="mso-bidi-font-weight:
  normal"><span lang="EN-US" style="font-size:14.0pt;mso-bidi-font-size:11.0pt"><o:p></o:p></span></b></p>
  </td>
 </tr>
 <tr style="mso-yfti-irow:3;mso-yfti-lastrow:yes">
  <td width="751" colspan="4" style="width:450.8pt;border:solid #F2F2F2 1.0pt;
  mso-border-themecolor:background1;mso-border-themeshade:242;border-top:none;
  mso-border-top-alt:solid #F2F2F2 .5pt;mso-border-top-themecolor:background1;
  mso-border-top-themeshade:242;mso-border-alt:solid #F2F2F2 .5pt;mso-border-themecolor:
  background1;mso-border-themeshade:242;background:#F2F2F2;mso-background-themecolor:
  background1;mso-background-themeshade:242;padding:0cm 5.4pt 0cm 5.4pt">
  <p class="MsoNormal" align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal"><span lang="EN-US" style="font-size:14.0pt;
  mso-bidi-font-size:11.0pt">★hour must be in 0~23<o:p></o:p></span></b></p>
  </td>
 </tr>
</tbody></table>

```python
d = datetime.datetime(2021, 1, 21, 23)

for x in mycol.find({"Date": {"$lt": d}}).sort("Date"):
    print(x)
print(mycol.find({"Date": {"$lt": d}}).sort("Date").count())
```

##### find({'Date': {"$&#0036;gte": start,"$&#0036;lte": end}})

###### 找出一段時間的資料

```python
start = datetime.datetime(2021, 1, 21, 0)
end = datetime.datetime(2021, 1, 22, 20)

for x in mycol.find({'Date': {"$gte": start,"$lte": end}}).sort("Date"):
    print(x)
```

#### 6 刪除重複資料

> 參考資料<br>
> [mongo 删除重复数据](https://segmentfault.com/a/1190000020056997)<br>
> [pymongo去除重复数据](http://ldllidonglin.github.io/blog/2015/12/14/2015-12-14-mongodb%E5%8E%BB%E9%99%A4%E9%87%8D%E5%A4%8D%E6%95%B0%E6%8D%AE/)<br>
> [pymongo: remove duplicates (map reduce?)](https://stackoverflow.com/questions/34722866/pymongo-remove-duplicates-map-reduce)

##### MongoDB執行
###### 準備重複資料

<img src = "https://i.imgur.com/T6o6ocf.jpg" width = "100%"/>

###### 執行程式碼/SQL/
```SQL
db.getCollection("test").aggregate([
    {
        $group:{_id:{Title:'$Title'},count:{$sum:1},dups:{$addToSet:'$_id'}}
    },
    {
        $match:{count:{$gt:1}}
    }

    ]).forEach(function(it){

         it.dups.shift();
            db.getCollection("test").remove({_id: {$in: it.dups}});

    });db.getCollection("test").aggregate([
    {
        $group:{_id:{Title:'$Title'},count:{$sum:1},dups:{$addToSet:'$_id'}}
    },
    {
        $match:{count:{$gt:1}}
    }

    ]).forEach(function(it){

         it.dups.shift();
            db.getCollection("test").remove({_id: {$in: it.dups}});

    });

```
<img src = "https://i.imgur.com/t7p0bjf.png" width = "100%"/>

##### Python執行
###### 準備重複資料
```python
for i in range(10):
    mydict = { "Title": title, "text": text }
    x = mycol.insert_one(mydict)
```

<img src = "https://i.imgur.com/elKxfJ9.jpg" width = "100%"/>

###### 執行程式碼/Python/
```python
cursor = mycol.aggregate(
    [
        {"$group": {"_id": "$Title", "unique_ids": {"$addToSet": "$_id"}, "count": {"$sum": 1}}},
        {"$match": {"count": { "$gte": 2 }}}
    ]
)

response = []
for doc in cursor:
    del doc["unique_ids"][0]
    for id in doc["unique_ids"]:
        response.append(id)

mycol.remove({"_id": {"$in": response}})
```

<img src = "https://i.imgur.com/sEj2NQS.jpg" width = "100%"/>

#### 7 [$orderby](https://docs.mongodb.com/manual/reference/operator/meta/orderby/)
> 參考資料<br>
> [$orderby](https://docs.mongodb.com/manual/reference/operator/meta/orderby/)<br>
> [cursor.sort()](https://docs.mongodb.com/manual/reference/method/cursor.sort/)

<img src= "https://i.imgur.com/2nnO2dz.jpg" width = "100%"/>

> 先複製collection，避免出錯

##### 不改變原始資料
###### 執行程式碼/SQL/
```sql
db.getCollection('2021_鉅亨網_copy').find().sort( { Date: -1 } )
```

<blockquote>
<p>If MongoDB requires using <strong>more than 100 megabytes</strong> of system memory for the <strong>blocking sort operation</strong>, MongoDB returns an error unless the query specifies <a href="https://docs.mongodb.com/manual/reference/method/cursor.allowDiskUse/#cursor.allowDiskUse" target="_blank" rel="noopener noreffer"><code>cursor.allowDiskUse()</code></a> <strong>(New in MongoDB 4.4). </strong><code>allowDiskUse()</code> allows MongoDB to use temporary files on disk to store data exceeding the 100 megabyte system memory limit while processing a blocking sort operation.</p>

 <p align="right">
 原文參考自：
 <a href="https://docs.mongodb.com/manual/reference/operator/meta/orderby/" style="text-decoration:none;">$orderby</a>
 </p>
</blockquote>

###### 執行程式碼/Python/
```python
for x in mycol.find({}).sort("Date"):
    print(x)
```
