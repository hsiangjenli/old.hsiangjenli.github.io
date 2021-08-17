# TWSE [2] 將DataFrame存入CSV檔 & 抓取多筆資料

<!--more-->
<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<h1 style = "font-family: Verdana;font-weight: 600;">DataFrame存入CSV檔
</h1>

##  個股月成交資訊
### 1 相對路徑
```python
df.to_csv('檔案名稱.csv')
```
### 2 絕對路徑
```python
df.to_csv (r'路徑\檔案名稱.csv') 
```
### 3 取得路徑
```python
import os

os.getcwd()
```
### 4 df.to_csv 使用
#### 1 以"/"隔開
```python
df.to_csv ('檔案名稱.csv', sep='/')
```
#### 2 將檔案重複寫入

```python
df.to_csv ('檔案名稱.csv', mode = 'a')
```

#### 3 替換空值
```python
df.to_csv ('檔案名稱.csv', na_rep='NA')
```

#### 4 小數4位
```python
df.to_csv ('檔案名稱.csv', float_format='%.4f')
```

#### 5 不保留列名header
```python
df.to_csv ('檔案名稱.csv', header=0)
```

#### 6 不保留引索值index
```python
df.to_csv ('檔案名稱.csv', index=0) 
```
#### # 完整程式碼
```python

import pandas as pd
import urllib.request, json
import time

stock_list = [1101,1234,2330,2337]
date = 20200813

for j in range(0,len(stock_list)):
   url = "http://www.twse.com.tw/en/exchangeReport/STOCK_DAY?response=jsn&date={}&stockNo={}".format(date,stock_list[j])
   with urllib.request.urlopen(url) as jsonfile:
       data = json.loads(jsonfile.read().decode())
       stock_data.append(data)
       df = pd.DataFrame(data['data'][0:len(data['data'])])
       df.columns = data['fields']
       df["Stock Code"] = stock_list[j]
       df = df.set_index('Stock Code')
       df = df.applymap(lambda x: str(x.replace(',','')))
       print("[#{}] {} is loading...".format(stock_list[j], data['date']))
       df.to_csv (r'C:\Users\User\Downloads\Python\Python_Stock_TWSE_type = 2330.csv', mode='a', header=0)
       time.sleep(5) 
```
---
## 抓取多筆資料
### 個股月成交資訊
```python
import urllib.request, json
import datetime
import pandas as pd

date_now = datetime.datetime.now()
stock_list = [2330,1234]
m = int(input("請輸入欲抓取月份數"))-1


for j in range(0,len(stock_list)):
   for i in range (m,-1,-1):
       date = date_now - i*datetime.timedelta(days = 30.4375)
       url = "http://www.twse.com.tw/exchangeReport/STOCK_DAY?response=jsn&date={}&stockNo={}".format(str(date).split(' ')[0].replace('-',''),stock_list[j])
       with urllib.request.urlopen(url) as jsonfile:
               data = json.loads(jsonfile.read().decode())
               df = pd.DataFrame(data['data'][0:len(data['data'])])
               df.columns = data['fields']
               df["股票代碼"] = stock_list[j]
               df = df.set_index('股票代碼')
               print(df)
```
### 每日收盤行情
```python
import urllib.request, json
import datetime
import time
import pandas as pd

date = datetime.datetime.now()
n = int(input('抓取n日資料'))

for i in range(n):
   url = "https://www.twse.com.tw/exchangeReport/MI_INDEX?response=jsn&date={}&type=ALL".format(str(date).split(' ')[0].replace('-',''))
   with urllib.request.urlopen(url) as jsonfile:
       data = json.loads(jsonfile.read().decode())
       if data['stat'] =="OK":
           df = pd.DataFrame(data['data9'][0:len(data['data9'])])
           df.columns = data['fields9']
           print(url)
           time.sleep(4)
       else:
           print(data['stat'])
       date = date - datetime.timedelta(days = 1) 
```
