# TWSE [1] jsn檔解析

<!--more-->
<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

## TWSE股票資料

### 1 個股月成交資訊
1. [個股月成交資訊](https://www.twse.com.tw/zh/page/trading/exchange/STOCK_DAY.html)以台積電2330為例
2. 點選 [列印/HTML](https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=html&date=20200813&stockNo=2330)
3. 更改 **html** 為 **jsn**

4. 更改 [**20200813**](https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=jsn&date=20200813&stockNo=2330)為 [**20200713**](https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=jsn&date=20200713&stockNo=2330)，即可找到7月資料
5. 更改 **stockNo=2330** 為 **stockNo=1234**，即可找到黑松交易資
    > https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=jsn&date=20200713&stockNo=2330
    
    > https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=jsn&date=20200713&stockNo=1234

6. 在**exchangeReport**前加上 **/en/** 轉換成英文版
	> https://www.twse.com.tw/en/exchangeReport/STOCK_DAY?response=jsn&date=20200713&stockNo=1234
	
	```python
	stock_list = [1234, 2330]
	date = 20200813
	for j in range(0,len(stock_list)):
	   url = "http://www.twse.com.tw/en/exchangeReport/STOCK_DAY?response=jsn&date={}&stockNo={}".format(date,stock_list[j])
	   print(url) 
	```
	
### 2 每日收盤行情
1. [每日收盤行情-全部](https://www.twse.com.tw/zh/page/trading/exchange/MI_INDEX.html)
2. 點選 列印/HTML
3. 更改 **html** 為 **jsn**
4. 更改 [**20200827**](https://www.twse.com.tw/exchangeReport/MI_INDEX?response=jsn&date=20200728&type=ALL) 為 [**20200828**](https://www.twse.com.tw/exchangeReport/MI_INDEX?response=jsn&date=20200828&type=ALL)，即可找到8月28日資料
5. 在**exchangeReport**前加上 **/en/** 轉換成英文版
	
	> https://www.twse.com.tw/en/exchangeReport/MI_INDEX?response=jsn&date=20200828&type=ALL

##  解析Json檔
### 1 個股月成交資訊/en/
#### 1 解析
```python
import urllib.request, json 

stock_list = [2330]
date = 20200813

for j in range(0,len(stock_list)):
   url = "http://www.twse.com.tw/en/exchangeReport/STOCK_DAY?response=jsn&date={}&stockNo={}".format(date,stock_list[j])

   with urllib.request.urlopen(url) as jsonfile:

       data = json.loads(jsonfile.read().decode())
       print(data) 
```
#### 2 [Json Editor](https://jsonformatter.org/json-editor)
![Json Editor](https://i.imgur.com/1ohrpxY.jpg)

```python
for i in range(0, len(data['data'])):
   print(data['data'][i]) 
```

```python
print(data['fields'])
print(data['date'])
print(data['title']) 
```
#### 3 以DataFrame呈現資料
##### 1 DataFrame呈現

```python
import pandas as pd

df = pd.DataFrame(data['data'][0:len(data['data'])]) 
```
##### 2 設定欄位
```python
df.columns = data['fields']
```
##### 3 增加Stock Code至df
```python
df["Stock Code"] = stock_list[j]
```
##### 4 將Stock Code 設為 index
```python
df = df.set_index('Stock Code')
```
##### 5 將逗號拿掉
```python
df = df.applymap(lambda x: str(x.replace(',','')))
```
##### # 完整程式碼
```python
import pandas as pd
import urllib.request, json

stock_list = [2330]
date = 20200813
for j in range(0,len(stock_list)):
   url = "http://www.twse.com.tw/en/exchangeReport/STOCK_DAY?response=jsn&date={}&stockNo={}".format(date,stock_list[j])
   with urllib.request.urlopen(url) as jsonfile:
       data = json.loads(jsonfile.read().decode())
       df = pd.DataFrame(data['data'][0:len(data['data'])])
       df.columns = data['fields']
       df["Stock Code"] = stock_list[j]
       df = df.set_index('Stock Code')
       df = df.applymap(lambda x: str(x.replace(',','')))
df 
```
### 2 每日收盤行情
####  解析Json檔
##### 1 解析
```python
import urllib.request, json
import datetime

date = datetime.datetime.now()
url = "https://www.twse.com.tw/exchangeReport/MI_INDEX?response=jsn&date={}&type=ALL".format(str(date).split(' ')[0].replace('-',''))
with urllib.request.urlopen(url) as jsonfile:
    data = json.loads(jsonfile.read().decode())
print(data)
```

```python
print(data['fields9'])
print(data['data9']) 
```
##### 2 以DataFrame呈現
```python
import pandas as pd

df = pd.DataFrame(data['data9'][0:len(data['data9'])])
df.columns = data['fields9'] 
```
##### 3 將漲跌(+/-)刪除
```python
df = df.drop(columns = '漲跌(+/-)')
```
##### 4 將證券代號設為index 
```python
df = df.set_index('證券代號')
```
##### 5 將逗號拿掉
```python
df = df.applymap(lambda x: str(x.replace(',','')))
```
##### 6 加入日期
```python
df["日期"] = str(date).split(' ')[0].replace('-','/') 
```
##### # 完整程式碼 
```python
import urllib.request, json
import pandas as pd
import datetime

date = datetime.datetime.now()
url = "https://www.twse.com.tw/exchangeReport/MI_INDEX?response=jsn&date={}&type=ALL".format(str(date).split(' ')[0].replace('-',''))
with urllib.request.urlopen(url) as jsonfile:
    data = json.loads(jsonfile.read().decode())
    df = pd.DataFrame(data['data9'][0:len(data['data9'])])
    df.columns = data['fields9']
    df = df.drop(columns = '漲跌(+/-)')
    df = df.set_index('證券代號')
    df = df.applymap(lambda x: str(x.replace(',','')))
    df["日期"] = str(date).split(' ')[0].replace('-','/')
df
```
<iframe src="https://d2xihcnwdmcz6tzstvzuow-on.drv.tw/WEB/stock_code=2330.tw.html" height="500" width="100%" style="border:none;"></iframe


