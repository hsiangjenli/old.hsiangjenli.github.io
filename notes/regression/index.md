# Regression


<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

{{<admonition quote "基本">}}
```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
```

```python
from sqlalchemy import create_engine
from datetime import datetime

user = 'root'
pw = "YourPassword"
db = "TWSE"
engine = create_engine("mysql+pymysql://{}:{}@localhost/{db}".format(user,pw,db=db))

Start = '2019/10/20 00:00:00'
End = '2021/1/10 23:59:59'

SQL = '''
SELECT * FROM `{}` WHERE `日期` BETWEEN '{}' AND '{}' ORDER BY `日期`
'''

df = pd.read_sql(SQL.format('發行量加權股價指數', Start, End), engine, coerce_float=True, parse_dates=True)

df = pd.DataFrame(df['收盤指數'])
```

```python
df['收盤指數'].hist()
```

<center><img src="https://i.imgur.com/DAyw1rL.png" width = "50%"/></center>

```python
df['t-10'] = df.shift(10)
df = df.dropna()

x = np.array(df['t-10'])
y = np.array(df['收盤指數'])
```

```python
plt.scatter(x,y)
```

<center><img src="https://i.imgur.com/0uNxAYB.png" width = "50%"/></center>

```python
def polynominal(x,y,i):
    
    results = {}
    
    p = Polynomial.fit(x, y,i)
    pnormal = p.convert(domain=(-1, 1))
    
    SST = sum((y-y.mean())**2)
    SSR = sum((pnormal(x)-y.mean())**2)
    R_squared = SSR/SST
    
    corr = numpy.corrcoef(x, y)[0,1]
    
    results['Function'] = pnormal
    results['correlation'] = corr
    results['R_squared'] = R_squared
    
    plt.subplot(20,2,i)
    plt.scatter(x,y)
    
    plt.title('Degree {i}\n$R^2$ = {R_squared}'.format(i=i,R_squared=R_squared))
    plt.plot(*p.linspace(),linewidth = 4,c='r')
    return results
```

```python
fig, ax = plt.subplots(1, 1, figsize=(20, 120)) 
for i in range(1,21):
    polynominal(x,y,i)
```



```python
polynominal(x,y,1)['Function']
polynominal(x,y,1)['Function'](16000)
```

$$x \mapsto \text{118.88807679810452} + \text{1.0001305664084157}\,x$$

{{</admonition>}}

