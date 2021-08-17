# Kaggle [1] Synthetic Financial Datasets For Fraud Detection 

<!--more-->

<div style="text-align: right" Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<h1 style = "font-family: Verdana;font-weight: 600;">Synthetic Financial Datasets For Fraud Detection
</h1>


{{<admonition bug "statement">}}

單純紀錄個人學習過程

{{</admonition>}}


{{<admonition info "參考資料">}}

[Machine-Learning-for-Finance](https://nbviewer.jupyter.org/github/PacktPublishing/Machine-Learning-for-Finance/blob/master/2%20structured%20data.ipynb)

{{</admonition>}}

## pd.read_csv

```python
import pandas as pd

df = pd.read_csv('Data/PS_20174392719_1491204439457_log.csv')
df = df.rename(columns={'oldbalanceOrg':'oldBalanceOrig', 
                        'newbalanceOrig':'newBalanceOrig',
                        'oldbalanceDest':'oldBalanceDest', 
                        'newbalanceDest':'newBalanceDest'})
```

## 觀察資料

| <center>step</br>時間</center> | <center>type</br>交易類型</center>     |  <center>amount</br>金額</center> | <center>nameOrig</br>帳戶擁有者</center>    | <center>oldBalanceOrig</br>舊餘額</center> | <center>newBalanceOrig</br>新餘額</center> | <center>nameDest/目標帳戶</center>   | <center>oldBalanceDest</br>目標帳戶舊餘額</center> | <center>newBalanceDest</br>目標帳戶新餘額</center> | <center>isFraud</br>是否為詐騙</center> | <center>isFlaggedFraud</br>是否被標記為詐騙</center> |
| -------: | :------- | ------: | :---------- | -------------: | -------------: | :---------- | -------------: | -------------: | ------: | -------------: |
|        1 | PAYMENT  | 9839.64 | C1231006815 |         170136 |         160296 | M1979787155 |              0 |              0 |       0 |              0 |
|        1 | PAYMENT  | 1864.28 | C1666544295 |          21249 |        19384.7 | M2044282225 |              0 |              0 |       0 |              0 |
|        1 | TRANSFER |     181 | C1305486145 |            181 |              0 | C553264065  |              0 |              0 |       1 |              0 |
|        1 | CASH_OUT |     181 | C840083671  |            181 |              0 | C38997010   |          21182 |              0 |       1 |              0 |
|        1 | PAYMENT  | 11668.1 | C2048537720 |          41554 |        29885.9 | M1230701703 |              0 |              0 |       0 |              0 |


### 檢查資料是否有缺失值

```python
import matplotlib.pyplot as plt
import seaborn as sns
plt.rcParams.update({'font.size': 12})

fig = plt.subplots(figsize=(20,5))
ax = sns.heatmap(df.isnull(),yticklabels=False,cbar=False,cmap='Reds')
plt.savefig("Image/Chapter_2_缺失值.png",bbox_inches='tight')
```

<center><img src="https://i.imgur.com/V4NgAcK.png" width = "100%"/></center>

### 交易的類型
```python
df.type.drop_duplicates().values
```

### 詐騙分布在哪些交易

```python
df_GroupByType = df.groupby(['isFraud','type']).size().unstack()

plt.figure(figsize=(20, 5))
ax = sns.heatmap(df_GroupByType,cmap = 'Reds', annot=True,fmt=',')
plt.savefig("Image/Chapter_2_詐騙的種類.png",bbox_inches='tight')
```

<center><img src="https://i.imgur.com/1SzwgGV.png" width = "100%"/></center>

```python
fraud_types = df.loc[df.isFraud == 1].type.drop_duplicates().values
```
### 計算詐騙金額的平均數

```python
for fraud_type in fraud_types:
    amount_median = df.loc[(df.isFraud == 1) & (df.type == fraud_type)].amount.median()
    describe = df.loc[(df.isFraud == 1) & (df.type == fraud_type)][['amount', 'oldBalanceOrig','newBalanceOrig','oldBalanceDest','newBalanceDest']].describe()
    print(describe)
    print(f'TYPE: {fraud_type}, AMOUNT MEDIAN: {amount_median}')
```
**TRANSFER**
|       |           amount |   oldBalanceOrig |   newBalanceOrig |   oldBalanceDest |   newBalanceDest |
|:------|-----------------:|-----------------:|-----------------:|-----------------:|-----------------:|
| count |   4097           |   4097           |   4097           |   4097           |   4097           |
| mean  |      1.48089e+06 |      1.84637e+06 | 385605           |   1073.38        |   3981.41        |
| std   |      2.41489e+06 |      4.40416e+06 |      2.76984e+06 |  39961           |  79207.7         |
| min   |     63.8         |      0           |      0           |      0           |      0           |
| 25%   | 128418           | 127564           |      0           |      0           |      0           |
| 50%   | 445706           | 444899           |      0           |      0           |      0           |
| 75%   |      1.53499e+06 |      1.53499e+06 |      0           |      0           |      0           |
| max   |      1e+07       |      5.9585e+07  |      4.9585e+07  |      2.12234e+06 |      3.21768e+06 |

**CASH_OUT**

|       |           amount |   oldBalanceOrig |   newBalanceOrig |   oldBalanceDest |   newBalanceDest |
|:------|-----------------:|-----------------:|-----------------:|-----------------:|-----------------:|
| count |   4116           |   4116           |        4116      |   4116           |   4116           |
| mean  |      1.4551e+06  |      1.45387e+06 |          72.5869 |      1.08492e+06 |      2.54954e+06 |
| std   |      2.39384e+06 |      2.39451e+06 |        4656.89   |      4.65048e+06 |      5.22029e+06 |
| min   |      0           |      0           |           0      |      0           |      0           |
| 25%   | 125464           | 123231           |           0      |      0           | 356281           |
| 50%   | 435517           | 433678           |           0      | 144970           |      1.05083e+06 |
| 75%   |      1.50076e+06 |      1.50076e+06 |           0      | 794711           |      3.0138e+06  |
| max   |      1e+07       |      1e+07       |      298768      |      2.36231e+08 |      2.36726e+08 |

### 將未發生詐騙的交易行為去除

```python
df = df[(df.type == 'TRANSFER') | (df.type == 'CASH_OUT')]
```

## 簡易預測模型（行為假設）

### type = 'TRANSFER' & amount > 200000

> 假設交易為**轉帳**，且交易金額大於**200000**會是詐騙

```python
df['Fraud_Heuristic'] = np.where(((df['type'] == 'TRANSFER') & 
                                  (df['amount'] > 200000)),1,0)
```

#### 檢測準確度

##### F1 Score

||||
| :--: | :--: | :--: |
|      | 預測陰性 neg_pred | 預測陽性 pos_pred |
| 實際陰性 neg_true | **真陰性 TN** | 假陽性 FP |
| 實際陽性 pos_true | 假陰性 FN | **真陽性 TP** |

{{<admonition note "F1 Score 使用原因">}}

1. F1 Score 為[調和平均數](https://zh.wikipedia.org/wiki/%E8%B0%83%E5%92%8C%E5%B9%B3%E5%9D%87%E6%95%B0#:~:text=%E8%B0%83%E5%92%8C%E5%B9%B3%E5%9D%87%E6%95%B0%EF%BC%88%E8%8B%B1%E8%AA%9E%EF%BC%9AHarmonic,%E8%A8%88%E7%AE%97%E5%B9%B3%E5%9D%87%E9%80%9F%E7%8E%87%E6%99%82%E4%BD%BF%E7%94%A8%E3%80%82)的一種

2. 當資料分布差異很大的時候（偏斜分布 *skewed distribution*）

	ex: 發生詐騙的數量一定比實際發生的交易還要少非常多（1 : 9999）。如果這時候我們的模型完全沒有預測出詐騙，直接輸出所有的交易都是真實的。該模型的準確率仍有99.99%的準確率

### $$F_{1} = 2\times \frac{precision\times recall}{precision + recall}$$

### [ $$= \frac{2}{recall^{-1}+precision^{-1}}$$](https://en.wikipedia.org/wiki/F-score)

|$$Precision$$|$$recall$$|
| :--: | :--: |
|  $$\frac{TP}{TP+\color{red}FP}$$  | $$\frac{TP}{TP+\color{red}FN}$$ |
|所有預測陽性正確的比例| 所有陽性正確的比例 |
|預測準確度|到底預測出多少|
|$$\frac{預測陽性}{所有\color{red}預測陽性} = \frac{TP}{pos\\_pred}$$| $$\frac{預測陽性}{所有\color{red}實際陽性} = \frac{TP}{pos\\_true}$$ |

{{</admonition>}}

###### 方法一

```python
def precision_recall(y_true, y_pred):
    tp = np.count_nonzero(np.where((y_true == 1)&(y_pred == 1)))
    pos_pred = np.count_nonzero(np.where(y_pred == 1))
    pos_true = np.count_nonzero(np.where(y_true == 1))
    precision = tp/pos_pred
    recall = tp/pos_true
    return precision, recall
def f1_Score(precision, recall):
    return 2/(precision**(-1)+recall**(-1))
```

```python
precision, recall = precision_recall(y_pred=df['Fraud_Heuristic'],y_true=df['isFraud'])
f1_Score(precision, recall)
```

###### 方法二

```python
from sklearn.metrics import f1_score

f1_score(y_pred=df['Fraud_Heuristic'],y_true=df['isFraud'])
```

##### 混淆矩陣

```python
from sklearn.metrics import confusion_matrix

cm = confusion_matrix(y_pred=df['Fraud_Heuristic'],y_true=df['isFraud'])
```

```python
def plot_confusion_matrix(cm,target_names,plot_name,title='Confusion matrix'):
    
    plt.figure(figsize=(8, 6))
    
    
    
    ax = sns.heatmap(cm,cmap = 'Reds',square = True, annot=True,fmt=',')
    
    plt.title(title)
    
    tick_marks = [0.45,1.4]
    plt.xticks(tick_marks, target_names)
    plt.yticks(tick_marks, target_names, rotation=0)
    
    
    accuracy = np.trace(cm) / float(np.sum(cm))
    misclass = 1 - accuracy
    
    plt.ylabel('True label')
    plt.xlabel('Predicted label\naccuracy={:0.4f}; misclass={:0.4f}'.format(accuracy, misclass))        
    plt.savefig(f'Image/Chapter_2_{plot_name}.png',bbox_inches='tight')
```

```python
import seaborn as sns
import matplotlib.pyplot as plt

plot_confusion_matrix(cm,['Genuine','Fraud'],title='Confusion matrix',plot_name='confusion_matrix')
```

<center><img src="https://i.imgur.com/E1Vjk6A.png" width = "50%"/></center>

### 不同交易時間（時）

```python
df['hour'] = df['step'] % 24
frauds = []
genuine = []
for i in range(24):
    f = len(df[(df['hour'] == i) & (df['isFraud'] == 1)])
    g = len(df[(df['hour'] == i) & (df['isFraud'] == 0)])
    frauds.append(f)
    genuine.append(g)
```

```python
import pandas as pd

df_GenuineAndFrauds = pd.DataFrame([genuine,frauds],index = ['genuine','frauds'])
```



#### 熱圖

```python
plt.figure(figsize=(25, 4))
sns.heatmap(df_GenuineAndFrauds,cmap = 'Reds', annot=True,fmt=',')
plt.title('Heat map')
plt.savefig(f'Image/Chapter_2_不同時間下各群組熱圖.png',bbox_inches='tight')
```

<center><img src="https://i.imgur.com/vAYnOo6.png" width = "100%"/></center>

#### 不同交易時間（日）

```python
df['day'] = df['step']%(24*7)
w_frauds = []
w_genuine = []
for i in range(7):
    f = len(df[(df['day'] == i) & (df['isFraud'] == 1)])
    g = len(df[(df['day'] == i) & (df['isFraud'] == 0)])
    w_frauds.append(f)
    w_genuine.append(g)
```

```python
import pandas as pd

df_w_GenuineAndFrauds = pd.DataFrame([w_genuine,w_frauds],index = ['genuine','frauds'])
```

```python
plt.figure(figsize=(25, 4))
sns.heatmap(df_w_GenuineAndFrauds,cmap = 'Reds', annot=True,fmt=',')
plt.title('Heat map')
plt.savefig(f'Image/Chapter_2_不同日下各群組熱圖.png',bbox_inches='tight')
```

<center><img src="https://i.imgur.com/xN33ybv.png" width = "100%"/></center>

#### 線圖
```python
def plot_hours(data, plot_name):
    
    fig, ax = plt.subplots(figsize=(10,6))
    for i,d in enumerate(data):
        locals()['ax_'+str(i)] = ax.plot(d[0],label = d[1])
    ax.legend(loc='best')
    plt.xticks(np.arange(len(data[0][0])))
    fig.savefig(f'Image/Chapter_2_{plot_name}.png',bbox_inches='tight')
```

```python
plot_hours(data = [[genuine/np.average(genuine), 'Genuine'],
                   [frauds/np.average(frauds),'Fraud'],
                   [np.ones((24), dtype=int),'Average']],
           plot_name = '不同時間在該群組跟平均值的比較（時）')
```

<center><img src="https://i.imgur.com/RgKkODR.png" width = "70%"/></center>

```python
plot_hours(data = [[w_genuine/np.average(w_genuine), 'w_Genuine'],
                   [w_frauds/np.average(w_frauds),'w_Fraud'],
                   [np.ones((7), dtype=int),'Average']],
           plot_name = '不同時間在該群組跟平均值的比較（日）')
```

<center><img src="https://i.imgur.com/2MiBOUo.png" width = "70%"/></center>

### 先轉帳，之後把錢領出來

{{<mermaid>}}

graph LR
    受害者--轉帳--> account((目標帳戶));
    account((目標帳戶)) --領錢--> 犯人

{{</mermaid>}}

```python
for fraud_type in fraud_types:
    locals()['df_Fraud_'+fraud_type] = df[(df.isFraud == 1) & (df.type == fraud_type)]
```

```python
df_Fraud_TRANSFER.nameDest.isin(df_Fraud_CASH_OUT.nameOrig).any()
>> False
```

> 資料顯示實際上並沒有發生這件事。

### 目標帳戶餘額為零

#### 目標帳戶餘額為零為詐騙的比例

```python
len(df_Odd[(df_Odd.isFraud == 1)]) / len(df_Odd)
```

#### 目標帳戶舊餘額小於交易金額的比例
```python
len(df_Odd[(df_Odd.oldBalanceOrig <= df_Odd.amount)]) / len(df_Odd)
```

## 資料型態

{{<admonition note "資料型態">}}

1. **Numerical Data**

   數值，可計算。

2. **Nominal Data**

   無法排序的離散資料。

   e.g. 衣服、褲子、帽子。

3. **Oridinal Data**

   可以排序的離散資料（彼此之間存在關聯）。

   e.g. 衣服的尺寸（S, M, L, XL）。S小於M，M小於L。推論出S小於L。

{{</admonition>}}

```python
df['type'] = 'D_' + df['type'].astype(str)

dummies = pd.get_dummies(df['type'])

df = pd.concat([df,dummies],axis=1)

del df['type']
```

```python
df = df.drop(['nameOrig','nameDest','Fraud_Heuristic'], axis= 1)
```

```python
df['isNight'] = np.where((2 <= df['hour']) & (df['hour'] <= 6), 1,0)
```

```python
df = df.drop(['step','hour','day'],axis=1)
```

```python
df_y = df['isFraud']
df_x = df.drop('isFraud', axis=1)

y = df_y.values
X = df_x.values
```

### 測試集

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, 
                                                    test_size=0.33, 
                                                    random_state=42)
```

### 驗證集

```python
X_train, X_val, y_train, y_val = train_test_split(X_train, y_train, 
                                                    test_size=0.1, 
                                                    random_state=42)
```



## 決策樹

### 基本

```python
from sklearn import tree

dtree = tree.DecisionTreeClassifier()
dtree = dtree.fit(X_train, y_train)
```

```python
from IPython.display import Image  
import pydotplus 
dot_data = tree.export_graphviz(dtree,
                              max_depth = 3,
                              impurity = True,
                              feature_names = list(df.drop(['isFraud'], axis=1)),
                              class_names = [str(c) for c in dtree.classes_],
                              rounded = True,
                              filled= True ) 
graph = pydotplus.graph_from_dot_data(dot_data)
graph.write_png('Image/Chapter_2_DecisionTreeClassifier.png')
Image(graph.create_png()) 
```

<center><img src="https://i.imgur.com/rgaVJ9e.png" width = "100%"/></center>

### 隨機森林

```python
from sklearn.ensemble import  RandomForestClassifier

rf = RandomForestClassifier(n_estimators=10,n_jobs=-1)
rf.fit(X_train,y_train)
```

```python
for i in range(0,10):
    dot_data = tree.export_graphviz(rf.estimators_[i],
                                  max_depth = 3,
                                  impurity = True,
                                  feature_names = list(df.drop(['isFraud'], axis=1)),
                                  class_names = [str(c) for c in dtree.classes_],
                                  rounded = True,
                                  filled= True )
    graph = pydotplus.graph_from_dot_data(dot_data)
    graph.write_png(f'Image/Chapter_2_RandomForestClassifier{i}.png')
    Image(graph.create_png()) 
```

```python
fig = plt.subplots(figsize=(20,20))
for i in range(0,10):
    plt.subplot(5,2, i+1)
    plt.axis('off')
    plt.imshow(plt.imread(f'Image/Chapter_2_RandomForestClassifier{i}.png'))
plt.savefig(f'Image/Chapter_2_RandomForestClassifier_all.png',bbox_inches='tight')
```

<center><img src="https://i.imgur.com/RJ4lFGW.png" width = "80%"/></center>

```python
y_pred = rf.predict(X_test)
f1_score(y_pred=y_pred,y_true=y_test)
>> 0.8759736369083284
```

```python
cm = confusion_matrix(y_pred=y_pred,y_true=y_test)
plot_confusion_matrix(cm,['Genuine','Fraud'],plot_name = 'confusion_matrix_4' )
```

<center><img src="https://i.imgur.com/Aq0BguF.png" width = "70%"/></center>

## Keras

### 合成樣本（SMOTE, Synthetic Minority Oversampling Technique）

> **過取樣（oversample）**
> 資料太少的情況下會使用

```python
from imblearn.over_sampling import SMOTE, RandomOverSampler

sm = SMOTE(random_state=42)

X_train_res, y_train_res = sm.fit_resample(X_train, y_train)
```

### 

```python
from tensorflow.python.keras.models import Sequential
from tensorflow.python.keras.layers import Dense, Activation #引入層數及激勵函數
from tensorflow.python.keras.api.keras.optimizers import SGD
```



```python
model = Sequential()
model.add(Dense(1, input_dim=9)) 
model.add(Activation('sigmoid'))#設定激活層
```

```python
model.summary()
```

```shell
Model: "sequential"
_________________________________________________________________
Layer (type)                 Output Shape              Param #   
=================================================================
dense (Dense)                (None, 1)                 10        
_________________________________________________________________
activation (Activation)      (None, 1)                 0         
=================================================================
Total params: 10
Trainable params: 10
Non-trainable params: 0
_________________________________________________________________
```
```python
model.fit(X_train_res,y_train_res,
          epochs=5, 
          batch_size=256, 
          validation_data=(X_val,y_val))
```


```shell
Epoch 1/5
13013/13013 [==============================] - 57s 4ms/step - loss: 841305.5625 - acc: 0.9000 - val_loss: 30228978.0000 - val_acc: 0.1794
Epoch 2/5
13013/13013 [==============================] - 55s 4ms/step - loss: 753065.6250 - acc: 0.9075 - val_loss: 1453621.0000 - val_acc: 0.7090
Epoch 3/5
13013/13013 [==============================] - 57s 4ms/step - loss: 758336.6250 - acc: 0.9067 - val_loss: 106646.0781 - val_acc: 0.9481
Epoch 4/5
13013/13013 [==============================] - 66s 5ms/step - loss: 742057.2500 - acc: 0.9073 - val_loss: 144490.3438 - val_acc: 0.9301
Epoch 5/5
13013/13013 [==============================] - 61s 5ms/step - loss: 764006.3750 - acc: 0.9066 - val_loss: 4663113.0000 - val_acc: 0.5685
```

```python
y_pred = model.predict(X_test)
y_pred[y_pred > 0.5] = 1
y_pred[y_pred < 0.5] = 0
```

```python
f1_score(y_pred=y_pred, y_true=y_test)
>>> 0.013664241476760267

cm = confusion_matrix(y_pred=y_pred,y_true=y_test)
plot_confusion_matrix(cm,['Genuine','Fraud'],title='Confusion matrix',plot_name='confusion_matrix_2')
```

<center><img src="https://i.imgur.com/RpOWuua.png" width = "70%"/></center>

```python
model = Sequential()
model.add(Dense(16,input_dim=9))
model.add(Activation('tanh'))
model.add(Dense(1))
model.add(Activation('sigmoid'))

model.compile(loss='binary_crossentropy', optimizer=SGD(learning_rate = 1e-5),metrics=['acc'])
```

```shell
Model: "sequential_2"
_________________________________________________________________
Layer (type)                 Output Shape              Param #   
=================================================================
dense_3 (Dense)              (None, 16)                160       
_________________________________________________________________
activation_3 (Activation)    (None, 16)                0         
_________________________________________________________________
dense_4 (Dense)              (None, 1)                 17        
_________________________________________________________________
activation_4 (Activation)    (None, 1)                 0         
=================================================================
Total params: 177
Trainable params: 177
Non-trainable params: 0
```

```python
model.fit(X_train_res, y_train_res, epochs=5, batch_size=256, validation_data=(X_val, y_val))
```

```shell
Epoch 1/5
13013/13013 [==============================] - 60s 5ms/step - loss: 0.7174 - acc: 0.4597 - val_loss: 0.7900 - val_acc: 0.0144
Epoch 2/5
13013/13013 [==============================] - 68s 5ms/step - loss: 0.6137 - acc: 0.7121 - val_loss: 0.6612 - val_acc: 0.7113
Epoch 3/5
13013/13013 [==============================] - 75s 6ms/step - loss: 0.5555 - acc: 0.7691 - val_loss: 0.5789 - val_acc: 0.8170
Epoch 4/5
13013/13013 [==============================] - 70s 5ms/step - loss: 0.5206 - acc: 0.7781 - val_loss: 0.5426 - val_acc: 0.7938
Epoch 5/5
13013/13013 [==============================] - 74s 6ms/step - loss: 0.4951 - acc: 0.8065 - val_loss: 0.5009 - val_acc: 0.9115
```

```python
y_pred = model.predict(X_test)
y_pred[y_pred > 0.5] = 1
y_pred[y_pred < 0.5] = 0
```

```python
f1_score(y_pred=y_pred, y_true=y_test)
```

```python
cm = confusion_matrix(y_pred=y_pred,y_true=y_test)
plot_confusion_matrix(cm,['Genuine','Fraud'],title='Confusion matrix',plot_name='confusion_matrix_3')
```

<center><img src="https://i.imgur.com/9eYc0Qo.png" width = "70%"/></center>

</span>








