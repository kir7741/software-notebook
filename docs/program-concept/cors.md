---
sidebar_position: 1
tags:
  - Web
  - HTTP
last_update:
  date: 2024/05/14
  author: Joseph Lin
---

# CORS

### 什麼是同源政策（Same-Origin Policy）？

此處的 origin 指的是 scheme、host、port 三者的組合，當兩個 URL 的 origin 相同時，我們稱這兩個 URL 是同源的。

而基於 `安全性` 這項理由，瀏覽器會對不同源的網頁資源進行限制，這就是同源政策。
因為在大部分的狀況下，我們不可能讓任何人都可以讀取我們 server 的資料。

而 `CORS` 即是指透過不同的 origin 來存取 server 資源的一種行為。

那遇到只能執行跨來源請求的時候，該如何正確地處理？
首先我們要知道，跨來源請求有分成以下兩種，這兩種模式會有不同的解決方式。

### 簡單請求

####  (ㄧ)、成立條件

- 使用 GET、POST、HEAD 方法
- 沒有自訂的 header
- Content-Type 只能是以下幾種
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain

在三項條件都達成的情況下，基本上就屬於簡單請求。

####  (二)、處理方式

簡單請求的處理方式比較單純，就是請後端在 response 的 header 中加入  `Access-Control-Allow-Origin` 這個屬性就好了

### 非簡單請求 (預檢請求)

#### (ㄧ)、成立條件

- 簡單請求以外的都稱為非簡單請求

#### (二)、處理方式

1. 非簡單請求時，瀏覽器會自動發送一個 OPTIONS 請求，詢問伺服器是否允許這個請求。而這個 OPTIONS 會自動在 header 加上以下幾個屬性：
  - Access-Control-Request-Headers
  - Access-Control-Request-Method

2. 當 http 請求帶有自定義的 header 時，後端需要在 response 的 header 中加入
`Access-Control-Allow-Headers` 來允許這些自定義的 header，如同以下這個範例：

```js
  fetch('http://localhost:8000/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
```

我們發送請求時帶入了一個自定義的 header `Content-Type`，所以瀏覽器會在 OPTIONS 請求中加上   
- Access-Control-Request-Headers: Content-Type
- Access-Control-Request-Method: POST'

而後端在回應時，除了之前提過的 `Access-Control-Allow-Origin`，也需要加上 `Access-Control-Allow-Headers: Content-Type` 這個屬性。

```js
app.post('/form', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.end()
});

app.options('/form', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'content-type')
  res.end()
});
```

#### (三)、帶入 cookie

但如果我們需要在跨來源請求中帶上 cookie，該如何避免 CORS 問題？

1. 在發送請求時若要帶上 cookie 給後端，需要在 fetch 的設定中加上 `credentials: 'include'` 這個屬性，如下：

```js
  fetch('http://localhost:8000/form', {
    method: 'POST',
    credentials: 'include', // 帶上 cookie
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
```

但這樣不就代表，誰都可以塞 cookie 到我們的後端嗎？所以後端也需要同意這件事才行。

2. 後端需要在 response 的 header 中加上 `Access-Control-Allow-Credentials: true` 這個屬性，如下：

```js
const ORIGIN = 'http://localhost:8000';

app.post('/form', (req, res) => {
  res.header('Access-Control-Allow-Origin', ORIGIN);
  res.header('Access-Control-Allow-Credentials', true);
  res.end();
});

app.options('/form', (req, res) => {
  res.header('Access-Control-Allow-Origin', ORIGIN);
  res.header('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Credentials', true);
  res.end();
})
```

其中要特別注意的是，如果 request 時要帶上 cookie，那麼 `Access-Control-Allow-Origin` 就不能使用 `*` 這個萬用字元，而是要指定特定的 origin。

#### (四)、後端傳送特定 header 資訊給前端

1. 如果我們想在 response 中傳送版本資訊給前端，可以看以下範例

```js
app.post('/form', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('App-Version', '1.0');
  res.end();
});
```

但這樣前端其實會拿不到這個 header 資訊，因為瀏覽器會將這個 header 視為不安全的資訊，所以我們需要在 response 的 header 中加上 `Access-Control-Expose-Headers: App-Version` 這個屬性，如下：

```js
app.post('/form', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'App-Version');
  res.header('App-Version', '1.0');
  res.end();
});
```

這樣前端就可以正確取得這個 header 資訊了。

#### (五)、preflight cache

只要滿足非簡單請求的條件，瀏覽器就會自動發送 preflight 請求，這在使用者體驗上不是很正確的狀況。
所以我們可以透過 `Access-Control-Max-Age` 這個屬性來設定 preflight cache 的時間，如下：

```js
app.options('/form', (req, res) => {
  res.header('Access-Control-Allow-Origin', ORIGIN);
  res.header('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Max-Age', 60 * 60 * 24); // 一天
  res.end();
})
```

這樣就可以避免在短時間內同一支 API 重複發送 preflight 請求。



#### 參考文章

- [CORS 完全手冊（一）：為什麼會發生 CORS 錯誤？](https://blog.huli.tw/2021/02/19/cors-guide-1/)

