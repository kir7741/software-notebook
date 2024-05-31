---
sidebar_position: 1
tags:
  - JavaScript
  - Promise
  - delay
last_update:
  date: 2024/05/31
  author: Joseph Lin
---

# 使用 promise 實作 delay

實作上算是相對單純，我們只需要利用 `setTimeout` 來處理 `promise` 的 `resolve` 就好 

```js
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

const doDelay = async () => {
  console.log('start');
  await delay(3000);
  console.log('end');
}

doDelay();
```

而這裡需要注意的地方是，`delay` 函式回傳的是一個 `promise` 物件，需要這樣做的原因是因為 `await` 會去等待 `promise` 的狀態，當 `promise` 的狀態變成 `resolve` 或是 `reject` 時，`await` 才會繼續往下執行。


[程式碼範例](https://codesandbox.io/p/sandbox/react-promise-implement-jg4klf)