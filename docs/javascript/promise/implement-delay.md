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

## 延伸

在使用 promise 實作完 delay 之後，我們來探討一下要如何使用 closure 以及 promise 來處理非同步的問題

#### 情境一

```js
const a = (callback) => {
  setTimeout(() => callback("a"), 3000);
};

const b = (callback) => {
  setTimeout(() => callback("b"), 1000);
};

const c = (callback) => {
  setTimeout(() => callback("c"), 2000);
};

const doByOrder = async (callback) => {
  a(callback);
  b(callback);
  c(callback);
};

doByOrder(console.log);

// 預期輸出
// b
// c
// a
```

那我們要如何在不能更動函式 a,b,c 的情況下，讓上述的程式碼可以照順序輸出字串 a, b, c 呢？

#### 解題思維

1. 要控制 setTimeout 的非同步順序，我們需要將 setTimeout 放在 promise 裡面來執行，也就是要在 promise 裡面執行函式 a,b,c。
2. 因此我們需要一個回傳 promise 的函式，並且利用 closure 的特性來保存當作參數傳入 doOrderBy 的函式，來讓 a,b,c 三個函式可以正確執行這個傳入的函式。

我們先根據第一步驟來實作一個回傳 promise 的函式，並且把函式 a 放進去

```js
const doByOrder = async (callback) => {
  const fn = () => {
    return new Promise((resolve) => {
      a(callback);
    });
  }
  fn();
};
```

但我們執行完 doByOrder 後，會發現因為 promise 沒有執行 resolve 所以會出現預期外的非同步問題，因此我們需要讓 a 函式來代替我們執行 resolve，並且將 fn 函式改動成可以接收函式 a,b,c 的參數

```js
const doByOrder = async (callback) => {
  const fn = (cb) => {
    return new Promise((resolve) => {
      cb((val) => {
        callback(val);
        resolve(val);
      });
    });
  }
  await fn(a);
  await fn(b);
  await fn(c);
};
```

這樣就大功告成了，我們成功的利用 closure 以及 promise 來解決非同步的問題

#### 情境二

那如果我們有無限多的


[程式碼範例](https://codesandbox.io/p/sandbox/react-promise-implement-jg4klf)