# Sublime

<!--more-->

<h1 style = "font-family: Verdana;font-weight: 600;">Sublime Text</h1>

## Buildpack
### Base
{{<admonition note "">}}
<center><img src="https://i.imgur.com/fKacyJd.png" width = "90%"/>

{{<mermaid>}}
  graph LR
  Tools --> Build_System --> New_Build_System;
{{</mermaid>}}

<img src="https://i.imgur.com/Mp1uOJ0.png" width = "40%" align = "center"/>
</center>
<br>

```language
{
    "cmd": ["C:/Anaconda3/python.exe", "-u", "$file"],
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "selector": "source.python"
}
```

{{</admonition>}}
### 虛擬環境

{{<admonition note "tfvenv.sublime-build">}}

<center><img src="https://i.imgur.com/fRPgq9E.png" width = "40%"/></center>

```cmd
{
    "cmd": ["C:/Anaconda3/envs/tfvenv/python.exe", "-u", "$file"],
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "selector": "source.python"
}
```
{{</admonition>}}
{{<admonition danger "注意">}}
  副檔名必須是`.sublime-build`
{{</admonition>}}

## Shortcut
### 執行 ctrl + B
<center><kbd style = "font-size: x-large;">ctrl</kbd> + <kbd style = "font-size: x-large;">B</kbd></center>
{{<admonition danger "注意">}}
  用ctrl + B 執行，下面的視窗是不能互動的喔。

{{</admonition>}}

### 取消執行 ctrl + break
<center><kbd style = "font-size: x-large;">ctrl</kbd> + <kbd style = "font-size: x-large;">break</kbd></center>

### 更改 shortcut
{{<admonition note "更改預設快捷鍵">}}
<center><img src="https://i.imgur.com/KC1476l.png" width = "80%"/>
<h3><kbd style = "font-size: x-large;">ctrl</kbd> + <kbd style = "font-size: x-large;">break</kbd> &nbsp;&nbsp;→&nbsp;&nbsp; <kbd style = "font-size: x-large;">shift</kbd> + <kbd style = "font-size: x-large;">ctrl</kbd> + <kbd style = "font-size: x-large;">c</kbd></h3>
</center>

{{<mermaid>}}
  graph LR
  Preferences --> Key_Bindings --> 貼到右邊的視窗
{{</mermaid>}}

```
[
  { "keys": 
    ["shift+ctrl+c"], 
    "command": 
    "cancel_build" 
  }
]
```
{{</admonition>}}
### Show Console ``ctrl + ` ``
{{<admonition note "">}}
<center><img src="https://i.imgur.com/hsfH7CB.png" width = "80%"/></center>

{{<mermaid>}}
  graph LR
  View --> Show_Console;
{{</mermaid>}}

<center><img src="https://i.imgur.com/pbuNFB0.png" width = "100%"/></center>
{{</admonition>}}
