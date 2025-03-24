---
sidebar_position: 2
tags:
  - husky
  - git
last_update:
  date: 2025/03/24
  author: Joseph Lin
---

# husky

### husky 是什麼？

husky 是一個 git hook 工具，可以在特定的 git hook 觸發時執行指定的 script。主要用來在 commit 時，執行 eslint 或 prettier 等檢查工具，確保程式碼的品質。

### 什麼是 git hook？

git hook 如同[官網](https://git-scm.com/book/zh-tw/v2/Customizing-Git-Git-Hooks)的說明，是 git 提供的一個機制，會在 git 執行到某個動作時觸發，就常使用到的有：

- pre-commit：最先觸發的 hook，在使用者輸入 `git commit` 的使令時，git 會先觸發這個 hook，再去執行 git commit 應該要做的事情。
在 commit 指令打開互動式輸入視窗時就會先行觸發，主要會透過這個時機點對想要 commit 的程式碼進行檢查
- pre-commit-msg：在 `git commit` 指定輸入後，commit message 的互動式輸入視窗打開之前觸發，主要是可以在這個時候透過 `commitizen`、`cz-conventional-changelog` 等工具，統一團隊內的 commit message 格式。
- commit-msg：會在使用者完成輸入 commit message 後，git 實際把這個 message 送出前觸發，主要的功能是可以在這個時候對 commit message 進行檢查，例如：commit message 是否符合規範、是否有特定的關鍵字等等。

#### 如何使用

1. 安裝 husky

```bash
npm install husky --save-dev
```

2. 初始化 husky

```bash
husky init
```

此時就會看到專案目錄底下多出了一個 `.husky` 的資料夾，裡面包含了所有的 git hook 檔案。

3. 新增 pre-commit hook

`.husky` 底下會有個 `_` 的目錄，這目錄應該是放置每個 git hook 觸發時要執行的預設動作，因此建議有另外要執行的函式需要在 `_` 目錄的外面新增，因此在 `.husky` 資料夾底下新增一個 `pre-commit` 檔案，內容如下：

```bash
echo 'Run pre-commit...'
npx --no-install lint-staged
```

上面的指令，就是單純在 pre-commit 時，讓 husky 去執行 lint-stage。

那什麼是 lint-stage 呢？

lint-stage 是一個工具，可以透過簡單的設定協助開發者去進行程式碼的檢查，例如：eslint、prettier 等等。

安裝 lint-stage：

```bash
npm install lint-staged --save-dev
```

設定 lint-staged，新增一個 `.lintstagedrc.js` 檔案，內容如下：

```js
module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint'],
  '**/*.{js,jsx,json,ts,tsx}': ['prettier --write'],
};
```

只要一個設定檔，就可以讓開發者針對指定的的檔案去做檢查，eslint 可以幫你檢查像是程式碼的型別、語法等等，prettier 則是幫你檢查程式碼的格式，加上 --write 參數，可以讓 prettier 幫你自動修正程式碼格式。

4. 新增 pre-commit-msg hook