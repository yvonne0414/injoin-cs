# InjoinClientside

###### 記得先 `cd injoin-react` 在下指令

## 步驟

1. 進入專案 cd injoin-react
2. 下載套件 npm i
3. 啟 server npm start

## 資料夾位置

- UI
  - 切版放在 UI 資料夾
  - 以功能再細分到資料夾裡
- src/views
  - 放頁面
  - 若需要可以建 components 資料夾放該頁面用的組建

## 命名注意事項！！！

1. ##### 文件夾
   - Components 文件夾下的子文件都用**大駝峰**
     - 通用組件放在 src/components 下
     - 頁面組建放在各自頁面的./components 文件夾下
     - components 文件夾最多只有一層文件夾，且名稱要是組件名稱（**大駝峰**），需有一個 index.js(此組件主要 return 的項目，一樣使用大駝峰)
   - 其他文件夾：**小駝峰+複數**
2. ##### 文件
   - 小駝峰，單複數看狀況
3. ##### 常數、變數
   - 常數以全大寫及＿分隔
   - 變數以小駝峰命名
4. ##### 函數（方法）
   - 函數以**小駝峰**命名
   - 取名前綴用動詞
5. ##### 屬性名

   - 小駝峰命名

6. ##### api 命名
   - 參照**RESTFUL** : https://mtache.com/rest-api

###### 規範:

- https://blog.51cto.com/nanjke/3030110
- https://cosmos-x.gitbook.io/react-development-guides/1.-app-zong-lan/wen-jian-he-wen-jian-jia-shuo-ming

###### example:

- 大駝峰:HomePage
- 小駝峰:homePage
- 橫線連結:home-page

###### 版本

node 16.15.0

###### 使用套件

- antd: 4.21.0
- axios: 0.27.2
- bootstrap: 5.1.3
- react-bootstrap: 2.4.0
- fontawesome
- sass
