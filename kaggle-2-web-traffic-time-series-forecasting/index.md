# Kaggle [2]

<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<h1 style = "font-family: Verdana;font-weight: 600;">Web Traffic Time Series Forecasting</h1>

{{<admonition bug "statement">}}

單純紀錄個人學習過程

{{</admonition>}}

## Input Data

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import re
%matplotlib inline

sns.set(rc={'axes.facecolor':'white', 'figure.facecolor':'white'})
```
```python
train = pd.read_csv('Data/ch4/train_1.csv')
```

|      | Page                                                | 2015-07-01 | 2015-07-02 | 2015-07-03 | 2016-12-29 | 2016-12-30 | 2016-12-31 |
| ---: | :-------------------------------------------------- | ---------: | ---------: | ---------: | ---------: | ---------: | ---------: |
|    0 | 2NE1_zh.wikipedia.org_all-access_spider             |         18 |         11 |          5 |         19 |         18 |         20 |
|    1 | 2PM_zh.wikipedia.org_all-access_spider              |         11 |         14 |         15 |         45 |         26 |         20 |
|    2 | 3C_zh.wikipedia.org_all-access_spider               |          1 |          0 |          1 |          3 |          4 |         17 |
|    3 | 4minute_zh.wikipedia.org_all-access_spider          |         35 |         13 |         10 |         19 |         10 |         11 |
|    4 | 52_Hz_I_Love_You_zh.wikipedia.org_all-access_spider |        nan |        nan |        nan |         13 |         36 |         10 |

## 整理資料
### 解析Page的資料
```python
def parse_page(page):
    l = page.split('_')
    return ' '.join(l[:-3]), l[-3], l[-2], l[-1]
```

```python
parse_page(train.Page[1462])

>>> ('六花的勇者', 'zh.wikipedia.org', 'all-access', 'spider')
```
#### 將所有資料套用parse_page
```python
list_parse_page = list(train.Page.apply(parse_page))
df_parse_page = pd.DataFrame(list_parse_page)
df_parse_page.columns = ['Subject', 'Sub_page', 'Access', 'Agent']
train = pd.concat([train, df_parse_page],axis = 1)

del train['Page']
```
#### parse_page有哪些資訊
```python
for i in df_parse_page.keys()[1:4]:
    print(df_parse_page[i].unique(), end = '\n\n')
```
```python
['zh.wikipedia.org','fr.wikipedia.org','en.wikipedia.org','commons.wikimedia.org','ru.wikipedia.org','www.mediawiki.org','de.wikipedia.org','ja.wikipedia.org','es.wikipedia.org']

['all-access','desktop','mobile-web']

['spider','all-agents']
```
```python
from collections import Counter

Counter(train.Sub_page)

>>> Counter({'zh.wikipedia.org': 17229,
             'fr.wikipedia.org': 17802,
             'en.wikipedia.org': 24108,
             'commons.wikimedia.org': 10555,
             'ru.wikipedia.org': 15022,
             'www.mediawiki.org': 7300,
             'de.wikipedia.org': 18547,
             'ja.wikipedia.org': 20431,
             'es.wikipedia.org': 14069})
```
{{<admonition info "參考資料">}}
1. [collections --- 容器資料型態](https://docs.python.org/zh-tw/3/library/collections.html)
1. [Python計數器collections.Counter用法詳解](https://blog.csdn.net/sinat_28576553/article/details/99131954#:~:text=Python%20collections.Counter%E7%94%A8%E6%B3%95%E8%AF%A6%E8%A7%A3,%E5%85%83%E7%B4%A0%EF%BC%88element%EF%BC%89%E7%9A%84%E6%95%B0%E9%87%8F%E3%80%82)
{{</admonition>}}
#### 將parse_page的資料畫成長條圖
```python
def annotate(plot_name):
    list_bar_height = np.array([i.get_height() for i in plot_name.patches])
    bar_height_mean = list_bar_height.mean()
    for bar in plot_name.patches:
        plot_name.annotate('{:.0f} ({:.2f})'.format(bar.get_height(),bar.get_height()/bar_height_mean), 
                           (bar.get_x() + bar.get_width() / 2, 
                            bar.get_height()), ha='center', va='center',
                           size=12, xytext=(0, 8),
                           textcoords='offset points')    
```
```python
plt.figure(figsize = (20,8))

p1 = sns.countplot(x='Sub_page',data = train,order = train['Sub_page'].value_counts().index, palette='RdBu_r')
annotate(p1)
plt.savefig('Image/Chapter4_countplot_subpage.png', bbox_inches = 'tight')


plt.subplots(figsize = (20,7))

plt.subplot(1,2,1)
p2 = sns.countplot(x='Access',data = train,order = train['Access'].value_counts().index, palette='RdBu_r')
annotate(p2)

plt.subplot(1,2,2)
p3 = sns.countplot(x='Agent',data = train,order = train['Agent'].value_counts().index, palette='RdBu_r')
annotate(p3)

plt.savefig('Image/Chapter4_countplot_Access_Agent.png', bbox_inches = 'tight')
```
<center><img src="https://i.imgur.com/ddYETmA.png" width = "100%"/></center>
<center><img src="https://i.imgur.com/cmG0XVG.png" width = "100%"/></center>

{{<admonition quote "SubPage">}}
1. en.wikipedia.org 擁有最多的網頁，比平均多50%
1. ja.wikipedia.org 比平均多27%
1. de.wikipedia.org 比平均多15%
{{</admonition>}}

{{<admonition info "參考資料">}}
1. [Seaborn.countplot : order categories by count?](https://stackoverflow.com/questions/46623583/seaborn-countplot-order-categories-by-count)
{{</admonition>}}

### 解析SubPage的資料
#### 取出國家代碼
```python
def parse_subpage_lan(sub_page):
    lan = re.search('[a-z][a-z].wikipedia.org',sub_page)
    if lan:
        return lan[0][0:2]
    else:
        return np.nan
```
```python
list_lan = list(train['Sub_page'].apply(parse_subpage_lan))
df_lan = pd.DataFrame(list_lan)
df_lan.columns = ['lan']

train = pd.concat([train, df_lan], axis = 1)
```
#### 計算每個SubPage（國家）的瀏覽數量（日）
```python
mycolor = ['#326599','#538FB3','#9AC1D4','#8F9A9F','#E5A98F','#B2836F','#AAA9A9','#C56C5E','#9D2B39']

df_lan_day = train.groupby('lan').sum().T
```
##### 日期轉換
```python
import datetime

df_lan_day.index = [datetime.datetime.strptime(d, "%Y-%m-%d") for d in df_lan_day.index]
```
##### Fig_1
```python
plt.figure(figsize = (20,8))
for key,c in zip(df_lan_day,mycolor):
    sns.lineplot(data = df_lan_day,x = df_lan_day.index,y = key,label = key, linewidth = 3,color = c)
plt.legend()

plt.savefig('Image/Chapter4_不同國家的線圖', bbox_inches = 'tight')
```
<center><img src="https://i.imgur.com/9sm7ofH.png" width = "100%"/></center>

```python
plt.figure(figsize = (20,8))
for key,c in zip(df_lan_day,mycolor):
    sns.lineplot(data = df_lan_day,x = df_lan_day.index,y = key,label = key, linewidth = 3,color = c)
plt.legend()
plt.yscale('log')
plt.savefig('Image/Chapter4_不同國家的線圖_log', bbox_inches = 'tight')
```
<center><img src="https://i.imgur.com/GyOAaZv.png" width = "100%"/></center>

{{<admonition note "plt.yscale('log')">}}

{{</admonition>}}

{{<admonition note "ooo">}}
考量到en的網頁數量比其他還要多，理論上觀看數本來就會比較多。所以

比較特別的是ru跟en在2016的7月到9月間同時產生峰值
{{</admonition>}}


