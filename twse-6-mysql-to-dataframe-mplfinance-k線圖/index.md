# TWSE [6] MySQL to Dataframe & mplfinance K線圖

<!--more-->
<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<h1 style = "font-family: Verdana;font-weight: 600;">MySQL to Dataframe
</h1>

## SQL連線
```python
user = 'root'
pw = "YourPassworrd"

conn=MySQLdb.connect(host="127.0.0.1",user=user, passwd=pw,charset='utf8')
cursor=conn.cursor() 

cursor.execute("CREATE DATABASE IF NOT EXISTS TWSE DEFAULT CHARSET=utf8 DEFAULT COLLATE=utf8_unicode_ci" )
engine = create_engine("mysql+pymysql://{}:{}@localhost/{db}".format(user,pw,db="TWSE"))

df = pd.read_sql("SELECT* FROM `twse` WHERE `Stock Code` = 2330 AND `Date` BETWEEN '2019/11/10 00:00:00' AND '2020/1/10 23:59:59'", engine, coerce_float=True, parse_dates=True) 
```
## 讀取資料庫Table至Dataframe
```python
import pandas as pd 

df = pd.read_sql('SELECT* FROM `twse`', engine, index_col= 'Stock Code', coerce_float=True, parse_dates='Date')
df 
```
### 1 取出指定col值
```python
print(df.['Opening Price']) 
```
### 2 取出指定index值
```python
print(df.loc['2330'])
```
### 3 取出指定index and col值
```python
print(df.loc['2330']['Opening Price']) 
```
### 4 取出多個col值
```python
df[['Opening Price', 'Closing Price']] 
```
### 5 欄位名稱
```python
df.columns 
```
### 6 資料
```python
df.values
```
### 7 欄位Type
```python
df.dtypes
```
### 8 index值
```python
df.index
```
### 9 重新命名
```python
df.rename(columns={'Opening Price': 'Open'}) 
```
### # 實作
> 讀取指定index值至Dataframe
```python
df = pd.read_sql('SELECT* FROM `twse`, engine, index_col= 'Stock Code', coerce_float=True, parse_dates='Date')  
```
## mplfinance [新版]
```
pip install mplfinance
```
```python
import mplfinance as mpf 
```
### 每日收盤行情
#### SQL連線
```python
user = 'root'
pw = "YourPassworrd"

conn=MySQLdb.connect(host="127.0.0.1",user=user, passwd=pw,charset='utf8')
cursor=conn.cursor() 

cursor.execute("CREATE DATABASE IF NOT EXISTS TWSE DEFAULT CHARSET=utf8 DEFAULT COLLATE=utf8_unicode_ci" )
engine = create_engine("mysql+pymysql://{}:{}@localhost/{db}".format(user,pw,db="TWSE"))

df = pd.read_sql("SELECT* FROM `twse` WHERE `Stock Code` = 2330 AND `Date` BETWEEN '2019/11/10 00:00:00' AND '2020/1/10 23:59:59'", engine, coerce_float=True, parse_dates=True) 
```
#### 重新調整Dataframe
##### 1 刪掉多餘的Col
```python
df = df.drop(columns = ['Stock Code','Change','Transaction','Trade Value'])
```
##### 2 重新命名Col 
```python
df = df.rename(columns = {'Opening Price': 'Open','Highest Price':'High','Closing Price':'Close',
                       'Lowest Price':'Low','Closing Price':'Close','Trade Volume':'Volume'})
```
##### 3 df['Date']型態改變
```python
df['Date'] = pd.to_datetime(df['Date']) 
```
##### 4 重新排序 
```python
neworder = ['Open','High','Low','Close','Volume']
df = df.reindex(columns=neworder) 
```
#### Candlestick chart
##### 基本
```python
mpf.plot(df,type='candle') 
```
<img src = "https://i.imgur.com/ZHQOYJH.png" width = "100%"/>

##### 美化
```python
mc = mpf.make_marketcolors(up='#5ac390',down='#fd6a6c',volume='in',edge='None',)

s  = mpf.make_mpf_style(base_mpl_style='fivethirtyeight',gridstyle='None',marketcolors=mc)

fig = mpf.figure(style=s,figsize=(20,20))

ax1 = fig.add_axes([0,0.3,1,0.4])
ax2 = fig.add_axes([0,0.1,1,0.2])

mav=(3,6,9)

mpf.plot(df,
         type='candle',
         style=s,
         volume=ax2,
         mav=(3,6,9),
         panel_ratios=(4,1),
         xrotation=0,
         ax = ax1,
         update_width_config = dict(candle_width = 0.95),
         scale_width_adjustment = dict(lines=2))

ax1.legend(['mav '+str(mav[0]),'mav '+str(mav[1]),'mav '+str(mav[2])],
           loc='best', bbox_to_anchor=(0.2, 1.1),
           fontsize = 20,
           frameon = True,
           edgecolor = 'w',
           facecolor = 'w'
           )
ax1.set_title(
    label = '\nTWSE\n\nStock Code:2330\n',
    fontdict={'fontsize':30,
              'fontweight':'bold',
              'color':'k'},
    loc='center'
             )

ax1.set_ylabel('Price',fontdict={'weight': 'bold', 'size': 20})
ax2.set_ylabel('Volume',fontdict={'weight': 'bold', 'size': 20})

ax1.yaxis.set_label_position("left")
ax1.yaxis.tick_left()

yticks = np.arange(min(df['Volume']), max(df['Volume']), round( (max(df['Volume']) - min(df['Volume']))/5 ))
ax2.set_yticks(yticks)
```
<img src = "https://i.imgur.com/VvxKi2a.png" width = "100%"/>

### 免連SQL版

```python
import pandas_datareader.data as web
import mplfinance as mpf
from IPython.display import Image

stock_code = '0050.tw'

df = web.DataReader(stock_code, 'yahoo', '2020-11-01')
df = df[['Open', 'High', 'Low', 'Close', 'Volume']]
```

#### 基本

```python
mpf.plot(df, type='candle', mav=(5,20), volume=True, title='\n{stock_code}'.format(stock_code=stock_code), savefig='test_1.png')

Image('test_1.png')
```

<img src="https://i.imgur.com/ipGw9KV.png" width = "100%"/>

#### 美化

```python
import matplotlib.pyplot as plt 
import numpy as np

mc = mpf.make_marketcolors(up='#5ac390',down='#fd6a6c',volume='in',edge='None',)
s  = mpf.make_mpf_style(base_mpl_style='fivethirtyeight',gridstyle='None',marketcolors=mc)

fig = mpf.figure(style=s,figsize=(20,15))

ax1 = fig.add_axes([0.05,0.3,0.95,0.5])
ax2 = fig.add_axes([0.05,0.1,0.95,0.2])

mav = (3,6,9)
mpf.plot(df,
         type='candle',
         style=s,
         volume=ax2,
         mav=mav,
         panel_ratios=(4,1),
         xrotation=0,
         ax = ax1,
         update_width_config = dict(candle_width = 0.95),
         scale_width_adjustment = dict(lines=2))

ax1.legend(['mav '+str(mav[0]),'mav '+str(mav[1]),'mav '+str(mav[2])],
           loc='best', 
           bbox_to_anchor=(0.2, 1.1),
           fontsize = 20,
           frameon = True,
           edgecolor = 'w',
           facecolor = 'w')

ax1.set_title(
    label = '\n\nStock Code:{}\n'.format(stock_code),
    fontdict={'fontsize':30,
              'fontweight':'bold',
              'color':'k'},
    loc='center')

ax1.set_xticks([])
ax1.set_ylabel('Price',fontdict={'weight': 'bold', 'size': 20})
ax2.set_ylabel('Volume',fontdict={'weight': 'bold', 'size': 20})

ax1.yaxis.set_label_position("left")
ax1.yaxis.tick_left()

yticks = np.arange(min(df['Volume']), max(df['Volume']), round( (max(df['Volume']) - min(df['Volume']))/5 ))
ax2.set_yticks(yticks)

plt.savefig('test_2.png', dpi=300)
```

<img src="https://i.imgur.com/EAGyL8V.png" width = "100%"/>

#### MACD

```python
import matplotlib.pyplot as plt 
import numpy as np

mc = mpf.make_marketcolors(up='#5ac390',down='#fd6a6c',volume='in',edge='None',)
s  = mpf.make_mpf_style(base_mpl_style='fivethirtyeight',gridstyle='None',marketcolors=mc)

mc = mpf.make_marketcolors(up='#5ac390',down='#fd6a6c',volume='in',edge='None',)
s  = mpf.make_mpf_style(base_mpl_style='fivethirtyeight',gridstyle='None',marketcolors=mc)

exp12 = df['Close'].ewm(span=12, adjust=False).mean()
exp26 = df['Close'].ewm(span=26, adjust=False).mean()

macd = exp12 - exp26

signal    = macd.ewm(span=9, adjust=False).mean()
histogram = macd - signal

fig = plt.figure(figsize=(20,20))

ax1 = fig.add_axes([0.05,0.4,0.94,0.5])
ax2 = fig.add_axes([0.05,0.015,0.94,0.2])
ax3 = fig.add_axes([0.05,0.2,0.94,0.2])

strDate = [str(e).split(' ')[0] for e in df['Close'].index]
plt.bar(strDate, histogram, color = '#7f7f7f')
plt.plot(strDate, macd, color = 'b')
plt.plot(strDate, signal, color = 'r')

mav = (3,6,9)
mpf.plot(df,
         type='candle',
         style=s,
         volume=ax2,
         mav=mav,
         panel_ratios=(4,1),
         xrotation=0,
         ax = ax1,
         update_width_config = dict(candle_width = 0.95),
         scale_width_adjustment = dict(lines=2))
ax1.legend(['mav '+str(mav[0]),'mav '+str(mav[1]),'mav '+str(mav[2])],
           loc='best', 
           bbox_to_anchor=(0.2, 1.1),
           fontsize = 20,
           frameon = True,
           edgecolor = 'w',
           facecolor = 'w')
ax3.legend(['macd','signal'],
           loc='best', 
           bbox_to_anchor=(0.2, 1.1),
           fontsize = 20,
           frameon = True,
           edgecolor = 'w',
           facecolor = 'w')
ax1.set_title(
    label = 'MACD\n\nStock Code:{}\n'.format(stock_code),
    fontdict={'fontsize':30,
              'fontweight':'bold',
              'color':'k'},
    loc='center')
ax1.set_ylabel('Price',fontdict={'weight': 'bold', 'size': 20})
ax2.set_ylabel('Volume',fontdict={'weight': 'bold', 'size': 20})
ax1.yaxis.set_label_position("left")
ax1.yaxis.tick_left()
yticks = np.arange(min(df['Volume']), max(df['Volume']), round( (max(df['Volume']) - min(df['Volume']))/5 ))
ax2.set_yticks(yticks)
ax1.set_xticks([])
ax3.set_xticks([])
ax1.set(frame_on=False)
ax2.set(frame_on=False)
ax3.set(frame_on=False)
plt.savefig('test_3.png', dpi=300)
```

<img src="https://i.imgur.com/JS50WZs.png" width = "100%"/>
