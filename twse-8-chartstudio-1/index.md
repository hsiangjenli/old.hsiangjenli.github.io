# TWSE [8] plotly | Chart Studio | 1

<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

# [plotly | Chart Studio](https://chart-studio.plotly.com/feed/#/)
## 每日收盤行情

### 1 註冊帳號
![](https://i.imgur.com/tUGwuzY.jpg)
### 2 點選SQL Query
![](https://i.imgur.com/HtlvMDO.jpg)
### 3 下載Falcon SQL Client
![](https://i.imgur.com/11zmQaS.jpg)
### 4 登入SQL
> 輸入MySQL的帳號, 密碼

![](https://i.imgur.com/cm55Xpp.jpg)
### 5 點選QUERY
> 確認有確實讀到資料庫

![](https://i.imgur.com/kIRXJCA.jpg)
### 6 點選**SCHEDULE**
> 1 點選 Connect to / Chart Studio Enterprise / <br>
> 2 Your Chart Studio Enterprise Domain / **https://api.plot.ly** /

![](https://i.imgur.com/uqwoSYj.jpg)
### 7 Authorize
![](https://i.imgur.com/PPzYfbw.jpg)
### 8 點選QUERY
```sql
SELECT `日期`,`成交股數`,`開盤價`,`最高價`,`最低價`,`收盤價`,`color`
FROM `每日收盤行情` 
WHERE `證券代號` = 2330
```
![](https://i.imgur.com/NCPN7pA.jpg)
### 9 選擇要多久跑一次
![](https://i.imgur.com/NOi9HkA.jpg)
### 10 點選Live DataSet
![](https://i.imgur.com/3tk0jJk.jpg)


<iframe width="100%" height="600" frameborder="0" scrolling="no" src="//plotly.com/~hsiangjenli/15.embed?share_key=FaqYt8fEA36u4olYzePnwm"></iframe>
