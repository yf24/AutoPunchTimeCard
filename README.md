# NUEIP automated punch-card application for lazy people :D
# Author: yf24
# Create: ~2019 Aug
# Modify: 2021.08.06

## 前言
此工具是為了讓自己更快速(偷懶)打卡而做的，
主要執行環境為 macOS, 其餘的環境都只是順便包板，
並不一定會在 Windows 上 Run，若無法使用...可以嘗試回報，但我不一定會修:P

------

## Manual

### Setup
1. Open the shell/batch script, and modify configs, then save it.

> MacOS/Linux: **shell** script.
> Windows: **batch** script.

#### Env Configs:
Make sure there is a "--" symbol forward for each parameters.
- id=your_employee_ID
- password=your_password
- observe=false (optional) {value: true/false, default=false, if you wanna watch entire process who punched, then set it true.}

e.g. ./autopunchtimecard-macos --id=your_Employee_ID --password=your_password --startDate=2021-01-01 --endDate=2021-12-31 --observe=true(optional)

### How to use:
1. Execute shell/batch script.

2. Drink a coffee or go to bathroom.

3. Process will be done when showing message "QUEST COMPLETE" in terminal.


------

## 說明

### Setup
1. Windows用戶請將.bat檔右鍵編輯，修改下列參數，並存檔
(MacOS & Linux用戶請修改.sh檔，並注意執行的 autopunchtimecard 是哪個 OS 版本，並且參數不可換行)

#### Env Configs
- id=your_employee_ID
- password=your_password
- observe=false (可選) {數值只接受: true/false。 這裡預設=false, 若你想要觀看此工具操作你的瀏覽器，可以嘗試設定成 true 就能看到全部操作過程}

### How to use:
1. 修改完 .bat檔 並存檔後，Windows 用戶只要雙擊兩下 .bat檔 即可 (為避免問題可以直接以管理員身份執行)

2. 去上個廁所或喝杯咖啡吧！

3. 若有在小黑窗看到 QUEST COMPLETE. 則表示完成 （這邊 Windows 有可能會看不到任何訊息就被關掉小黑窗)


------


### FAQ
- Q: 為何打卡停在某一天不動？
- A: 目前只能成對(上班及下班)的打卡，如果是缺卡的狀況請手動排除。


### Tech/Tool:

- [node.js](https://nodejs.org/en/)
- ["playwright": "^1.13.1"](https://github.com/microsoft/playwright)
- ["minimist": "^1.2.5"](https://github.com/substack/minimist)
- ["ora": "^5.4.1"](https://github.com/sindresorhus/ora)
