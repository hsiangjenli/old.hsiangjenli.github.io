# Python [2] 安裝tensorflow-gpu

<!--more-->

<div style="text-align: right" Icons made by <a href="" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

# 安裝Tensorflow（MX150）

## [CUDA](https://developer.nvidia.com/cuda-toolkit-archive)
{{<admonition note "cuda_11.4.0_471.11_win10">}}
<center><img src="https://i.imgur.com/acqcRkr.png" width = "50%"/><img src="https://i.imgur.com/JSQoyRX.png" width = "50%"/></center>
{{</admonition>}}


### 測試是否安裝成功 
```shell
nvcc -V
```
<center><img src="https://i.imgur.com/AUeyAOQ.png" width = "70%"/></center>



## [cuDNN](https://developer.nvidia.com/rdp/cudnn-archive)

### [NVIDA CUDNN DOCUMENTATION](https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html#install-windows)
{{<admonition note "cudnn-11.3-windows-x64-v8.2.1.32">}}




<center><img src="https://i.imgur.com/DiwOMxl.png" width = "100%"/></center>
<center><img src="https://i.imgur.com/72NNTbE.png" width = "100%"/></center>
{{</admonition>}}

## 安裝 tensorflow-gpu
### 建立虛擬環境
```python
conda create --name tfvenv python=3.7
```
### 啟動虛擬環境
```python
activate tfvenv
```
### 安裝
```python
conda install tensorflow-gpu=2.0
```
### 測試是否安裝成功
```python
python
from tensorflow.python.client import device_lib
print(device_lib.list_local_devices())
```
<center><img src="https://i.imgur.com/Ms8o054.png" width = "100%"/></center>

## jupyter lab 虛擬環境捷徑

### 開啟 Anaconda Navigator
#### 選擇tfvenv & 安裝jupyter lab
<center><img src="https://i.imgur.com/GpTyTto.png" width = "70%"/></center>

#### jupyter notebook 捷徑
<center><img src="https://i.imgur.com/CGemDs4.png" width = "70%"/></center>

#### 修改target


{{<admonition note "更改 target">}}

<center><img src="https://i.imgur.com/YNZwwHX.png" width = "50%"/></center><code>
C:\Anaconda3\python.exe C:\Anaconda3\cwp.py C:\Anaconda3\envs\tfvenv C:\Anaconda3\envs\tfvenv\python.exe C:\Anaconda3\envs\tfvenv\Scripts\
<b><font color=#222222>jupyter-notebook-script.py </font></b>"<b><font color=#0000bb>%USERPROFILE%/"</font></b>
</code>

</p>
<code>
C:\Anaconda3\python.exe C:\Anaconda3\cwp.py C:\Anaconda3\envs\tfvenv C:\Anaconda3\envs\tfvenv\python.exe C:\Anaconda3\envs\tfvenv\Scripts\
<b><font color=#222222>jupyter-lab-script.py </font></b>"<b><font color=#0000bb>d:/jupyterlab"</font></b>
</code>

{{<admonition danger "注意">}}
藍色的部分為jupyter lab開啟的資料夾路徑
{{</admonition>}}
{{</admonition>}}

{{<admonition info "參考資料">}}
[在Nvidia MX150的Win10安裝CUDA Toolkit, cuDNN, Python(anaconda), and Tensorflow](https://medium.com/@johnnyliao/%E5%9C%A8nvidia-mx150%E7%9A%84win10%E5%AE%89%E8%A3%9Dcuda-toolkit-cudnn-python-anaconda-and-tensorflow-91d4c447b60e)

[手把手教學快速建置開發AI的環境(WIN10、Anaconda(Python, Tensorflow, CUDA, cuDNN)、Pycharm](https://www.youtube.com/watch?v=qLjw_EtqmCs)

[Win10 安裝 CUDA、cuDNN 教學](https://medium.com/ching-i/win10-%E5%AE%89%E8%A3%9D-cuda-cudnn-%E6%95%99%E5%AD%B8-c617b3b76deb)

{{</admonition>}}
