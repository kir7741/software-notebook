---
sidebar_position: 1
tags:
  - NodeJs
  - JavaScript
last_update:
  date: 2024/07/01
  author: Joseph Lin
---

# Path module

1. __dirname：回傳目前檔案的目錄路徑
2. __filename：回傳目前檔案的完整路徑
3. path.dirname($path)：將傳入的路徑字串轉換成目錄路徑

```js
const path = require('path');

console.log(path.dirname('/xx/yy/zz/index.html')); // /xx/yy/zz
```

4. path.basename($path)：將傳入的路徑字串轉換成檔案名稱

```js
const path = require('path');

console.log(path.basename('/xx/yy/zz/index.html')); // index.html
```

5. path.extname($path)：將傳入的路徑字串轉換成副檔名

```js
const path = require('path');

console.log(path.extname('/xx/yy/zz/index.html')); // .html
```

6. path.join($path1, $path2, $path3, ...)：將傳入的路徑字串組合成一個完整的路徑

```js
const path = require('path');

console.log(path.join('/xx', '/yy', 'zz')); 

// /xx/yy/zz

```

7. path.parse($path)：將傳入的路徑字串解析成物件

```js
const path = require('path');

console.log(path.parse('/xx/yy/zz/index.html'));

// 輸出
// {
//   root: '/',
//   dir: '/xx/yy/zz',
//   base: 'index.html',
//   ext: '.html',
//   name: 'index'
// }
```