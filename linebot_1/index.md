# Linebot_1

<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

# Line Bot [1] ｜基本｜回聲機器人

## 事前準備

>### 1. Line 帳號
>### 2. [Heroku](https://dashboard.heroku.com/apps) 帳號
>### 3. [GitHub](https://github.com/) 帳號
>### 4. Python

## [Line Developer](https://developers.line.biz/en/?status=success)
### 1. Log in with LINE account

<img src="https://i.imgur.com/tAE3iyT.jpg" width = "100%"/>

### 2. Create
<img src="https://i.imgur.com/GvaRaDe.jpg" width = "100%"/>
<img src="https://i.imgur.com/7gBn4Ua.jpg" width = "100%"/>
<img src="https://i.imgur.com/uR539EU.jpg" width = "100%"/>

### 3. 須記下

<blockquote>
<h3>1. Basic Setting / Your user ID </h3>
<h3>2. Basic Setting / Channel secret </h3>
<h3>3. Messaging API / Channel access token (long-lived) / 需先點issue /</h3>
</blockquote>
<img src="https://i.imgur.com/wJOPcFr.jpg" width = "100%"/>
<img src="https://i.imgur.com/kaCDGNf.jpg" width = "100%"/>

### 4. 先將**Auto-reply messages**關掉
### 5. **GitHub**建立**New repository** 

<blockquote>

<h3>1. 必須選Private</h3> 
<h3>2. 選Add a README file</h3>

</blockquote>
<img src="https://i.imgur.com/aLsMRTv.jpg" width = "100%"/>
<img src="https://i.imgur.com/1NX9doJ.jpg" width = "100%"/>

### 6. Upload 3 files to GitHub
>參考資料：<br>
>[打造聊天機器人，商管人也看得懂的最詳細步驟【2020年最新更新版本】](https://medium.com/%E8%AA%A4%E9%97%96%E6%95%B8%E6%93%9A%E5%8F%A2%E6%9E%97%E7%9A%84%E5%95%86%E7%AE%A1%E4%BA%BAzino/%E6%89%93%E9%80%A0%E8%81%8A%E5%A4%A9%E6%A9%9F%E5%99%A8%E4%BA%BA-%E5%95%86%E7%AE%A1%E4%BA%BA%E4%B9%9F%E7%9C%8B%E5%BE%97%E6%87%82%E7%9A%84%E6%9C%80%E8%A9%B3%E7%B4%B0%E6%AD%A5%E9%A9%9F-2020%E5%B9%B4%E6%9C%80%E6%96%B0%E6%9B%B4%E6%96%B0%E7%89%88%E6%9C%AC-d8e8c673e77c)<br>
> [Linebot-Basic](https://github.com/rifleak74/MarketDataScience/tree/master/%E8%A1%8C%E9%8A%B7%E5%AF%A6%E7%94%A8%E5%B7%A5%E5%85%B7/Linebot-Basic) <br>

<blockquote>
<h3>1. Procfile</h3>
<h3>2. app.py</h3> 
<h3>3. requirements.txt</h3> 
</blockquote>

### 7. Heroku建立APP

<img src="https://i.imgur.com/KksU3XL.jpg" width = "100%"/>

### 8. Heroku APP	
<blockquote>
<h3>1. Settings / Buildpacks / heroku / python</h3>	

<h3>2. Deploy / Connected to GitHub / 輸入剛剛在GitHub創立的repository / 點Depoly Branch</h3>
</blockquote>
<img src="https://i.imgur.com/e1DcCrE.jpg" width = "100%"/>
<img src="https://i.imgur.com/TlEBxp2.jpg" width = "100%"/>

### 9. 將Line Bot與Heroku連接

<blockquote>
<h4>Messaging API / Webhook settings / Webhook URL / Vertify（出現Error沒關係）/ Use webhook 打開</h4>
</blockquote>
<h4 >1. Webhook URL =<code>https://{Heroku.APP.name}.herokuapp.com/callback</code></h4>
<h4>2. 或者/Settings/Domains/</h4>

### 10. 測試Line Bot 是否有回復
<blockquote>
<h4>（有時候Heroku APP 會睡著，記得打開在測試）</h4>
</blockquote>
