# XXXXXXXXLinear Regression


<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

# SQL連線

```python
from sqlalchemy import create_engine
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

user = 'root'
pw = "YourPassword"
db = "TWSE"
engine = create_engine("mysql+pymysql://{}:{}@localhost/{db}".format(user,pw,db=db))

Start = '2020/10/20 00:00:00'
End = '2021/1/10 23:59:59'

SQL = '''
SELECT * FROM `{}` WHERE `日期` BETWEEN '{}' AND '{}' ORDER BY `日期`
'''

df = pd.read_sql(SQL.format('發行量加權股價指數', Start, End), engine, coerce_float=True, parse_dates=True)

df = df['收盤指數']
```
# Regression

## numpy

### Linear Regression

{{<admonition quote "Degree 1">}}

```python
x = np.array(df.index)
y = np.array(df)

plt.plot(x, y,'o')

m, b = np.polyfit(x, y, 1)

plt.plot(x, m*x + b,linewidth = 4,c='r')
```
<br>
<br>

{{</admonition>}}

### Polynomial regression

{{<admonition quote "Degree 4">}}

```python
from numpy.polynomial import Polynomial

p = Polynomial.fit(x, y, 4)
plt.plot(x, y,'o')
plt.plot(*p.linspace(),linewidth = 4,c='r')
```

```python
pnormal = p.convert(domain=(-1, 1))
pnormal
```
<br>
<br>
<center><small>
$x \mapsto \text{13016.758838492064} - \text{112.73756922573969}\,x + \text{12.521875114529937}\,x^{2} - \text{0.3460298242233912}\,x^{3} + \text{0.003055214499407899}\,x^{4}$</small></center>
<br>
<br>

```python
def regression(i):
    plt.subplot(20,2,i)
    p = Polynomial.fit(x, y, i)
    plt.plot(x, y,'o')
    plt.title(' \n \nPolynomial.fit()\nDegree {}'.format(i))
    plot = plt.plot(*p.linspace(),linewidth = 4,c='r')
    plt.savefig('Degree {}.jpg'.format(i))
    return plot

plt.subplots(1, 1, figsize=(20, 120)) 
n = 19

for i in range(1,n):
    regression(i)
```







{{</admonition>}}

{{<admonition info "參考資料">}}
[fitting data with numpy](https://stackoverflow.com/questions/18767523/fitting-data-with-numpy)
{{</admonition>}}

## sklearn

### LinearRegression().fit()

{{<admonition quote "Degree 1">}}

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

x = np.array(df.index).reshape(-1, 1)
y = np.array(df)

model = LinearRegression().fit(x, y)
b, m = model.intercept_, model.coef_
r_sq = model.score(x, y)
```

```python
plt.plot(x,y, 'o')
plt.plot(x,m*x+b,linewidth = 4,c='r')
```
<br>
<br>

{{</admonition>}}

### PolynomialFeatures()

{{<admonition quote "Degree 4">}}

```python
from sklearn.linear_model import Ridge
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
```

```python
x = np.array(df.index).reshape(-1, 1)
y = np.array(df)
X_seq = np.linspace(x.min(),x.max(),1000).reshape(-1,1)
```

```python
polyreg=make_pipeline(PolynomialFeatures(4),LinearRegression())
polyreg.fit(x,y)
plt.plot(x,y, 'o')
plt.plot(X_seq,polyreg.predict(X_seq),linewidth = 4,color="r")
```

<br>

<br>



```python
 def polynomial_plot(degree):
    plt.subplot(20,2,degree)
    polyreg=make_pipeline(PolynomialFeatures(degree),LinearRegression())
    polyreg.fit(x,y)
    plt.plot(x,y, 'o')
    plt.title("Polyfit degree {}".format(degree))
    plot = plt.plot(X_seq,polyreg.predict(X_seq),linewidth = 4,color="r")
    return plot
```

```python
plt.subplots(1, 1, figsize=(20, 120)) 

for degree in range(1,19):
    polynomial_plot(degree)
```


{{</admonition>}}

{{<admonition info "參考資料">}}
[Linear Regression in Python](https://realpython.com/linear-regression-in-python/)

[How to plot a linear regression line on a scatter plot in Python](https://www.kite.com/python/answers/how-to-plot-a-linear-regression-line-on-a-scatter-plot-in-python#:~:text=Use%20numpy.,the%20line%20of%20best%20fit.)

[机器学习常用算法——线性回归](https://lz5z.com/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%B8%B8%E7%94%A8%E7%AE%97%E6%B3%95%E2%80%94%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92/)

[Volume-Supported Linear Regression Trend](https://tw.tradingview.com/script/XVPeRgdt-Volume-Supported-Linear-Regression-Trend/)

[學會用機器學習預測股價 — 完整流程教學與實作](https://medium.com/ai%E8%82%A1%E4%BB%94/%E5%AD%B8%E6%9C%83%E7%94%A8%E6%A9%9F%E5%99%A8%E5%AD%B8%E7%BF%92%E9%A0%90%E6%B8%AC%E8%82%A1%E5%83%B9-%E5%AE%8C%E6%95%B4%E6%B5%81%E7%A8%8B%E6%95%99%E5%AD%B8%E8%88%87%E5%AF%A6%E4%BD%9C-b057e7343ca4)
[Polynomial regression](https://en.wikipedia.org/wiki/Polynomial_regression)

[Polynomial Regression with Scikit learn: What You Should Know](https://towardsdatascience.com/polynomial-regression-with-scikit-learn-what-you-should-know-bed9d3296f2)
{{</admonition>}}

