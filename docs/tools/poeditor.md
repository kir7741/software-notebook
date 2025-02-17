---
sidebar_position: 1
tags:
  - poeditor
  - i18n
last_update:
  date: 2025/02/17
  author: Joseph Lin
---

# POEditor

## POEditor 想解決什麼？

過去在開發多國語言的專案時，我們一般會在本地端存有各個語系的 JSON 檔案（像是 en.json, zh-tw.json），然後透過程式碼去讀取這些檔案，但工程師不可能自己去翻譯這麼多的語言，會需要專門的翻譯人員來進行翻譯，翻譯好的內容，再由工程師去更新 JSON 檔案，而這個更新的步驟非常繁瑣，也容易出錯。
因此 poeditor 就是個可以讓你線上託管語言檔案，翻譯人員上去翻譯之後，工程師可以透過 poeditor 的 API 直接去更新你本地端的 JSON 檔案。