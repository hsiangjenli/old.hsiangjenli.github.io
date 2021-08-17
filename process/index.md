# Process

<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<h1 style = "font-family: Verdana;font-weight: 600;">...</h1>

## Input Data
### 缺失值處理

## 敘述統計
### 峰態、偏態
```python
from scipy import stats

stats.kurtosis(residules)
```

### 資料常態分配
#### 檢驗方式
```python
from scipy import stats

stats.jarque_bera(data)
```
```python
from scipy import stats

_, p_value = stats.normaltest(data)

alpha = 0.05

print("p = {}".format(p_value))

if p_value < alpha:
    print("拒絕虛無假說")
else:
    print("無法拒絕虛無假說，是常態分佈")
```

{{<admonition info "">}}
1. [哥布林守護者（2019）用Python檢驗數據正態分佈的幾種方法](https://zhuanlan.zhihu.com/p/40447523)
1. [scipy.stats.normaltest](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.normaltest.html#scipy-stats-normaltest)

{{</admonition>}}

### 資料歪斜
#### log
#### 殘差歪斜
##### 內核密度估計器（Kernel density estimator）
```python
df.plot(kind = 'kde')
```

## 新增資料欄位
### OneHotEncoder
```python
from sklearn.preprocessing import OneHotEncoder
```
### LabelEncoder
```python
from sklearn.preprocessing import LabelEncoder
```





