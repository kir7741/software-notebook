---
sidebar_position: 1
tags:
  - database
  - postgresql
last_update:
  date: 2024/06/01
  author: Joseph Lin
---

# PostgreSQL Cli

#### 建立新的 db

```bash
$ createdb ${dbName}
$ createdb test-db
```

#### 查看所有的 DB

```bash
$ psql -l
```

#### 進入指定的 db

```bash
$ psql ${dbName}
$ psql test-db
```

