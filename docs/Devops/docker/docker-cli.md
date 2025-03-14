---
sidebar_position: 2
tags:
  - Devops
  - Container
  - Docker
last_update:
  date: 2025/02/27
  author: Joseph Lin
---

# Docker cli

#### 編譯映像檔

```bash
docker build ${path}

# docker build . 會去抓當前目錄的 Dockerfile
```

會去抓指定目錄的 Dockerfile 編譯成映像檔，build 完之後會取得一個 image id

```bash
docker build -t ${image_name} ${path} --build-arg ${key}=${value}
```

還可以在編譯時，帶入參數，這樣可以覆蓋掉 Dockerfile 裡的 ARG

#### 執行映像檔

```bash
docker run ${image_id}

docker run -p ${local_port}:${container_port} ${image_id}

# docker run -p 3000:3000 1234567890
```

根據指定的 image id 來啟動容器（Container）。
需要注意的是 Dockerfile 裡的 `EXPOSE` 設定，是在設定 Container 裡的應用程式要在哪一個 port 號運行，而這個 port 號是在 Container 內部，我們無法讀取，所以必須要使用 `-p` 來將本地系統的 port 號對應到 Container 的 port 號。

```bash
docker run -it ${image_id}
```

而加上了 `-it` 這個參數，可以告訴 Docker 在啟動 Container 之後，要開啟一個互動式的 shell 來讓使用者可以進入 Container，這樣就可以在主機上的 shell 裡操作 Container 裡的應用程式，`-it` 是 `-i` 與 `-t` 的縮寫。

```bash
docker run -d ${image_id}
```

啟動 Container 時，有區分兩種模式

1. attach：附加模式，啟動 Container 後，當下的 shell 會被卡住，無法操作其他指令，但可以看到 Container 裡應用程式的輸出

2. detach: 分離模式，啟動 Container 後，shell 會回到主機的 shell，可以繼續操作其他指令，但無法看到 Container 裡應用程式的輸出

docker run 預設是 attach 模式，可以帶入 `-d` 參數來使用 detach 模式


#### 查看容器 (Container)

```bash
docker ps
```

查看目前正在運行的容器，並且列出這些容器的 id、image、執行時間、狀態等資訊。

```bash
docker ps -a

# -a 代表 -all，可以查看所有的 Container 狀態
```

#### 啟動容器 (Container)

```bash
docker start ${container_id}

docker start -a ${container_id}

docker start -a -i ${container_id}
```

啟動指定的容器，跟 `docker run` 不同的是，後者是根據 image 來創建一個 Container 並且啟動，前者僅只有執行啟動的步驟。此指令預設為 detach 模式，可以加入 `-a` 參數來使用 attach 模式。

而加入 `-a -i` 參數，可以達成跟 docker run -it 一樣的效果，即啟動 Container 並且開啟互動式的 shell。

```bash
docker attach ${container_id}
```

直接使用 attach 模式來啟動 Container

#### 停止容器 (Container)

```bash
docker stop ${container_id}
```

停止正在運行的指定容器

#### 查看 Container 的 log

```bash
docker logs ${container_id}

docker logs -f ${container_id}
```

可以在 detach 模式下查看 Container 的 log，也可以加入 `-f` 參數來持續監控 log 的輸出（等同於進入 attach 模式）。

#### 刪除 Container

```bash
docker rm ${container_id}
```

刪除指定的 Container

#### 刪除 Image

```bash
docker rmi ${image_id}
```

刪除指定的 Image，需要先確認要刪除的 image 沒有被 Container 使用

```bash
docker image prune
```

刪除所有沒有被使用的 image

#### 查看卷（Volumn）

```bash
docker volume ls
```

查看目前所有的 volumn

#### 建立卷的映射

```bash

# Volumn
docker run -v ${volumn_name}:${container_path} ${image_id}

# Bind mount
docker run -v ${local_path}:${container_path} ${image_id}

# docker run -v /app:/app/temp 1234567890
# 將 Container 的 /app/temp 資料夾映射到本地端的 /app 資料夾
```

Volumn 跟 Bind mount 的差別在於，前者由 Docker 來管理，僅用於儲存 Container 的資料，所以可以看到傳入的是 volumn name，docker 會在某處管理這個 volumn; 後者是由使用者管理的，所以需要傳入檔案的絕對路徑，docker 會將檔案的路徑與 Container 的路徑做映射，也就是說在 Container 內讀取指定路徑的檔案時，實際上是讀取本機上的指定路徑。

`$(pwd):/app` 這樣的寫法，可以將 Container 的 /app 資料夾映射到目前的目錄。`$(pwd)` 是當前路徑的簡寫。

#### 帶入環境變數

```bash
docker run --env ${key}=${value} ${image_id}

# shortcuts
docker run -e ${key1}=${value1} -e ${key2}=${value2} ${image_id}

# use env file
docker run --env-file ${env_file} ${image_id}
```

Dockerfile 的 ENV 所設定的是預設值，可以用指令覆蓋

#### 建立 Docker network

```bash
docker network create ${network_name}
```

這可以建立出一個 docker network，讓不同的 Container 可以透過這個 network 來溝通

```bash
docker run --name ${container_name} --network ${network_name} ${image_id}
```

這樣就可以啟動一個指定名稱的 Container，並且指定 network 與其連線。
如果兩個 Container 都有跟同一個 network 連線的話，在程式碼裡面可以直接用 `${container_name}:${port}` 來連線到另一個 Container。


#### 檢查與除錯

```bash
docker inspect ${container_name}

docker inspect ${image_name} 

docker inspect ${volumn_name} 
```

docker inspect 可以檢查 Container、Image、Volumn 的詳細資訊

```bash

docker exec ${container_name} ${command}

# docker exec ${container_name} ls
# docker exec -it ${container_name} ls
```

docker exec 可在 Container 內執行指令，可以用來做除錯，也可以用 `-it` 來開啟互動式的 shell

#### 啟動 docker compose

```bash
docker-compose up
```

docker-compose 會去讀取當前目錄的 docker-compose.yml 檔案，並且啟動裡面定義的服務

```bash
docker-compose up -d
```

加上 `-d` 參數，可以讓 docker-compose 在背景執行

```bash
docker-compose up --help
```

加上 `--help`，可以讓 docker-compose 在啟動時，強制重新編譯 image

#### 停止 docker compose

```bash
docker-compose down
```



