# NOTE [1] 對數報酬率

<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<h1 style = "font-family: Verdana;font-weight: 600;">報酬率</h1>


## 算數平均報酬率 **Arithmetic mean**

## ~~幾何平均報酬率 **Geometric mean**~~

{{<admonition bug "缺點">}}

數列中任何一個變數值不能為0，一個為0，則幾何平均數為0

{{</admonition>}}

## 對數報酬率 **Logarithmic Rates of Return**

{{<admonition info "Understanding Log Return and Continuous Compounding">}}

Log Return is one of three methods for calculating return and it assumes returns are **compounded continuously** rather than across sub-periods.

{{</admonition>}}

{{<admonition note "優點">}}

簡化計算

{{</admonition>}}

---



# 對數報酬率

## Python 對數報酬率寫法
### 方法一
```python
np.exp(np.log(df['Adj Close']).diff(1))-1
```
### 方法二
```python
np.exp(np.log(df['Adj Close']/df['Adj Close'].shift(1)))-1
```



{{<admonition note "為什麼要用對數報酬率？">}}

對數報酬率有時間的累加性

簡化計算過程

{{</admonition>}}


## PART 1 解釋 /Daily/
{{<admonition quote "PART 1">}}

<h3>STEP 1</h3>
$\frac{P_{t}-P_{t-1}}{P_{t-1}} = \frac{P_{t}}{P_{t-1}} - 1 = r$

<h3>STEP 2 移向</h3>
$1+r = \frac{P_{t}}{P_{t-1}}$

<h3>STEP 3 取對數</h3>
$ln(1+r) = ln(\frac{P_{t}}{P_{t-1}}) = ln(P_{t}) - ln(P_{t-1})$

$Y=ln(1+r)$

{{</admonition>}}

## PART 2 解釋 /Period/
{{<admonition quote "PART 2">}}
<h3>STEP 1</h3>
$r_{T} = \frac{P_{T} - P_{0}}{P_{0}} = \frac{P_{T}}{P_{0}} - 1$

<h3>STEP 2 移向</h3>
$1+r_{T} = \frac{P_{T}}{P_{0}}$

<h3>STEP 3 取對數&拆解</h3>
$ln(\frac{P_T}{P_0})=ln(\frac{P_T}{P_{T-1}})+ln(\frac{P_{T-1}}{P_{T-2}})+…+ln(\frac{P_1}{P_0})$

<h3>STEP 4 </h3>
$e^{ln(\frac{P_T}{P_0})} = \frac{P_T}{P_0}$

$r_{T} = e^{ln(\frac{P_T}{P_0})} -1 = \frac{P_T}{P_0} -1$

{{</admonition>}}




```python
import numpy as np
import pandas as pd
import pandas_datareader.data as web

df = web.DataReader('2330.tw', 'yahoo', '2020-05-01')
```

```python
different = pd.DataFrame()

different['pct_cahnge()'] = df['Adj Close'].pct_change()
different['np.log().diff(1)'] = np.exp(np.log(df['Adj Close']).diff(1))-1

different
```

<img src="https://i.imgur.com/Rdc3HMA.jpg" width = "100%"/>

```python
P_cumsum = pd.DataFrame()

P_cumsum['pct_cahnge()'] = np.cumsum(df['Adj Close'].pct_change())
P_cumsum['np.log().diff(1)'] = np.exp(np.cumsum(np.log(df['Adj Close']).diff(1)))-1

P_cumsum
```

<img src="https://i.imgur.com/n9T9OaW.jpg" width = "100%"/>

```python
tick_size = 20
legend_fontsize = 15
linewidth = 4

fig = plt.figure(figsize = (20,8))

ax = fig.add_subplot()

ax1 = ax.plot(P_cumsum['pct_cahnge()'],linewidth=linewidth)
ax2 = ax.plot(P_cumsum['np.log().diff(1)'],linewidth=linewidth)

ax.tick_params(labelsize=tick_size) 
ax.legend(['pct_cahnge()','np.log().diff(1)'],loc='upper left',fontsize=legend_fontsize, frameon=False)
```



<img src="https://i.imgur.com/B1NJdKq.png" width = "100%"/>

{{<admonition info "參考資料">}}

[[量化投資基本功]為什麼對數收益率在量化投資這麼重要? log return 與累積報酬率](https://pyecontech.com/2020/11/03/%E9%87%8F%E5%8C%96%E6%8A%95%E8%B3%87%E5%9F%BA%E6%9C%AC%E5%8A%9F%E7%82%BA%E4%BB%80%E9%BA%BC%E5%B0%8D%E6%95%B8%E6%94%B6%E7%9B%8A%E7%8E%87%E5%9C%A8%E9%87%8F%E5%8C%96%E6%8A%95%E8%B3%87%E9%80%99%E9%BA%BC/)

[[Youtube]量化投資基本功---為什麼對數收益率在量化投資這麼重要? log return 與累積報酬率](https://www.youtube.com/watch?v=ecksnpTZ9Mw)

[關於幾何報酬率與算術報酬率的分享--TOM雜寫](http://shropi.blogspot.com/2012/05/tom.html)

[[Day28]投資組合的風險評估 - 對數收益率](https://ithelp.ithome.com.tw/articles/10207621)

[Re: [問題] 取log=成長率](https://www.ptt.cc/bbs/Statistics/M.1396966216.A.041.html)

[[ROI] 討論報酬率的計算公式與報酬率理解觀念](https://tw.tradingview.com/chart/TAIEX/2TFLMe2d/)

[Understanding Log Return and Continuous Compounding](https://factorpad.com/fin/glossary/log-return.html#:~:text=In%20math%20and%20statistics%2C%20a,broken%20into%20discrete%20periods%20instead.&text=Geometric%20return%20%2D%20Multi%2Dperiod%2C%20compounded%2C%20discrete.)

[Python : easy way to do geometric mean in python?](https://stackoverflow.com/questions/43099542/python-easy-way-to-do-geometric-mean-in-python)

[統計：一個簡單的幾何平均數的運算範例](http://slashview.com/archive2018/20180118.html)

[幾何平均數](https://wiki.mbalib.com/zh-tw/%E5%87%A0%E4%BD%95%E5%B9%B3%E5%9D%87%E6%95%B0)



{{</admonition>}}
