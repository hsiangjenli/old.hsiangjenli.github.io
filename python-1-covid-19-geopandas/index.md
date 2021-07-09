# Python [1]  Covid-19  + geopandas



<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

## Installation of geopandas
### [Unofficial Windows Binaries for Python Extension Packages](https://www.lfd.uci.edu/~gohlke/pythonlibs/)

{{<admonition note "下載5個whl檔">}}
1. GDAL
2. pyproj
3. Fiona
4. Shapely
5. geopandas
{{<admonition danger "注意">}}
1. 依照Python版本下載相對應版本
2. 按照上面的順序，依次執行下令程式碼(Anaconda Prompt )
```python
pip install GDAL-3.2.3-cp37-cp37m-win32.whl
pip install pyproj-3.0.1-cp37-cp37m-win32.whl
pip install Fiona-1.8.19-cp37-cp37m-win32.whl
pip install Shapely-1.7.1-cp37-cp37m-win32.whl
pip install geopandas-0.9.0-py3-none-any.whl
```
{{</admonition>}}
{{</admonition>}}



## [縣市界線資料](https://data.gov.tw/dataset/7442)
### 下載SHP
<img src="https://i.imgur.com/wZPJByX.jpg" width = "100%"/>

### 解壓縮5個檔案
<img src="https://i.imgur.com/nNaUd75.jpg" width = "100%"/>

```python
#縣市界線資料---------------------------------------------------------------------------------------------- 
import geopandas as gpd

C_shp = gpd.read_file(r'COUNTY_MOI_1090820.shp')
C_shp.set_index('COUNTYNAME', inplace = True)
```
<img src="https://i.imgur.com/8evsp19.jpg" width = "100%"/>

## [鄉鎮界線資料](https://data.gov.tw/dataset/7441)

### 下載SHP

<img src="https://i.imgur.com/a6ymjG7.jpg" width = "100%"/>

### 解壓縮檔案

<img src="https://i.imgur.com/UQE3ZWK.jpg" width = "100%"/>

{{<admonition danger "">}}

<center>

## 缺少CPG檔會造成亂碼

## 5個檔案檔名都要一樣
</center>

{{</admonition>}}

```python
#鄉鎮界線資料---------------------------------------------------------------------------------------------- 
import geopandas as gpd

t_shp = gpd.read_file(r'TOWN_MOI_1100415.shp')
t_shp.set_index('TOWNNAME', inplace = True)
```



## Basic

### Figure
```python
#縣市界線資料---------------------------------------------------------------------------------------------- 
import geopandas as gpd

C_shp = gpd.read_file(r'COUNTY_MOI_1090820.shp')
C_shp.set_index('COUNTYNAME', inplace = True)

#畫圖---------------------------------------------------------------------------------------------------- 
import matplotlib.pyplot as plt

C_shp.plot(figsize=(20,20),cmap = 'Wistia')

plt.tight_layout()
plt.savefig('Taiwan_County.png')
```



<img src="https://i.imgur.com/3umlPDT.png" width = "100%"/>

{{<admonition note "其他顏色">}}

[cmap](https://matplotlib.org/stable/tutorials/colors/colormaps.html)

{{</admonition>}}

## Covid-19 Heatmap

### Covid-19 Taiwan Open Data

```python
def get_covid19_data():
    import urllib.request, json
    import pandas as pd
    import datetime
    
    url = 'https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json'

    with urllib.request.urlopen(url) as jsonfile:
        data = json.loads(jsonfile.read().decode())

    df = pd.DataFrame(data)
    df['確定病例數'] = df['確定病例數'].apply(lambda x:int(x))
    df['個案研判日'] = [datetime.datetime.strptime(d, "%Y%m%d") for d in df['個案研判日']]
    
    return df
```



{{<admonition note "Covid-19 Taiwan Open Data">}}
[地區年齡性別統計表-嚴重特殊傳染性肺炎-依個案研判日統計](https://data.gov.tw/dataset/120711)
{{</admonition>}}

### Figure 1
#### 完整程式碼

```python
#Covid-19 Data-------------------------------------------------------------------------------------------
def get_covid19_data():
    import urllib.request, json
    import pandas as pd
    import datetime
    
    url = 'https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json'

    with urllib.request.urlopen(url) as jsonfile:
        data = json.loads(jsonfile.read().decode())

    df = pd.DataFrame(data)
    df['確定病例數'] = df['確定病例數'].apply(lambda x:int(x))
    df['個案研判日'] = [datetime.datetime.strptime(d, "%Y%m%d") for d in df['個案研判日']]
    
    return df

#畫圖&裁切------------------------------------------------------------------------------------------------
def plot(data, plot_type, column, cmap, file_name):
    h = 100
    w = 100
    if plot_type == 'normal':
        data.plot(figsize=(w,h),cmap = cmap )
    elif plot_type == 'heatmap':
        data.plot(figsize=(w,h),column = column, cmap = cmap)

    plt.savefig(f"Plot_{file_name}.png", bbox_inches='tight')
    return f"Plot_{file_name}.png"

def crop(file_name):
    import cv2
    image = cv2.imread(file_name)
    
    #裁切範圍
    crop_image = image[300:1700, 1300:2500, :]
    
    cv2.imshow("Cropped", crop_image)
    cv2.imwrite(file_name,crop_image)
    cv2.destroyAllWindows()

    from IPython.display import display, Image
    display(Image(filename=file_name))
    
#縣市界線資料---------------------------------------------------------------------------------------------- 
import geopandas as gpd

C_shp = gpd.read_file(r'COUNTY_MOI_1090820.shp')
C_shp.set_index('COUNTYNAME', inplace = True)

import matplotlib.pyplot as plt
plt.ioff()

#地區年齡性別統計表-嚴重特殊傳染性肺炎-依個案研判日統計----------------------------------------------------------
df_GroupByCounty = get_covid19_data().groupby('縣市').sum()
df_GroupByCounty.drop('空值',inplace = True)
df_GroupByCounty.rename(index={'台中市': '臺中市', 
                               '台北市': '臺北市',
                               '台南市': '臺南市'},
                        inplace=True)

##Merge資料表---------------------------------------------------------------------------------------------
C_shp['CName'] = C_shp.index
df_GroupByCounty['cname'] = df_GroupByCounty.index

import numpy as np
C_result = C_shp.merge(df_GroupByCounty, left_on=('CName'), right_on=('cname'), how='left')

C_result['color'] = np.log(C_result['確定病例數'])
C_result['確定病例數'] = C_result['確定病例數'].fillna(0)
C_result['color'] = C_result['color'].fillna(0)

#畫圖----------------------------------------------------------------------------------------------------
p2 = plot(data=C_result, plot_type='heatmap', column='color', cmap='Reds', file_name='Heatmap_Taiwan_COUNTY')
crop(p2)
```

<center><img src="https://i.imgur.com/0yK2tFN.png" width = "50%"/></center>

### [Figure 2](https://hsiangjenli.github.io/html_files/Python%20[1]%20Covid-19%20+%20geopandas-2021-06-07-COUNTY.html)

#### 完整程式碼

```python
#Covid-19 Data-------------------------------------------------------------------------------------------
def get_covid19_data():
    import urllib.request, json
    import pandas as pd
    import datetime
    
    url = 'https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json'

    with urllib.request.urlopen(url) as jsonfile:
        data = json.loads(jsonfile.read().decode())

    df = pd.DataFrame(data)
    df['確定病例數'] = df['確定病例數'].apply(lambda x:int(x))
    df['個案研判日'] = [datetime.datetime.strptime(d, "%Y%m%d") for d in df['個案研判日']]
    
    return df

#縣市界線資料---------------------------------------------------------------------------------------------- 
import geopandas as gpd

C_shp = gpd.read_file(r'COUNTY_MOI_1090820.shp')
C_shp.set_index('COUNTYNAME', inplace = True)

import matplotlib.pyplot as plt
plt.ioff()

#地區年齡性別統計表-嚴重特殊傳染性肺炎-依個案研判日統計----------------------------------------------------------
df_GroupByCounty = get_covid19_data().groupby('縣市').sum()
df_GroupByCounty.drop('空值',inplace = True)
df_GroupByCounty.rename(index={'台中市': '臺中市', 
                               '台北市': '臺北市',
                               '台南市': '臺南市'},
                        inplace=True)

##Merge資料表---------------------------------------------------------------------------------------------
C_shp['CName'] = C_shp.index
df_GroupByCounty['cname'] = df_GroupByCounty.index

import numpy as np
C_result = C_shp.merge(df_GroupByCounty, left_on=('CName'), right_on=('cname'), how='left')

C_result['color'] = np.log(C_result['確定病例數'])
C_result['確定病例數'] = C_result['確定病例數'].fillna(0)
C_result['color'] = C_result['color'].fillna(0)

#畫圖----------------------------------------------------------------------------------------------------
import plotly.express as px
import numpy as np
C_result.index = C_result['CName']

fig = px.choropleth_mapbox(C_result,
                           geojson=C_result['geometry'],
                           locations=C_result.CName,
                           color_continuous_scale="Reds",
                           color=C_result['color'],
                           hover_name='CName',
                           hover_data = {'color':False,
                                         'CName':False,
                                         '確定病例數':True},
                           center={"lat": 23.5, "lon": 121},
                           mapbox_style="open-street-map",
                           zoom=5.5,
                           title = 'Covid-19 Taiwan')

fig.write_html("Python [1] Covid-19 + geopandas-2021-06-07-COUNTY.html")
fig.show()
```

<iframe src="https://hsiangjenli.github.io/html_files/Python [1] Covid-19 + geopandas-2021-06-07-COUNTY.html" height="500" width="100%" style="border:none;"></iframe>

### Figure 3

#### 完整程式碼

```python
#Covid-19 Data-------------------------------------------------------------------------------------------
def get_covid19_data():
    import urllib.request, json
    import pandas as pd
    import datetime
    
    url = 'https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json'

    with urllib.request.urlopen(url) as jsonfile:
        data = json.loads(jsonfile.read().decode())

    df = pd.DataFrame(data)
    df['確定病例數'] = df['確定病例數'].apply(lambda x:int(x))
    df['個案研判日'] = [datetime.datetime.strptime(d, "%Y%m%d") for d in df['個案研判日']]
    
    return df

#畫圖&裁切------------------------------------------------------------------------------------------------
def plot(data, plot_type, column, cmap, file_name):
    h = 100
    w = 100
    if plot_type == 'normal':
        data.plot(figsize=(w,h),cmap = cmap )
    elif plot_type == 'heatmap':
        data.plot(figsize=(w,h),column = column, cmap = cmap)

    plt.savefig(f"Plot_{file_name}.png", bbox_inches='tight')
    return f"Plot_{file_name}.png"

def crop(file_name):
    import cv2
    image = cv2.imread(file_name)
    
    #裁切範圍
    crop_image = image[300:1700, 1300:2500, :]
    
    cv2.imshow("Cropped", crop_image)
    cv2.imwrite(file_name,crop_image)
    cv2.destroyAllWindows()

    from IPython.display import display, Image
    display(Image(filename=file_name))
    
#鄉鎮界線資料---------------------------------------------------------------------------------------------- 
import geopandas as gpd

t_shp = gpd.read_file(r'TOWN_MOI_1100415.shp')
t_shp.set_index('TOWNNAME', inplace = True)

import matplotlib.pyplot as plt
plt.ioff()

#地區年齡性別統計表-嚴重特殊傳染性肺炎-依個案研判日統計----------------------------------------------------------
df_GroupByTOWN = get_covid19_data().groupby('鄉鎮').sum()
df_GroupByTOWN.drop('空值',inplace = True)

##Merge資料表---------------------------------------------------------------------------------------------
t_shp['TName'] = t_shp.index
df_GroupByTOWN['tname'] = df_GroupByTOWN.index

import numpy as np
t_result = t_shp.merge(df_GroupByTOWN, left_on=('TName'), right_on=('tname'), how='left')

t_result['color'] = np.log(t_result['確定病例數'])
t_result['color'] = t_result['color'].fillna(0)
t_result['確定病例數'] = t_result['確定病例數'].fillna(0)

#畫圖----------------------------------------------------------------------------------------------------
p3 = plot(data=t_result, plot_type='heatmap', column='color', cmap='Reds', file_name='Heatmap_Taiwan_TOWN')
crop(p3)
```

<center><img src="https://i.imgur.com/tgsNNnW.png" width = "50%"/></center>



### [Figure 4](https://hsiangjenli.github.io/html_files/Python%20[1]%20Covid-19%20+%20geopandas-2021-06-07-TOWN.html)

#### 完整程式碼

```python
#Covid-19 Data-------------------------------------------------------------------------------------------
def get_covid19_data():
    import urllib.request, json
    import pandas as pd
    import datetime
    
    url = 'https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json'

    with urllib.request.urlopen(url) as jsonfile:
        data = json.loads(jsonfile.read().decode())

    df = pd.DataFrame(data)
    df['確定病例數'] = df['確定病例數'].apply(lambda x:int(x))
    df['個案研判日'] = [datetime.datetime.strptime(d, "%Y%m%d") for d in df['個案研判日']]
    
    return df
    
#鄉鎮界線資料---------------------------------------------------------------------------------------------- 
import geopandas as gpd

t_shp = gpd.read_file(r'TOWN_MOI_1100415.shp')
t_shp.set_index('TOWNNAME', inplace = True)

import matplotlib.pyplot as plt
plt.ioff()

#地區年齡性別統計表-嚴重特殊傳染性肺炎-依個案研判日統計----------------------------------------------------------
df_GroupByTOWN = get_covid19_data().groupby('鄉鎮').sum()
df_GroupByTOWN.drop('空值',inplace = True)

##Merge資料表---------------------------------------------------------------------------------------------
t_shp['TName'] = t_shp.index
df_GroupByTOWN['tname'] = df_GroupByTOWN.index

import numpy as np
t_result = t_shp.merge(df_GroupByTOWN, left_on=('TName'), right_on=('tname'), how='left')

t_result['color'] = np.log(t_result['確定病例數'])
t_result['color'] = t_result['color'].fillna(0)
t_result['確定病例數'] = t_result['確定病例數'].fillna(0)

#畫圖----------------------------------------------------------------------------------------------------
import plotly.express as px
import numpy as np
t_result['Name'] = t_result['COUNTYNAME']+' '+t_result['TName']
t_result.index = t_result['Name']

fig = px.choropleth_mapbox(t_result,
                           geojson=t_result['geometry'],
                           locations=t_result.Name,
                           color_continuous_scale="Reds",
                           color=t_result['color'],
                           hover_name='Name',
                           hover_data = {'color':False,
                                         'Name':False,
                                         '確定病例數':True},
                           center={"lat": 23.5, "lon": 121},
                           mapbox_style="open-street-map",
                           zoom=5.5,
                           title = 'Covid-19 Taiwan')

fig.write_html("Python [1] Covid-19 + geopandas-2021-06-07-TOWN.html")
```
<iframe src="https://hsiangjenli.github.io/html_files/Python [1] Covid-19 + geopandas-2021-06-07-TOWN.html" height="500" width="100%" style="border:none;"></iframe>


{{<admonition note "choropleth_mapbox">}}

1. [plotly.express.choropleth_mapbox](https://plotly.github.io/plotly.py-docs/generated/plotly.express.html#module-plotly.express)
2. [Built-in Continuous Color Scales in Python](https://plotly.com/python/builtin-colorscales/)

{{</admonition>}}

{{<admonition info "參考資料">}}

[直轄市、縣市界線(TWD97經緯度)](https://data.gov.tw/dataset/7442)

[鄉鎮市區界線(TWD97經緯度)](https://data.gov.tw/dataset/7441)

[Three Ways to Plot Choropleth Map Using Python](https://medium.com/geekculture/three-ways-to-plot-choropleth-map-using-python-f53799a3e623)

[Download GADM data (version 3.6)](https://gadm.org/download_country_v3.html)

[Python 練習: 以地圖顯示癌症死因資料(II)](http://viml.nchc.org.tw/blog/paper_info.php?CLASS_ID=1&SUB_ID=1&PAPER_ID=687)

[Python 地圖視覺化 - 使用 Folium](https://blog.yeshuanova.com/2017/10/python-visulization-folium/)

[install geopandas](https://geopandas.org/getting_started/install.html)

[Pandas Merging 101](https://stackoverflow.com/questions/53645882/pandas-merging-101)https://blog.csdn.net/Summer_Horse/article/details/113488809)
{{</admonition>}}






