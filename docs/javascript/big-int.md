---
sidebar_position: 3
tags:
  - JavaScript
  - BigInt
last_update:
  date: 2024/06/03
  author: Joseph Lin
---

# BigInt

### 什麼是 BigInt？

### 如何使用

一、BigInt literal (直接宣告)：

1. 二進制：`0b` 開頭
2. 八進制：`0o` 開頭
3. 十六進制：`0x` 開頭

```js
const a = 0b11n; // 3n
const b = 0o11n; // 9n
const c = 0x1fn; // 31n
```

從這邊可以了解到 BigInt 最終都會自動幫我以 10 進位進行顯示，並且以 `n` 結尾。

二、使用 BigInt 建構子：

1. 可接收數字與字串
2. 數字不可以有小數點
3. 字串不能以 `n` 結尾
4. 可傳入進位機制的數字，預設為 10 進位

```js
const a = BigInt(123); // 123n
const b = BigInt('123'); // 123n
const c = BigInt('123n'); // error
const d = BigInt(0b11n); // 3n
const e = BigInt('0b11'); // 3n
```

### 用途

所以在了解上述的使用方式後，可以了解到 BigInt 其中一個功能就是幫我們做二進制等進位轉換。
  
```js
const a = 11;
const b = BigInt(`0b${a}`); // 3n
const c = BigInt(11n); // 11n
console.log(c - b); // 8n
```

這樣就可以快速的將二進位與十進位來做運算。

