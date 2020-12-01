# TWSE [3] 資料存入SQLite


# TWSE的資料存入SQLite
## 個股月成交資訊
### 1 SQLite連線
```python
import sqlite3

conn = sqlite3.connect('Python_Stock_TWSE.db')
c = conn.cursor() 
```
### 2 建立Table
```python
c.execute('CREATE TABLE IF NOT EXISTS TWSE2330_tempt (股票代碼, 日期, 成交股數, 成交金額, 開盤價, 最高價, 最低價, 收盤價, 漲跌價差, 成交筆數)')
```
### 3 刪除Table
```python
c.execute('DROP TABLE TWSE2330_tempt')
```
### # 完整程式碼
```python
import pandas as pd
import urllib.request, json
import datetime
import time
import sqlite3

conn = sqlite3.connect('Python_Stock_TWSE.db')
c = conn.cursor()

c.execute('CREATE TABLE IF NOT EXISTS TWSE (股票代碼 int, 日期 date, 成交股數 float, 成交金額 float, 開盤價 float, 最高價 float, 最低價 float, 收盤價 float, 漲跌價差 float, 成交筆數 float)')
conn.commit()

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
               df.to_sql('TWSE', conn, if_exists='append', index = True)
               conn.commit()
               print("[#{}] {} is loading...".format(stock_list[j], data['date']))
               time.sleep(5)
conn.close()
print("Done") 
```
<img src = "https://i.imgur.com/IxMi5Nj.jpg" width = "100%" />

## 資料庫資料重複問題解決
### 1 選出沒有重複的資料
```sql
SELECT*
FROM TWSE
GROUP BY 股票代碼, 日期
HAVING count(*)>0 
```
<img src = "https://i.imgur.com/yu9YdMQ.jpg" width = "100%" />
### 2 TWSE_tempt當作緩存
> 將TWSE改成TWSE_tempt當作緩存 ，再新增一個TWSE
```sql
INSERT INTO TWSE
SELECT*
FROM TWSE_tempt
GROUP BY 股票代碼, 日期
HAVING count(*)>0 
```
```python
c.execute('''INSERT INTO TWSE SELECT* FROM TWSE_tempt GROUP BY 股票代碼, 日期 HAVING count(*)>0''') 
```
### # 完整程式碼
```python
import pandas as pd
import urllib.request, json
import datetime
import time
import sqlite3

conn = sqlite3.connect('Python_Stock_TWSE.db')
c = conn.cursor()

c.execute('CREATE TABLE IF NOT EXISTS TWSE (股票代碼 int, 日期 date, 成交股數 float, 成交金額 float, 開盤價 float, 最高價 float, 最低價 float, 收盤價 float, 漲跌價差 float, 成交筆數 float)')
c.execute('ALTER TABLE TWSE RENAME TO TWSE_tempt')
conn.commit()

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
               df.to_sql('TWSE_tempt', conn, if_exists='append', index = True)
               print("[{}] Month: {} is loading......".format(str(stock_list[j]),str(date).split('-')[1]))
               time.sleep(5)

c.execute('CREATE TABLE TWSE (股票代碼 int, 日期 date, 成交股數 float, 成交金額 float, 開盤價 float, 最高價 float, 最低價 float, 收盤價 float, 漲跌價差 float, 成交筆數 float)')
c.execute('''INSERT INTO TWSE SELECT* FROM TWSE_tempt GROUP BY 股票代碼, 日期 HAVING count(*)>0''')
c.execute('DROP TABLE TWSE_tempt')
print("Done")
conn.commit()
conn.close() 
```
