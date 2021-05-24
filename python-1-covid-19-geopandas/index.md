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
import geopandas as gpd
shp = gpd.read_file(r'COUNTY_MOI_1090820.shp')
```
<img src="https://i.imgur.com/Vrxnazk.jpg" width = "100%"/>

## Basic
### Figure
```python
import matplotlib.pyplot as plt

shp.plot(figsize=(20,20),cmap = 'Wistia')

plt.tight_layout()
plt.savefig('taiwan.png')
```

{{<admonition note "其他顏色">}}

[cmap](https://matplotlib.org/stable/tutorials/colors/colormaps.html)

{{</admonition>}}

<img src="https://i.imgur.com/3umlPDT.png" width = "100%"/>


## Covid-19 Heatmap
### Covid-19 Taiwan Open Data

{{<admonition note "Covid-19 Taiwan Open Data">}}
[地區年齡性別統計表-嚴重特殊傳染性肺炎-依個案研判日統計](https://data.gov.tw/dataset/120711)
{{</admonition>}}

### Figure 1
#### 完整程式碼

```python
#畫圖&裁切------------------------------------------------------------------------------------------------
def plot(data, plot_type, column, cmap, file_name):
    fig = plt.figure(figsize=(100, 100))
    if plot_type == 'normal':
        data.plot(figsize=(100,100),cmap = cmap )
    elif plot_type == 'heatmap':
        data.plot(figsize=(100,100),column = column, cmap = cmap)

    plt.savefig(f"Plot_{file_name}.png", bbox_inches='tight')
    return f"Plot_{file_name}.png"
def crop(file_name):
    import cv2
    image = cv2.imread(file_name)
    
    #裁切範圍
    crop_image = image[300:1700, 1800:2500, :]
    
    cv2.imshow("Cropped", crop_image)
    cv2.imwrite(file_name,crop_image)
    cv2.destroyAllWindows()

    from IPython.display import display, Image
    display(Image(filename=file_name))
    
#縣市界線資料---------------------------------------------------------------------------------------------- 
import geopandas as gpd

shp = gpd.read_file(r'COUNTY_MOI_1090820.shp')
shp.set_index('COUNTYNAME', inplace = True)

import matplotlib.pyplot as plt
plt.ioff()

#地區年齡性別統計表-嚴重特殊傳染性肺炎-依個案研判日統計----------------------------------------------------------
import urllib.request, json

url = 'https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json'
with urllib.request.urlopen(url) as jsonfile:
    data = json.loads(jsonfile.read().decode())

##整理統計表----------------------------------------------------------------------------------------------
import pandas as pd
import datetime

df = pd.DataFrame(data)
df['確定病例數'] = df['確定病例數'].apply(lambda x:int(x))
df['個案研判日'] = [datetime.datetime.strptime(d, "%Y/%m/%d") for d in df['個案研判日']]
df_GroupByCounty = df.groupby(['縣市']).sum()
df_GroupByCounty.drop('空值',inplace = True)
df_GroupByCounty.rename(index={'台中市': '臺中市', 
                               '台北市': '臺北市',
                               '台南市': '臺南市'},
                        inplace=True)

##Merge資料表--------------------------------------------------------------------------------------------- 
shp['CName'] = shp.index
df_GroupByCounty['cname'] = df_GroupByCounty.index
result =shp.merge(df_GroupByCounty, left_on=('CName'), right_on=('cname'))

#畫圖----------------------------------------------------------------------------------------------------
p2 = plot(data = result, plot_type = 'heatmap', column = '確定病例數', cmap = 'Reds', file_name = 'Heatmap_Taiwan')
crop(p2)
```

<center><img src="https://i.imgur.com/dY6FzYa.png" width = "50%"/></center>

### Figure 2

#### 完整程式碼

```python
#縣市界線資料---------------------------------------------------------------------------------------------- 
import geopandas as gpd

town_shp = gpd.read_file(r'COUNTY_MOI_1090820.shp')
town_shp.set_index('COUNTYNAME', inplace = True)

#地區年齡性別統計表-嚴重特殊傳染性肺炎-依個案研判日統計----------------------------------------------------------
import urllib.request, json

url = 'https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json'

with urllib.request.urlopen(url) as jsonfile:
    data = json.loads(jsonfile.read().decode())

##整理統計表----------------------------------------------------------------------------------------------
import pandas as pd
import datetime

df = pd.DataFrame(data)
df['確定病例數'] = df['確定病例數'].apply(lambda x:int(x))
df['個案研判日'] = [datetime.datetime.strptime(d, "%Y/%m/%d") for d in df['個案研判日']]
df_GroupByCounty = df.groupby(['縣市']).sum()
df_GroupByCounty.drop('空值',inplace = True)
df_GroupByCounty.rename(index={'台中市': '臺中市', 
                               '台北市': '臺北市',
                               '台南市': '臺南市'},
                        inplace=True)

##Merge資料表---------------------------------------------------------------------------------------------
town_shp['CName'] = town_shp.index
df_GroupByCounty['cname'] = df_GroupByCounty.index

result =town_shp.merge(df_GroupByCounty, left_on=('CName'), right_on=('cname'))
result = result.set_index('CName')

#畫圖----------------------------------------------------------------------------------------------------
import plotly.express as px

fig = px.choropleth_mapbox(result,
                           geojson=result['geometry'],
                           locations=result.index,
                           color_continuous_scale="Reds",
                           color=result['確定病例數'],
                           center={"lat": 23.5, "lon": 121},
                           mapbox_style="open-street-map",
                           zoom=6,
                           title = 'Covid-19 Taiwan')
fig.show()
fig.write_html("Python [1] Covid-19 + geopandas-2021-05-24.html")
```

<iframe src="https://hsiangjenli.github.io/html_files/Python%20[1]%20Covid-19%20+%20geopandas-2021-05-24.html" height="500" width="100%" style="border:none;"></iframe>

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

[Geopandas Installation— the easy way for Windows!](https://towardsdatascience.com/geopandas-installation-the-easy-way-for-windows-31a666b3610f)

[Python打开shp文件报错：Set SHAPE_RESTORE_SHX config option to YES to restore or create it.](https://blog.csdn.net/Summer_Horse/article/details/113488809)
{{</admonition>}}






