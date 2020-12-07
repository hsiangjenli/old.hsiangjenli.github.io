# TWSE [4] 資料存入MySQL及取出


<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

# TWSE的資料存入MySQL

## SQL連線
### 1 基本設定
```python
import MySQLdb

user = 'root'
pw = "YourPassworrd"
```
### 2 不使用中文
```python
conn = MySQLdb.connect(host="127.0.0.1",user=user, passwd=pw)
cursor=conn.cursor() 
```
### 3 可使用中文 / charset='utf8' /
```python
conn=MySQLdb.connect(host="127.0.0.1",user=user, passwd=pw,charset='utf8')
cursor=conn.cursor() 
```
## create_engine
### pymysql sqlalchemy
```
pip install pymysql sqlalchemy
```
```python
from sqlalchemy import create_engine

engine = create_engine("mysql+pymysql://{}:{}@localhost/{db}".format(user,pw,db="STOCK")) 
```
## 個股月成交資訊/en/
### 完整程式碼
```python
import urllib.request, json
import json
import time
import datetime
import pandas as pd
from sqlalchemy import create_engine
import MySQLdb

user = 'root'
pw = "YourPassworrd"

engine = create_engine("mysql+pymysql://{}:{}@localhost/{db}".format(user,pw,db="STOCK")) 

conn = MySQLdb.connect(host="127.0.0.1",user=user, passwd=pw)
cursor=conn.cursor()

create_table = '''
`Stock Code` varchar(20) NOT NULL,
`Date` date NOT NULL,
`Trade Volume` bigint(20) NOT NULL,
`Trade Value` bigint(20) NOT NULL,
`Opening Price` float NOT NULL,
`Highest Price` float NOT NULL,
`Lowest Price` float NOT NULL,
`Closing Price` float NOT NULL,
`Change` float NOT NULL,
`Transaction` bigint(20) NOT NULL
'''

cursor.execute("CREATE DATABASE IF NOT EXISTS STOCK DEFAULT CHARSET=utf8 DEFAULT COLLATE=utf8_unicode_ci" )
cursor.execute('USE STOCK')
cursor.execute('''CREATE TABLE IF NOT EXISTS TWSE ({})'''.format(create_table))
cursor.execute('ALTER TABLE TWSE RENAME TO TWSE_tempt')
conn.commit()

data ={}
date_now = datetime.datetime.now()
stock_list = [2330,1234]
m = int(input("請輸入欲抓取月份數"))-1

for j in range(0,len(stock_list)):
   for i in range (m,-1,-1):
       date = date_now - i*datetime.timedelta(days = 30.4375)
       url = "http://www.twse.com.tw/en/exchangeReport/STOCK_DAY?response=jsn&date={}&stockNo={}".format(str(date).split(' ')[0].replace('-',''),stock_list[j])
       with urllib.request.urlopen(url) as jsonfile:
               data = json.loads(jsonfile.read().decode())
               df = pd.DataFrame(data['data'][0:len(data['data'])])
               df.columns = data['fields']
               df["Stock Code"] = stock_list[j]
               df = df.set_index('Stock Code')
               df = df.applymap(lambda x: str(x.replace(',','')))
               df.to_sql('TWSE_tempt', con = engine, if_exists = 'append', index=True)
               time.sleep(10)
               print("[Stock Code: #{}][{}]    loading......".format(str(stock_list[j]),data['title'].split(" ")[0]))            

cursor.execute('CREATE TABLE TWSE ({})'.format(create_table))
cursor.execute('''INSERT INTO TWSE SELECT* FROM TWSE_tempt GROUP BY `Stock Code`, `Date` HAVING count(*)>0''')
cursor.execute('DROP TABLE TWSE_tempt')
conn.commit()
conn.close()
print("All done ! ! !") 
```
## 每日收盤行情
### 完整程式碼
```python
import urllib.request, json
import json
import time
import datetime
import pandas as pd
from sqlalchemy import create_engine
import MySQLdb

user = 'root'
pw = "YourPassworrd"

conn=MySQLdb.connect(host="127.0.0.1",user=user, passwd=pw,charset='utf8')
cursor=conn.cursor() 

cursor.execute("CREATE DATABASE IF NOT EXISTS TWSE DEFAULT CHARSET=utf8 DEFAULT COLLATE=utf8_unicode_ci" )
engine = create_engine("mysql+pymysql://{}:{}@localhost/{db}".format(user,pw,db="TWSE"))

create_table = '''
`證券代號` varchar(20) NOT NULL,
`證券名稱` varchar(20) NOT NULL,
`成交股數` bigint(20),
`成交筆數` bigint(20),
`成交金額` float,
`開盤價` float NOT NULL,
`最高價` float NOT NULL,
`最低價` float NOT NULL,
`收盤價` float NOT NULL,
`漲跌價差` float,
`最後揭示買價` float,
`最後揭示買量` float,
`最後揭示賣價` float,
`最後揭示賣量` bigint(20),
`本益比` float,
`日期` date NOT NULL
'''

cursor.execute('USE TWSE')
cursor.execute('''CREATE TABLE IF NOT EXISTS `每日收盤行情` ({})'''.format(create_table))
cursor.execute('ALTER TABLE `每日收盤行情` RENAME TO `每日收盤行情_tempt`')

date = datetime.datetime.now()
n = int(input('抓取n日資料'))

for i in range(n):
   url = "https://www.twse.com.tw/exchangeReport/MI_INDEX?response=jsn&date={}&type=ALL".format(str(date).split(' ')[0].replace('-',''))
   with urllib.request.urlopen(url) as jsonfile:
       data = json.loads(jsonfile.read().decode())
       if data['stat'] =="OK":
           df = pd.DataFrame(data['data9'][0:len(data['data9'])])
           df.columns = data['fields9']
           df = df.drop(columns = '漲跌(+/-)')
           df = df.set_index('證券代號')
           df = df.applymap(lambda x: str(x.replace(',','')))
           df["日期"] = str(date).split(' ')[0].replace('-','/')
           df.to_sql('每日收盤行情_tempt', con = engine, if_exists = 'append', index=True)
           print(url)
           time.sleep(4)
       else:
           print(data['stat'])
       date = date - datetime.timedelta(days = 1)
cursor.execute('CREATE TABLE `每日收盤行情` ({})'.format(create_table))
cursor.execute('''INSERT INTO `每日收盤行情` SELECT* FROM `每日收盤行情_tempt` GROUP BY `證券代號`, `日期` HAVING count(*)>0''')
cursor.execute('DROP TABLE `每日收盤行情_tempt`')
conn.commit()
conn.close()
print("All done ! ! !") 
```
## 取出資料
### 個股月成交資訊
#### 1 回傳全部
```python
cursor.fetchall()
```
#### 2 回傳一個值
```python
cursor.fetchone()
```
#### 3 回傳多個值
```python
cursor.fetchmany()
```

#### 4 實際使用
```python
cursor.execute("SELECT `Opening Price` FROM `twse` where `Stock Code` = 2330")
result = cursor.fetchall()
print(result)
```
#### 5 result型態
```python
print(type(result))
```
##### tuple
```python
print(result[1][0])
```
#### 6 取出特定時間內資料
> 回傳 **Opening Price** 
>
> Date BETWEEN **2019/10/10 ~ 2020/1/10**
```python
cursor.execute("SELECT `Opening Price` FROM `twse` WHERE `Stock Code` = 2330 AND `Date` BETWEEN '2019/10/10 00:00:00' AND '2020/1/10 23:59:59'")
result = cursor.fetchall()
print(result) 
```
<img src = "https://i.imgur.com/yFeVTEB.jpg" width = "100%"/>
