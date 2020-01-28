# [Chrome ONLY] NUEIP automated punch-card application for lazy people :D
# Author: Ming Cai
# Create: ~2019 Aug
# Modify: 2020.1.28
# Version: v1.1.0

# release note:
- [Add] Configurable: StartDate, EndDate
- [Add] Configurable: Search keywords
- [Modify] README add Chinese version


## 說明

### Precondition
1. 在執行前，每次都請下載/更新對應的chromedriver(需要對應OS版本及自己電腦內的Chrome版本) [chromedriver](https://chromedriver.chromium.org/)

2. 將下載好的chromedriver擺到 bin 資料夾內

### Setup
1. 重新命名 bin 資料夾內的 chromedriver 將其命名為: chromedriver (如果有其他後綴詞請刪除)

> e.g. chromedriver_win32.exe -> chromedriver.exe

2. Windows用戶請將.bat檔右鍵編輯，修改下列參數，並存檔
(MacOS & Linux用戶請修改.sh檔，並注意最後執行的autopunchtimecard是哪個OS版本，並且參數不可換行)

#### Env Configs
- ENV_COMPANY_ID=nextdrive
- ENV_EMPLOYEE_ID=your_employee_ID
- ENV_PASSWORD=your_password
- ENV_START_DATE=2020-01-01 (格式請遵照yyyy-MM-dd)
- ENV_END_DATE=2020-12-31
- ENV_SEARCH=keywords (有Absent, Missed punch可輸入，請勿打錯字)

### How to use:
1. 修改完 .bat檔 並存檔後，Windows 用戶只要雙擊兩下 .bat檔 即可

2. 此程式將會自動開啟你電腦的 Chrome 來進行打卡

3. 去上個廁所或喝杯咖啡吧！

> Warning: !!! 在程式運行期間，請不要移動你的滑鼠游標，否則將會出錯 !!!


------


## Manually

### Precondition
1. Download/Update [chromedriver](https://chromedriver.chromium.org/) of yourOS.

2. Put in /bin.

### Setup
1. Rename /bin/chromedriver_your_OS to chromedriver

> e.g. chromedriver_mac64 -> chromedriver

2. Open the shell/batch script, and modify configs, then save it.

> MacOS/Linux: **shell** script.
> Windows: **batch** script.

#### Env Configs:
- ENV_COMPANY_ID=nextdrive
- ENV_EMPLOYEE_ID=your_employee_ID
- ENV_PASSWORD=your_password
- ENV_START_DATE=2020-01-01 (format: yyyy-MM-dd)
- ENV_END_DATE=2020-12-31
- ENV_SEARCH=keywords (keywords: Absent, Missed punch)

### How to use:
1. Execute shell/batch script.

2. This process will open Chrome to punch time card where you missed.

3. Drink a coffee or go to bathroom.

> Warning: !!! Do **NOT TOUCH** the browser who be automated opening. !!!


------


### FAQ
- Q: 為何我一開始就不能執行呢？
- A1: 下載時需要整包一起下載下來。
- A2: 請更新chromedriver，需對應電腦的OS版本及chrome版本。

- Q: 為何打卡停在某一天不動？
- A: 目前只能成對(上班及下班)的打卡，如果是缺卡的狀況請手動排除。


### Tech/Tool:

- [node.js](https://nodejs.org/en/)
- ["nightwatch": "^1.1.13"](https://nightwatchjs.org/)
- [pkg](https://www.npmjs.com/package/pkg#detecting-assets-in-source-code)
- [ChromeDriver 76.0.3809.68](https://chromedriver.chromium.org/)

