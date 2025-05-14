---
sidebar_position: 1
tags:
  - database
  - postgresql
last_update:
  date: 2024/05/02
  author: Joseph Lin
---

# PostgreSQL installation

1. 使用以下指令安裝 PostgreSQL

也會預設幫你在電腦中建立一個名稱為 `postgres` 的 db

```bash
$ brew install postgresql
```

2. 之後可以用以下指令檢查版本以及是否安裝成功

```bash
$ postgres -V
```

3. 也可以使用以下指令查看目前 brew 啟動的服務

```bash
$ brew services list
```

4. 使用以下指令啟動 PostgreSQL Server

這個指令會在 localhost 啟動 db server，預設的 port 是 5432

```bash
$ brew services start postgresql
```

5. 再啟動好 db server 之後，可以使用以下指令進入指定的 db

```bash
$ psql [dbName]
$ psql postgres
```

6. 使用以下指令停止 PostgreSQL Server

```bash
$ brew services stop postgresql
```

#### Note

強制砍掉被佔用的 port

```bash
$ sudo lsof -ti tcp:[port] | xargs kill
```