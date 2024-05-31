---
sidebar_position: 3
tags:
  - JavaScript
last_update:
  date: 2024/05/17
  author: Joseph Lin
---

# Strict Mode

### 什麼是嚴格模式（Strict Mode）？

JavaScript 是一個相對自由程式語言，好處是可以透過各種方式實現出邏輯，但缺點就是允許不嚴謹的寫法，導致產出的程式碼很容易不穩定，很容易產生 Bug。

而嚴格模式（Strict Mode）是 ES5 新增的一種模式，可以讓 JavaScript 的執行環境變得更嚴謹，避免一些不好的寫法，提高程式碼的品質。

### 如何使用

1. 在程式碼的最上方加上 `'use strict';` 就可以開啟嚴格模式。

```js
'use strict';

let a = 1;
```

比較需要注意的是，如果 JS 檔案底下本身就有引入其他檔案的話，這些檔案也都會被套用嚴格模式。

2. 在函式內部加上 `'use strict';` 也可以只在該函式內部套用嚴格模式。

```js
function foo() {
  'use strict';
  let a = 1;
}
```

### 嚴格模式的效果

1. 嚴格模式下，不能直接定義未宣告的變數，以下為會出錯的範例

```js
'use strict';

a = 1;
```

2. 嚴格模式下，不能刪除變數，以下為會出錯的範例

```js
'use strict';
var a = 1;
delete a;
```

3. 嚴格模式下，不能定義重複的參數名稱，以下為會出錯的範例

```js
'use strict';
function foo(a, a) {
  return a;
}
```

4. 嚴格模式下，不能使用關鍵字當作變數名稱，以下為會出錯的範例

```js
'use strict';

var eval = 1;
var arguments = 1;
var private = 1;
```

#### 參考文章

- [JavaScript 的嚴格模式 "use strict"](https://www.casper.tw/javascript/2017/12/15/javascript-use-strict/)
