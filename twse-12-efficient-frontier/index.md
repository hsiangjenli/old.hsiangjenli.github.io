# TWSE [12] Efficient Frontier

<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<img src = "" width = "100%" />



<h1 style = "font-family: Verdana;font-weight: 600;">Python + 投資學/Efficient Frontier/</h1>
## SQL 連接/方法一/

```python
from sqlalchemy import create_engine

import pandas as pd

import matplotlib
import matplotlib.pyplot as plt
%matplotlib inline

import numpy as np
from functools import reduce
import scipy.optimize as solver
```



```python
user = 'root'
pw = "YourPassword"
db = "TWSE"
engine = create_engine("mysql+pymysql://{}:{}@localhost/{db}".format(user,pw,db=db))
```

```python
df_2330 = pd.read_sql("SELECT * FROM `每日收盤行情` WHERE `證券代號` = 2330 AND `日期` BETWEEN '2020/10/20 00:00:00' AND '2021/1/10 23:59:59' ORDER BY `日期`", engine, coerce_float=True, parse_dates=True)
df_tw = pd.read_sql("SELECT * FROM `發行量加權股價指數` WHERE `日期` BETWEEN '2020/10/20 00:00:00' AND '2021/1/10 23:59:59'", engine, coerce_float=True, parse_dates=True)
```
### 報酬率
{{<admonition note "參考資料">}}
[pandas.DataFrame.pct_change](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.pct_change.html)
$$ Return = \frac{D_{1} - D_{0}}{D_{0}} $$
{{</admonition>}}


#### 基本
##### 今日 & 昨日

```python
print('今日  昨日')

for i,j in zip(df_2330['收盤價'],df_2330['收盤價'].shift(1)) :
    print(i, j)
```

<img src = "https://i.imgur.com/7lkgNrl.jpg" width = "100%" />

```python
Return = pd.DataFrame((df_2330['收盤價']  - df_2330['收盤價'].shift(1))/df_2330['收盤價'].shift(1))
Return = Return.rename(columns = {'收盤價':'Return'})
Return
```

#### pct_change()

```python
df_2330['收盤價'].pct_change()
df_tw['收盤指數'].pct_change()
```
```python
df = pd.DataFrame(df_2330['收盤價'].pct_change())
df['TW']  = df_tw['收盤指數'].pct_change()
df = df.rename(columns = {'收盤價':'2330'})
```

### 變異數$σ^2$

#### [var()](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.var.html)

```python
df_tw['收盤指數'].pct_change().var()
```

### 標準差$σ$

#### [std()](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.std.html)

```python
df_tw['收盤指數'].pct_change().std()

std = df_tw['收盤指數'].pct_change().var()**(1/2)
```



### 共變異數$σ_{a,b}$

#### [cov()](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.cov.html)

{{<admonition note "參考公式">}}
$$cov_{x,y} = \frac{\sum{}^{} ({x_i} - \overline{x})({y_i} - \overline{y})}{N-1}$$
{{</admonition>}}

##### 簡單實證

```python
df_test = pd.DataFrame([(1, 2), (0, 3), (2, 0), (1, 1)],
                  columns=['dogs', 'cats'])
df_test.cov()
```


|        $$dog$$         | $$dog_i - \overline{dog} $$ |         $$cats$$         | $$cat_i - \overline{cat} $$ |               $${Dev_{dog}}\times{Dev_{cat}}$$               |
| :--------------------: | :-------------------------: | :----------------------: | :-------------------------: | :----------------------------------------------------------: |
|         **1**          |            **0**            |          **2**           |            **1**            |                            **0**                             |
|         **0**          |           **-1**            |          **3**           |           **1.5**           |                           **-1.5**                           |
|         **2**          |            **1**            |          **0**           |          **-1.5**           |                           **-1.5**                           |
|         **1**          |            **0**            |          **1**           |           **-1**            |                            **0**                             |
| $$\overline{dog} = 1$$ |                             | $$\overline{cat} = 1.5$$ |                             | $${\frac{\sum{}^{} ({Dev_{dog}}\times{Dev_{cat}})}{4-1}} = -1$$ |

##### $ σ_{2330,TW} $
{{<admonition note "補充資料">}}
<h1>$$ σ_{2330,TW} $$</h1>
<p align = "right" ><a href="https://drive.google.com/file/d/1w_wYTHxTBQZzPiWNjn-eNIu6UjXAVzyb/view?usp=sharing" target="_blank" rel="noopener noreffer">Excel計算過程</a></p>
{{</admonition>}}

```python
df.cov()

>>> 0.000097
```

### 相關係數$ρ_{a,b}$

#### [corr()](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.corr.html)

```python
df.corr()
```



|      |   2330   |    TW    |
| :--: | :------: | :------: |
| 2330 | 1.000000 | 0.895857 |
|  TW  | 0.895857 | 1.000000 |

### $\beta$係數

{{<admonition note "參考公式">}}
<h2>$${\beta} = \frac{σ_{i,m}}{σ^2}$$</h2>
{{</admonition>}}

```python
Beta = df.cov()['TW'][0]/df_tw['收盤指數'].pct_change().var()
```

## SQL 連接/方法二/

```python
from sqlalchemy import create_engine

import pandas as pd

import matplotlib
import matplotlib.pyplot as plt
%matplotlib inline

import numpy as np
from functools import reduce
import scipy.optimize as solver
```



```python
user = 'root'
pw = "YourPassword"
db = "TWSE"
engine = create_engine("mysql+pymysql://{}:{}@localhost/{db}".format(user,pw,db=db))

Start = '2020/10/20 00:00:00'
End = '2021/1/10 23:59:59'

SQL = '''
SELECT `收盤價` FROM `{}` WHERE `證券代號` = '{}' AND `日期` BETWEEN '{}' AND '{}' ORDER BY `日期`
'''

stock_codes = ['2330','2317','1234']

def getSQL(stock_code):
    df = pd.read_sql(SQL.format('每日收盤行情',stock_code, Start, End), engine, coerce_float=True, parse_dates=True)
    return df

def Tsql(stock_codes):
    for i in range(0,len(stock_codes)):
        globals()[i] = getSQL(stock_codes[i])
        if i == 0:
            df = pd.DataFrame(globals()[i].pct_change())
            df = df.rename(columns = {'收盤價':stock_codes[i]})
        else:
            df['{}'.format(stock_codes[i])] = globals()[i].pct_change()
    df = df.replace([np.inf, -np.inf], 0)
    return df

returns = Tsql(stock_codes)
```



<img src = "https://i.imgur.com/yUyf3O0.jpg" width = "100%">

### 預期報酬$E(r)$

```python
Expected_R = returns.mean() * 252
```
### 權重$W_{i}$
```python
W = np.array([0.5,0.3,0.2])
```
### 投資組合報酬率$R_{P}$
{{<admonition note "參考公式">}}
$$R_{P} = \sum{W_{i}\times{R_{i}}}$$
{{</admonition>}}


```python
Portfolio_R = sum(W * Expected_R)
```



## 量化投資/Efficient Frontier/

### 隨機權重$W_{i}$

```python
W = np.random.rand(len(stock_codes))
W = W/sum(W)
W
```

### 投資組合風險$σ_{P}^2$
#### 基本公式

{{<admonition note "參考公式">}}
$$σ_{P}^2 = \sum{ {W_{i}^2} {σ_{i}^2}} + \sum\sum{ W_{i} W_{j} {σ_{i,j}}  } $$
$$σ_{P}^2 = \sum{ {W_{i}^2} {σ_{i}^2}} + \sum\sum{ W_{i} W_{j} {ρ_{i,j}} {σ_{i}} {σ_{j}}  } $$
{{</admonition>}}

#### 矩陣簡單計算

{{<admonition note "參考資料">}}

[[work] 理解矩陣乘法](https://www.itread01.com/content/1543280103.html)
\\[ \begin{bmatrix} 1&2\\\3&4 \end{bmatrix} \times \begin{bmatrix} 4&-6\\\ -2&3 \end{bmatrix} = \begin{bmatrix} A_1&A_2\\\B_1&B_2  \end{bmatrix} = \begin{bmatrix} 0&0\\\4& -6  \end{bmatrix}\\]
{{< /admonition >}}

|                                      |                                         |
| ------------------------------------ | --------------------------------------- |
| $A_{1} = 1\times4 + 2\times(-2) = 0$ | $A_{2} = 1\times(-6) + 2\times(3) = 0$  |
| $B_{1} = 3\times4 + 4\times(-2) = 4$ | $B_{2} = 3\times(-6) + 4\times(3) = -6$ |





#### 使用矩陣簡化$σ_{P}^2$計算

{{<admonition note "參考資料">}}
<a href="https://www.masterlink.com.tw/about/riskmanagment/manage/market.aspx" target="_blank" rel="noopener noreffer">VaR 風險值衡量(Value at Risk；VaR)</a><br>
<a href="https://kknews.cc/zh-tw/finance/lp3kr9g.html" target="_blank" rel="noopener noreffer">如何計算投資組合的風險和回報</a></p>
<h3>
$$σ_{P}^2 = \begin{bmatrix}W_1&W_2&W_3\end{bmatrix} \times \begin{bmatrix}σ_{1}^2&σ_{2,1}&σ_{3,1} \\\ σ_{1,2}&σ_{2}^2&σ_{3,2} \\\ σ_{1,3}&σ_{2,3}&σ_{3}^2\end{bmatrix} \times \begin{bmatrix}W_1\\\ W_2\\\ W_3\end{bmatrix}$$
</h3>
{{< /admonition >}}

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-io4b{background-color:#efefef;border-color:inherit;color:#000000;font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
      <th class="tg-io4b" colspan="3"><h2>步驟一</h2></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow" colspan="3">$$\begin{bmatrix}W_1&W_2&W_3\end{bmatrix} \times \begin{bmatrix}σ_{1}^2&σ_{2,1}&σ_{3,1} \\\ σ_{1,2}&σ_{2}^2&σ_{3,2} \\\ σ_{1,3}&σ_{2,3}&σ_{3}^2\end{bmatrix}$$</td>
  </tr>
  <tr>
    <td class="tg-0pky">$W_{1}σ_{1}^2 + W_{2}σ_{1,2}+ W_{3}σ_{1,3}$</td>
    <td class="tg-0pky">$ W_{1}σ_{2,1}+ W_{2}σ_{2}^2+ W_{3}σ_{2,3}$</td>
    <td class="tg-0pky">$ W_{1}σ_{3,1}+ W_{2}σ_{3,2}+ W_{3}σ_{3}^2$</td>
  </tr>
  <tr>
      <td class="tg-io4b" colspan="3"><h2>步驟二</h2></td>
  </tr>
  <tr>
    <td class="tg-c3ow" colspan="3">$$\begin{bmatrix} W_{1}σ_{1}^2 + W_{2}σ_{1,2}+ W_{3}σ_{1,3},& W_{1}σ_{2,1}+ W_{2}σ_{2}^2+ W_{3}σ_{2,3},& W_{1}σ_{3,1}+ W_{2}σ_{3,2}+ W_{3}σ_{3}^2\end{bmatrix} \times \begin{bmatrix}W_1\\\ W_2\\\ W_3\end{bmatrix}$$</td>
  </tr>
  <tr>
    <td class="tg-0pky">$W_{1}^2σ_{1}^2$</td>
    <td class="tg-0pky">$ W_{1}W_{2}σ_{2,1}$</td>
    <td class="tg-0pky">$ W_{1}W_{2}σ_{3,1}$</td>
  </tr>
  <tr>
    <td class="tg-0pky">$ W_{1} W_{2}σ_{1,2}$</td>
    <td class="tg-0pky">$ W_{2}^2σ_{2}^2$</td>
    <td class="tg-0pky">$ W_{2}W_{3}σ_{3,2}$</td>
  </tr>
  <tr>
    <td class="tg-0pky">$ W_{1} W_{3}σ_{1,3}$</td>
    <td class="tg-0pky">$ W_{2}W_{3}σ_{2,3}$</td>
    <td class="tg-0pky">$ W_{3}^2σ_{3}^2$</td>
  </tr>
</tbody>
</table>

#### 用Python表示
{{<admonition note "參考資料">}}
[Python-繪製效率前緣(Efficient Frontier)](https://ycy-tw.github.io/2020/03/28/Python-%E7%B9%AA%E8%A3%BD%E6%95%88%E7%8E%87%E5%89%8D%E7%B7%A3(Efficient%20Frontier)/)<br>
[Python金融大數據分析——第11章 統計學（2）投資組合優化 筆記](https://www.twblogs.net/a/5b7f57ea2b717767c6af118b)
{{</admonition>}}

##### 方法一
{{<admonition info "以下程式碼來源，參考自：">}}
[Python-繪製效率前緣(Efficient Frontier)](https://ycy-tw.github.io/2020/03/28/Python-%E7%B9%AA%E8%A3%BD%E6%95%88%E7%8E%87%E5%89%8D%E7%B7%A3(Efficient%20Frontier)/)

```python
Portfolio_risk = np.sqrt(reduce(np.dot, [W, cov_matrix, W.T]))
```
{{</admonition>}}
##### 方法二

{{<admonition note "參考資料">}}

[Python Lambda](https://www.w3schools.com/python/python_lambda.asp)
```python
Portfolio_risk = lambda a, b,c: np.sqrt(np.dot(np.dot(a,b),c))
Portfolio_risk(W, cov_matrix,W.T)
```
{{</admonition>}}


### 隨機生成10000筆權重
{{< admonition info "以下程式碼來源，參考自：" >}}
[Python-繪製效率前緣(Efficient Frontier)](https://ycy-tw.github.io/2020/03/28/Python-%E7%B9%AA%E8%A3%BD%E6%95%88%E7%8E%87%E5%89%8D%E7%B7%A3(Efficient%20Frontier)/)
```python
Expected_R = returns.mean() * 252
cov_matrix = returns.cov()*252
all_Portfolio_risk = []
all_return = []
Expected_R = returns.mean() * 252

stop = 0

while stop < 10000:
    try:
        stop += 1
        W = np.random.rand(len(stock_codes))
        W = W/sum(W)
        all_return.append(sum(Expected_R * W))
        all_Portfolio_risk.append(np.sqrt(reduce(np.dot, [W, cov_matrix, W.T])))
    except:
        pass

SR = np.array(all_return)/np.array(all_Portfolio_risk)
```
{{< /admonition >}}
#### 畫圖
##### Fig 1
```python
fig = plt.figure(figsize = (20,10))
ax = fig.add_subplot()
ax.plot(all_Portfolio_risk, all_return, 'o',alpha=1)
fig.savefig('Efficient_Frontier_1.png',dpi=300, bbox_inches='tight')
```
<img src="https://i.imgur.com/k9uKXJg.png" width = "100%"/>

##### Fig 2
###### 方法一
```python
#基本設定
fig = plt.figure(figsize = (20,8))
risk_free = 0.01
SR = (np.array(all_return)-risk_free)/np.array(all_Portfolio_risk)

#字體大小設定
label_size = 27
tick_size = 15
Title_size = 40

#Title
Title = 'Efficient Frontier'

#格線
plt.grid(True)

#散點圖
plt.scatter(all_Portfolio_risk, all_return, c=SR,alpha=1)

#X,Y軸標籤
plt.xlabel('$σ_{P}$', fontsize=label_size, fontweight='bold')
plt.ylabel('$E(R)$', fontsize=label_size, fontweight='bold')

#X,Y軸字體設定
plt.xticks(fontsize=tick_size, fontweight='bold')
plt.yticks(fontsize=tick_size, fontweight='bold')

#color bar設定
cbar = plt.colorbar(label='$Sharpe$ $Ratio$')
ax = cbar.ax
ax.tick_params(labelsize=tick_size) 
cbar_Title = ax.yaxis.label
font = matplotlib.font_manager.FontProperties(size=label_size)
cbar_Title.set_font_properties(font)

plt.title(Title, fontsize=Title_size,family = 'monospace',ha = 'center')

#圖片儲存
plt.savefig('Efficient_Frontier_2.png',dpi=300, bbox_inches='tight')
```
###### 方法二

```python
fig = plt.figure(figsize = (20,8))
label_size = 27
tick_size = 15
Title_size = 40
Title = 'Efficient Frontier'
risk_free = 0.01
SR = (np.array(all_return)-risk_free)/np.array(all_Portfolio_risk)


ax = fig.add_subplot()
ax.grid(True)
ax_main = ax.scatter(all_Portfolio_risk, all_return, c=SR,alpha=1)

ax.set_title(Title, fontsize=Title_size,family = 'monospace',ha = 'center')
ax.set_xlabel('$σ_{P}$', fontsize=label_size, fontweight='bold')
ax.set_ylabel('$E(R)$', fontsize=label_size, fontweight='bold')

ax.tick_params(labelsize=tick_size) 


cbar = fig.colorbar(ax_main, ax=ax, label = '$Sharpe$ $Ratio$')
cbar = cbar.ax
cbar.tick_params(labelsize=tick_size) 
cbar_Title = cbar.yaxis.label
font = matplotlib.font_manager.FontProperties(size=label_size)
cbar_Title.set_font_properties(font)
fig.savefig('Efficient_Frontier_3.png',dpi=300, bbox_inches='tight')
```





<img src="https://i.imgur.com/Uog91y0.png" width = '100%'/>

### [scipy.optimize.minimize](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

#### min($σ_{P}$)

```python
def standard_deviation(W):
    return Portfolio_risk(W, cov_matrix,W.T)
```

{{< admonition info "以下程式碼來源，參考自：" >}}
[Python-繪製效率前緣(Efficient Frontier)](https://ycy-tw.github.io/2020/03/28/Python-%E7%B9%AA%E8%A3%BD%E6%95%88%E7%8E%87%E5%89%8D%E7%B7%A3(Efficient%20Frontier)/)

```python
x0 = [1/len(stock_codes) for e in range(len(stock_codes))]

bounds = tuple((0, 1) for x in range(len(stock_codes)))

constraints = [{'type': 'eq', 'fun': lambda x: sum(x) - 1}]

min_Portfolio_risk = solver.minimize(standard_deviation, x0=x0, constraints=constraints, bounds=bounds)

mvp_risk = min_Portfolio_risk.fun
mvp_return = sum(min_Portfolio_risk.x * Expected_R)


print('風險最小化投資組合預期報酬率為:' + str(round(mvp_return,2)))
print('風險最小化投資組合風險為:' + str(round(mvp_risk,2)))
```
{{< /admonition >}}

{{<admonition note "補充資料">}}
[scipy.optimize.minimize](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

<img src="https://i.imgur.com/m2P2B2d.jpg" width = "100%"/>

{{< /admonition >}}

{{< admonition info "以下程式碼來源，參考自：" >}}

[Python-繪製效率前緣(Efficient Frontier)](https://ycy-tw.github.io/2020/03/28/Python-%E7%B9%AA%E8%A3%BD%E6%95%88%E7%8E%87%E5%89%8D%E7%B7%A3(Efficient%20Frontier)/)

```python
for i in range(0,len(stock_codes)):
    print(stock_codes[i]+' 佔投資組合權重 : ' + str(format(min_Portfolio_risk.x[i], '.4f')))
```

$$SR = \frac{R_{P} - R_{f}}{σ_{P}}$$

```python
risk_free = 0.01
SR = (np.array(all_return)-risk_free)/np.array(all_Portfolio_risk)
```

```python
x0 = [1/len(stock_codes) for e in range(len(stock_codes))]
bounds = tuple((0, 1) for x in range(len(stock_codes)))

efficient_fronter_return_range = np.arange(min(all_return), max(all_return),(max(all_return) - min(all_return))/20)
efficient_fronter_risk_list = []

for i in efficient_fronter_return_range:
    constraints = [{'type': 'eq', 'fun': lambda x: sum(x) - 1},
                   {'type': 'eq', 'fun': lambda x: sum(x * Expected_R) - i}]
    efficient_fronter = solver.minimize(standard_deviation, x0=x0, constraints=constraints, bounds=bounds)
    efficient_fronter_risk_list.append(efficient_fronter.fun)
```

{{< /admonition >}}

```python
label_size = 27
tick_size = 15
Title_size = 40
Title = 'Efficient Frontier'

fig = plt.figure(figsize = (20,8))

ax = fig.add_subplot()
ax.grid(True)

ax_main = ax.scatter(all_Portfolio_risk, all_return, c=SR,alpha=1)

ax.set_title(Title, fontsize=Title_size,family = 'monospace',ha = 'center')
ax.set_xlabel('$σ_{P}$', fontsize=label_size, fontweight='bold')
ax.set_ylabel('$E(R)$', fontsize=label_size, fontweight='bold')

ax.tick_params(labelsize=tick_size) 

ax.plot(efficient_fronter_risk_list, efficient_fronter_return_range, linewidth=5, color='#251f6b')
ax.plot(mvp_risk, mvp_return,'o',color='r', markerfacecolor='#ed1313',  markersize=15)

cbar = fig.colorbar(ax_main, ax=ax, label = '$Sharpe$ $Ratio$')
cbar = cbar.ax
cbar.tick_params(labelsize=tick_size) 
cbar_Title = cbar.yaxis.label
font = matplotlib.font_manager.FontProperties(size=label_size)
cbar_Title.set_font_properties(font)
fig.savefig('Efficient_Frontier_4.png',dpi=300, bbox_inches='tight')
```

<img src="https://i.imgur.com/X2kXG6k.png" width = "100%"/>

### 完整程式碼/SQL/

```python
from sqlalchemy import create_engine

import pandas as pd

import matplotlib
import matplotlib.pyplot as plt
%matplotlib inline

import numpy as np
from functools import reduce
import scipy.optimize as solver

user = 'root'
pw = "YourPassword"
db = "TWSE"
engine = create_engine("mysql+pymysql://{}:{}@localhost/{db}".format(user,pw,db=db))

Start = '2020/10/20 00:00:00'
End = '2021/1/10 23:59:59'

SQL = '''
SELECT `收盤價` FROM `{}` WHERE `證券代號` = '{}' AND `日期` BETWEEN '{}' AND '{}' ORDER BY `日期`
'''

stock_codes = ['2330','2317','1234']

def getSQL(stock_code):
    df = pd.read_sql(SQL.format('每日收盤行情',stock_code, Start, End), engine, coerce_float=True, parse_dates=True)
    return df

def Tsql(stock_codes):
    for i in range(0,len(stock_codes)):
        globals()[i] = getSQL(stock_codes[i])
        if i == 0:
            df = pd.DataFrame(globals()[i].pct_change())
            df = df.rename(columns = {'收盤價':stock_codes[i]})
        else:
            df['{}'.format(stock_codes[i])] = globals()[i].pct_change()
    df = df.replace([np.inf, -np.inf,np.nan], 0)
    return df

returns = Tsql(stock_codes)

Expected_R = returns.mean() * 252
cov_matrix = returns.cov()*252

Portfolio_risk = lambda a, b,c: np.sqrt(np.dot(np.dot(a,b),c))
all_Portfolio_risk = []
all_return = []

stop = 0

while stop < 10000:
    try:
        stop += 1
        W = np.random.rand(len(stock_codes))
        W = W/sum(W)
        all_return.append(sum(Expected_R * W))
        all_Portfolio_risk.append(Portfolio_risk(W, cov_matrix,W.T))
    except:
        pass

def standard_deviation(W):
    return Portfolio_risk(W, cov_matrix,W.T)

x0 = [1/len(stock_codes) for e in range(len(stock_codes))]
bounds = tuple((0, 1) for x in range(len(stock_codes)))
constraints = [{'type': 'eq', 'fun': lambda x: sum(x) - 1}]

min_Portfolio_risk = solver.minimize(standard_deviation, x0=x0, constraints=constraints, bounds=bounds)
mvp_risk = min_Portfolio_risk.fun
mvp_return = sum(min_Portfolio_risk.x * Expected_R)


print('風險最小化投資組合預期報酬率為:' + str(round(mvp_return,2)))
print('風險最小化投資組合風險為:' + str(round(mvp_risk,2)))

for i in range(0,len(stock_codes)):
    print(stock_codes[i]+' 佔投資組合權重 : ' + str(format(min_Portfolio_risk.x[i], '.4f')))

risk_free = 0.01
SR = (np.array(all_return)-risk_free)/np.array(all_Portfolio_risk)

start = round(min(all_return),6)
end = round(max(all_return),4)

efficient_fronter_return_range = np.arange(start, end,(max(all_return) - min(all_return))/30)
efficient_fronter_risk_list = []

for i in efficient_fronter_return_range:
    constraints = [{'type': 'eq', 'fun': lambda x: sum(x) - 1},
                   {'type': 'eq', 'fun': lambda x: sum(x * Expected_R) - i}]
    efficient_fronter = solver.minimize(standard_deviation, x0=x0, constraints=constraints, bounds=bounds)
    efficient_fronter_risk_list.append(efficient_fronter.fun)

label_size = 27
tick_size = 15
Title_size = 40
Title = 'Efficient Frontier'

fig = plt.figure(figsize = (20,8))

ax = fig.add_subplot()
ax.grid(True)

ax_main = ax.scatter(all_Portfolio_risk, all_return, c=SR,alpha=1)

ax.set_title(Title, fontsize=Title_size,family = 'monospace',ha = 'center')
ax.set_xlabel('$σ_{P}$', fontsize=label_size, fontweight='bold')
ax.set_ylabel('$E(R)$', fontsize=label_size, fontweight='bold')

ax.tick_params(labelsize=tick_size) 

ax.plot(efficient_fronter_risk_list, efficient_fronter_return_range, linewidth=5, color='#251f6b')
ax.plot(mvp_risk, mvp_return,'o',color='r', markerfacecolor='#ed1313',  markersize=15)

cbar = fig.colorbar(ax_main, ax=ax, label = '$Sharpe$ $Ratio$')
cbar = cbar.ax
cbar.tick_params(labelsize=tick_size) 
cbar_Title = cbar.yaxis.label
font = matplotlib.font_manager.FontProperties(size=label_size)
cbar_Title.set_font_properties(font)
fig.savefig('Efficient_Frontier_4.png',dpi=300, bbox_inches='tight')
```

### 完整程式碼/免SQL/

```python
import pandas_datareader.data as web
import mplfinance as mpf
import matplotlib
import matplotlib.pyplot as plt
%matplotlib inline

import numpy as np
import scipy.optimize as solver
stock_code = ['2330','3008','6409','1234','2337','2412']
stock_codes = ['{}.tw'.format(e) for e in stock_code]

df = web.DataReader(stock_codes, 'yahoo', '2020-05-01')

returns = df['Close'].pct_change()
Expected_R = returns.mean() * 252
cov_matrix = returns.cov()*252

Portfolio_risk = lambda a, b,c: np.sqrt(np.dot(np.dot(a,b),c))
all_Portfolio_risk = []
all_return = []

stop = 0

while stop < 50000:
    try:
        stop += 1
        W = np.random.rand(len(stock_codes))
        W = W/sum(W)
        all_return.append(sum(Expected_R * W))
        all_Portfolio_risk.append(Portfolio_risk(W, cov_matrix,W.T))
    except:
        pass

def standard_deviation(W):
    return Portfolio_risk(W, cov_matrix,W.T)

x0 = [1/len(stock_codes) for e in range(len(stock_codes))]
bounds = tuple((0, 1) for x in range(len(stock_codes)))
constraints = [{'type': 'eq', 'fun': lambda x: sum(x) - 1}]

min_Portfolio_risk = solver.minimize(standard_deviation, x0=x0, constraints=constraints, bounds=bounds)
mvp_risk = min_Portfolio_risk.fun
mvp_return = sum(min_Portfolio_risk.x * Expected_R)


print('風險最小化投資組合預期報酬率為:' + str(round(mvp_return,2)))
print('風險最小化投資組合風險為:' + str(round(mvp_risk,2)))

for i in range(0,len(stock_codes)):
    print(stock_codes[i]+' 佔投資組合權重 : ' + str(format(min_Portfolio_risk.x[i], '.4f')))

risk_free = 0.01
SR = (np.array(all_return)-risk_free)/np.array(all_Portfolio_risk)

start = round(min(all_return),6)
end = round(max(all_return),4)

efficient_fronter_return_range = np.arange(start, end,(max(all_return) - min(all_return))/30)
efficient_fronter_risk_list = []

for i in efficient_fronter_return_range:
    constraints = [{'type': 'eq', 'fun': lambda x: sum(x) - 1},
                   {'type': 'eq', 'fun': lambda x: sum(x * Expected_R) - i}]
    efficient_fronter = solver.minimize(standard_deviation, x0=x0, constraints=constraints, bounds=bounds)
    efficient_fronter_risk_list.append(efficient_fronter.fun)

label_size = 27
tick_size = 15
Title_size = 40
Title = 'Efficient Frontier'

fig = plt.figure(figsize = (20,8))

ax = fig.add_subplot()
ax.grid(True)

ax_main = ax.scatter(all_Portfolio_risk, all_return, c=SR,alpha=1)

ax.set_title(Title, fontsize=Title_size,family = 'monospace',ha = 'center')
ax.set_xlabel('$σ_{P}$', fontsize=label_size, fontweight='bold')
ax.set_ylabel('$E(R)$', fontsize=label_size, fontweight='bold')

ax.tick_params(labelsize=tick_size) 

ax.plot(efficient_fronter_risk_list, efficient_fronter_return_range, linewidth=5, color='#251f6b')
ax.plot(mvp_risk, mvp_return,'o',color='r', markerfacecolor='#ed1313',  markersize=15)

cbar = fig.colorbar(ax_main, ax=ax, label = '$Sharpe$ $Ratio$')
cbar = cbar.ax
cbar.tick_params(labelsize=tick_size) 
cbar_Title = cbar.yaxis.label
font = matplotlib.font_manager.FontProperties(size=label_size)
cbar_Title.set_font_properties(font)
fig.savefig('Efficient_Frontier_4.png',dpi=300, bbox_inches='tight')
```


