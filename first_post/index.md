# First_post

## TWSE股票資料
### 1.1 個股月成交資訊
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
	
### 1.2 每日收盤行情
1. [每日收盤行情-全部](https://www.twse.com.tw/zh/page/trading/exchange/MI_INDEX.html)
2. 點選 列印/HTML
3. 更改 **html** 為 **jsn**
4. 更改 [**20200827**](https://www.twse.com.tw/exchangeReport/MI_INDEX?response=jsn&date=20200728&type=ALL) 為 [**20200828**](https://www.twse.com.tw/exchangeReport/MI_INDEX?response=jsn&date=20200828&type=ALL)，即可找到8月28日資料
5. 在**exchangeReport**前加上 **/en/** 轉換成英文版
	> https://www.twse.com.tw/en/exchangeReport/MI_INDEX?response=jsn&date=20200828&type=ALL

## 2 解析Json檔
### 2.1 個股月成交資訊/en/
#### 2.1.1 解析
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
#### 2.1.2 [Json Editor](https://jsonformatter.org/json-editor)
```python
for i in range(0, len(data['data'])):
   print(data['data'][i]) 
```

```python
print(data['fields'])
print(data['date'])
print(data['title']) 
```
#### 2.1.3 以DataFrame呈現資料
##### 2.1.3.1 DataFrame呈現
```python
import pandas as pd

df = pd.DataFrame(data['data'][0:len(data['data'])]) 
```
##### 2.1.3.2 設定欄位
```python
df.columns = data['fields']
```
##### 2.1.3.3 增加Stock Code至df
```python
df["Stock Code"] = stock_list[j]
```
<iframe src="https://d2xihcnwdmcz6tzstvzuow-on.drv.tw/WEB/stock_code=2330.tw.html" height="500" width="100%" style="border:none;"></iframe

