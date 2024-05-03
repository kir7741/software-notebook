---
sidebar_position: 2
tags:
  - env
  - dotenv
  - godotenv
last_update:
  date: 2024/05/02
  author: Joseph Lin
---

# Environment variable

### 從指令中帶入環境變數

這是最基本的帶入環境變數的方式，在執行的指令前面(一定要加在前面，後面會失效)，加上環境變數

```bash
$ APP_ENV=production go run main.go
```

在程式碼中可以透過 os 這個套件來取得環境變數

```go
package main

import (
  "fmt"
  "os"
)

func main() {
  appEnv := os.Getenv("APP_ENV")
  fmt.Println(appEnv)
}

// production
```

### 使用 godotenv 管理環境變數

godotenv 是一個可以讓我們在專案中使用 .env 來管理環境變數的套件

1. installation

```bash
$ go get github.com/joho/godotenv
```

2. useage

.env 檔案

```

database = "mysql"
appName = "myapp"

```

```go
package main

import (
  "fmt"
  "os"
  "github.com/joho/godotenv"
)

func main() {

  // 預設讀取 .env 檔案
  err := godotenv.Load()

  // 處理沒有讀取到的錯誤
  if err != nil {
    fmt.Println("Error loading .env file")
  }

  database := os.Getenv("database")
  fmt.Println(database)

  // mysql
}
```

也可以使用自動加載的方式，就不用使用 `godotenv.Load()` 這個方法

```go
package main

import (
  "fmt"
  "os"
  _ "github.com/joho/godotenv/autoload"
)

func main() {
  database := os.Getenv("database")
  fmt.Println(database)
}
```

如果不想要一直使用 `os.Getenv()` 來取得環境變數，可以透過 `Read()` 的方法存取到一個 map 中

```go
package main

import (
  "fmt"
  "os"
  "github.com/joho/godotenv"
)

func main() {

  var myEnv map[string]string
  myEnv, err := godotenv.Read()
  if err != nil {
    fmt.Println("Error loading .env file")
  }

  fmt.Println("database: ", myEnv["database"])
  // database: mysql
}
```

但如果我想要根據不同的環境讀取不同的 .env 檔案，就需要使用以上兩種讀取方法的組合技。

- 先使用指令下環境變數
- 根據指令的變數去讀取不同的 .env 檔案

```go
package main

import (
  "fmt"
  "os"
  "github.com/joho/godotenv"
)

func main() {

  // 此處會取得 develop 或是 production
  appEnv := os.Getenv("APP_ENV")

  // 預設為 develop 環境
  if env == "" {
    env = "develop"
  }

  // 根據環境讀取不同的 .env 檔案
  err := godotenv.Load(".env." + env)
  if err != nil {
    fmt.Println("Error loading .env file")
  }

  fmt.Println("database: ", os.Getenv("database"))
  // mysql
}
```

