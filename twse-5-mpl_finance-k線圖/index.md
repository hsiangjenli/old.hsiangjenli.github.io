# TWSE [5] mpl_finance K線圖

<!--more-->
<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

# mpl_finance [舊版]

## SQL連線
### 個股月成交資訊
```python
import MySQLdb

user = 'root'
pw = "YourPassworrd"

conn=MySQLdb.connect(host="127.0.0.1",user=user, passwd=pw,charset='utf8')
cursor=conn.cursor() 
cursor.execute('USE STOCK')
```
## mpl_finance
```python
import matplotlib.pyplot as plt
import mpl_finance as mpf
%matplotlib inline
```
## 基本設定
```python
p = [int(e) for e in input("請輸入起始日期和結束日期").split(" ")] # 以空格隔開

period = "`Date` BETWEEN '{}/{}/{} 00:00:00' AND '{}/{}/{} 23:59:59'".format(p[0],p[1],p[2],p[3],p[4],p[5])

def sql_execute(column_name):
   SQL = "SELECT {} FROM `twse` WHERE `Stock Code` = {} AND {} ORDER BY `Date`"
   cursor.execute(SQL.format(column_name, 1234, period))
   result = cursor.fetchall()
   return result

def get_data(column_name):
   sql_data = [e[0] for e in sql_execute(column_name)]
   return sql_data
```
## 完整程式碼
```python
import MySQLdb
import matplotlib.pyplot as plt
import mpl_finance as mpf
%matplotlib inline

user = 'root'
pw = "YourPassworrd"

conn=MySQLdb.connect(host="127.0.0.1",user=user, passwd=pw,charset='utf8')
cursor=conn.cursor() 
cursor.execute('USE STOCK')

p = [int(e) for e in input("請輸入起始日期和結束日期").split(" ")]
period = "`Date` BETWEEN '{}/{}/{} 00:00:00' AND '{}/{}/{} 23:59:59'".format(p[0],p[1],p[2],p[3],p[4],p[5])

def get_data(column_name):
   sql_data = [e[0] for e in sql_execute(column_name)]
   return sql_data

def sql_execute(column_name):
   SQL = "SELECT {} FROM `twse` WHERE `Stock Code` = {} AND {} ORDER BY `Date`"
   cursor.execute(SQL.format(column_name, 1234, period))
   result = cursor.fetchall()
   return result

op = get_data('`Opening Price`')
cp = get_data('`Closing Price`')
h = get_data('`Highest Price`')
l = get_data('`Lowest Price`')
D = [e[0] for e in sql_execute('`Date`')]

fig = plt.figure(figsize=(20, 8))

ax = fig.add_subplot(1, 1, 1)
ax.set_xticks(range(0, len(D), int(round(len(D)/7,0))))
ax.set_xticklabels(D[::int(round(len(D)/7,0))])
mpf.candlestick2_ochl(ax, op, cp, h,
l, width=0.6, colorup='r', colordown='g', alpha=1); 
```
<img src = "https://i.imgur.com/pSXpsdo.png" width = "100%"/>

<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
