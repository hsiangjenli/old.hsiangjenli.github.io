# TWSE [7] Interactive Candlestick Charts

<!--more-->
<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

# Interactive Candlestick Charts

## Plotly

```shell
pip install plotly
```
## 個股月成交資訊
### SQL連線
```python
user = 'root'
pw = "YourPassworrd"
db = "STOCK"

engine = create_engine("mysql+pymysql://{}:{}@localhost/{db}".format(user,pw,db=db))

df = pd.read_sql("SELECT* FROM `twse` WHERE `Stock Code` = 2330 ", engine, coerce_float=True, parse_dates=True)
df = df.drop(columns = ['Stock Code','Change','Transaction','Trade Value'])
df = df.rename(columns = {'Opening Price': 'Open','Highest Price':'High','Closing Price':'Close',
                        'Lowest Price':'Low','Closing Price':'Close','Trade Volume':'Volume'})
```
### Fig1
#### Basic
```python
fig = go.Figure(data=[go.Candlestick(x=df['Date'],
                open=df['Open'],
                high=df['High'],
                low=df['Low'],
                close=df['Close'])])

fig.write_html(r"C:\Users\User\Downloads\Python\1.html")
fig.show()
```
#### fig.show()
<iframe src="https://d2xihcnwdmcz6tzstvzuow-on.drv.tw/WEB/Plotly.fig_1.htm" height="500" width="100%" style="border:none;"></iframe>

### Fig2
#### xaxis_rangeslider_visible=False
```python
fig = go.Figure(data=[go.Candlestick(x=df['Date'],
                open=df['Open'],
                high=df['High'],
                low=df['Low'],
                close=df['Close'])])

fig.update_layout(xaxis_rangeslider_visible=False)

fig.write_html(r"C:\Users\User\Downloads\Python\2.html")
fig.show()
```
#### fig.show()
<iframe src="https://d2xihcnwdmcz6tzstvzuow-on.drv.tw/WEB/Plotly.fig_2.htm" height="500" width="100%" style="border:none;"></iframe>

### Fig3
#### Color & Title
```python
fig = go.Figure(data=[go.Candlestick(x=df['Date'],
                open=df['Open'],
                high=df['High'],
                low=df['Low'],
                close=df['Close'],
                increasing_line_color= '#5ac390', decreasing_line_color= '#fd6a6c')])

fig.update_layout(
    title='TWSE Stock Code:2330',
    yaxis_title='Price',
    xaxis_rangeslider_visible=False)

fig.write_html(r"C:\Users\User\Downloads\Python\3.html")                  
fig.show()
```
####　fig.show()

<iframe src="https://d2xihcnwdmcz6tzstvzuow-on.drv.tw/WEB/Plotly.fig_3.htm" height="500" width="100%" style="border:none;"></iframe>

## 每日收盤行情
```python
import plotly.graph_objects as go
import pandas as pd
```
### SQL連線
```python
import sqlalchemy
from sqlalchemy import create_engine

user = 'root'
pw = "YourPassworrd"
db = "TWSE"
engine = create_engine("mysql+pymysql://{}:{}@localhost/{db}".format(user,pw,db=db))

df = pd.read_sql("SELECT * FROM `每日收盤行情` WHERE `證券代號` = 2330", engine, coerce_float=True, parse_dates=True)
```
### rename col /可做可不做/
```python
df = df.rename(columns = {'開盤價': 'Open','最高價':'High','收盤價':'Close','最低價':'Low','日期':'Date','成交股數':'Volume'})
```
### Fig4
#### subplots
```python
from plotly.subplots import make_subplots

fig = make_subplots(rows=2, cols=1)
fig.add_trace(go.Candlestick(x=df['Date'],
                open=df['Open'],
                high=df['High'],
                low=df['Low'],
                close=df['Close'],
                increasing_line_color= '#3D9970', decreasing_line_color= '#FF4136',
                increasing_fillcolor='#3D9970', decreasing_fillcolor='#FF4136'))

fig.add_trace(go.Bar(y=df['Volume'],x = df['Date'],marker = dict(color=df['color'])), row=2, col=1)

fig.update_layout(
    paper_bgcolor='#EEEEEE',
    plot_bgcolor='#EEEEEE',
    title='TWSE<br>Stock Code:2330',
    yaxis_title='Price',
    xaxis_rangeslider_visible=False)
fig.show()
```
#### fig.show()
<iframe src="https://d2xihcnwdmcz6tzstvzuow-on.drv.tw/WEB/Plotly.fig_4.htm" height="500" width="100%" style="border:none;"></iframe>

### Fig5
#### Change subplot sizes
```python
trace1 = go.Candlestick(x=df['Date'],
                open=df['Open'],
                high=df['High'],
                low=df['Low'],
                close=df['Close'],
                increasing_line_color= '#3D9970', decreasing_line_color= '#FF4136',
                increasing_fillcolor='#3D9970', decreasing_fillcolor='#FF4136')

trace2 = go.Bar(y=df['Volume'],x = df['Date'],marker = dict(color=df['color']),yaxis='y2')

data = [trace1, trace2]
layout = go.Layout(yaxis2=dict(domain=[0, 0.3]),
                   yaxis=dict(domain=[0.35,1]),
                   
                   xaxis_rangeslider_visible=False,
                   title='<b>TWSE</b><br>Stock Code:2330',
                   title_x = 0.5,
                   title_font_size = 20,
                   paper_bgcolor='#EEEEEE',
                   plot_bgcolor='#EEEEEE',
                   showlegend = False,
                   hovermode = 'x unified',
                   hoverlabel_bgcolor = 'rgba(255,255,255,0.9)',
                   hoverlabel_namelength = 0)
fig = go.Figure(data=data, layout=layout)

fig.show()
```
#### fig.show()
<iframe src="https://d2xihcnwdmcz6tzstvzuow-on.drv.tw/WEB/Plotly.fig_6.html" height="500" width="100%" style="border:none;"></iframe>


