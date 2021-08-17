# Kaggle [0]

<!--more-->
<div style = " text-align : right;"Icons made by ><a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

## Table

|                Datasets                 |    Date    | Public Score |
| :-------------------------------------: | :--------: | :----------: |
|               **Titanic**               | 2021-07-23 |    0.7655    |
| **Web Traffic Time Series Forecasting** |            |              |

### Details

<div class="w3-container" style = "font-family: Verdana;">
  <div class="w3-light-grey" style="padding:1px;text-align: center;">

#### Titanic      
  </div>

  <div class="w3-bar w3-light-grey">
    <button class="w3-bar-item w3-button tablink w3-grey" onclick="openTab(event,'2021-07-23')">2021-07-23</button>
    <button class="w3-bar-item w3-button tablink" onclick="openTab(event,'Paris')">Paris</button>
    <button class="w3-bar-item w3-button tablink" onclick="openTab(event,'Tokyo')">Tokyo</button>
  </div>


  <div id="2021-07-23" class="w3-container w3-border sdate">
    <br>
    <div class="w3-tag w3-round" style="padding:10px; background-color:#2266AA;">
        # Public Score : 0.76
    </div><br>
      <h4>分析方式</h4>
      <h4>檢討</h4>
      <h4>心得</h4>

{{<admonition info "參考資料">}}
1. [Fatma Kurşun (2021) Titanic (Classification Regression)](https://www.kaggle.com/fatmakursun/titanic-classification-models)
{{</admonition>}}
  </div>


  <div id="Paris" class="w3-container w3-border sdate" style="display:none;">
    <h2>Paris</h2>
    <p>Paris is the capital of France.</p> 
  </div>

  <div id="Tokyo" class="w3-container w3-border sdate" style="display:none">
    <h2>Tokyo</h2>
    <p>Tokyo is the capital of Japan.</p>
  </div>

</div><br>


<div class="w3-container" style = "font-family: 'Verdana">
  <div class="w3-light-grey" style="padding:1px;text-align: center;">

#### Web Traffic Time Series Forecasting      
  </div>

  <div class="w3-bar w3-light-grey">
    <button class="w3-bar-item w3-button tablink w3-grey" onclick="openTab(event,'2021-07-26')">2021-07-26</button>
    <button class="w3-bar-item w3-button tablink" onclick="openTab(event,'Paris')">Paris</button>
    <button class="w3-bar-item w3-button tablink" onclick="openTab(event,'Tokyo')">Tokyo</button>
  </div>


  <div id="2021-07-26" class="w3-container w3-border sdate">
    <br>
    <div class="w3-tag w3-round" style="padding:10px; background-color:#2266AA;">
        # Public Score : 
    </div><br>
      <h4>分析方式</h4>
      <h4>特殊名詞</h4>
<div>

1. Fast Fourier Transform
1. ARIMA
1. Kalman filters
1. 滯後特徵（lagged features）
1. 前視偏差
</div>
      <h4>學習重點</h4>
<div>

1. Fast Fourier Transform
   fft amplitude $\to$ magtitude
   $\sqrt{x^2+y^2}$
1. ARIMA
</div>
      <h4>檢討</h4>
      <h4>心得</h4>

{{<admonition info "參考資料">}}
1. [Jannes Klaas (2018) EDA & Classic methods](https://nbviewer.jupyter.org/github/PacktPublishing/Machine-Learning-for-Finance/blob/master/4.1%20EDA%20%26%20Classic%20methods.ipynb)
1. [MuonNeutrino (2017) Wikipedia Traffic Data Exploration](https://www.kaggle.com/muonneutrino/wikipedia-traffic-data-exploration)
1. [alan23273850（2019），從傅立葉轉換到數位訊號處理](https://alan23273850.gitbook.io/signals-and-systems/)
1. [韩昊（2014），傅里葉分析之掐死教程（完整版）更新於2014.06.06](https://zhuanlan.zhihu.com/p/19763358)
1. [@sysprog（2018），圖解傅立葉分析](https://hackmd.io/@sysprog/fourier-transform)
1. [3Blue1Brown (2018) But what is the Fourier Transform? A visual introduction.](https://www.youtube.com/watch?v=spUNpyF58BY)
{{</admonition>}}

  </div>


  <div id="Paris" class="w3-container w3-border sdate" style="display:none;">
    <h2>Paris</h2>
    <p>Paris is the capital of France.</p> 
  </div>

  <div id="Tokyo" class="w3-container w3-border sdate" style="display:none">
    <h2>Tokyo</h2>
    <p>Tokyo is the capital of Japan.</p>
  </div>

</div>

## Gantt
### Kaggle Competition



{{<mermaid>}}
gantt
dateFormat YYYY-MM-DD

excludes    weekends

title 2021 July
todayMarker off

section Titanic
    Public Score：0.76555		:		done,	t1,	2021-07-22,	2d

section Web Traffic Time Series Forecasting
	Public Score：None			  :		activate,	2021-07-23,	2021-08-01

{{</mermaid>}}

























































<script>
function openTab(evt, submit_date) {
  var i, x, tablinks;
  x = document.getElementsByClassName("sdate");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-grey", "");
  }
  document.getElementById(submit_date).style.display = "block";
  evt.currentTarget.className += " w3-grey";
}
</script>

