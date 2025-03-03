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

#### 執行映像檔

```bash
docker run ${image_id}

docker run -p ${local_port}:${container_port} ${image_id}

# docker run -p 3000:3000 1234567890
```

根據指定的 image id 來啟動容器（Container）。
需要注意的是 Dockerfile 裡的 `EXPOSE` 設定，是在設定 Container 裡的應用程式要在哪一個 port 號運行，而這個 port 號是在 Container 內部，我們無法讀取，所以必須要使用 `-p` 來將本地系統的 port 號對應到 Container 的 port 號。

#### 查看容器 (Container)

```bash
docker ps
```

查看目前正在運行的容器，並且列出這些容器的 id、image、執行時間、狀態等資訊。

#### 停止容器 (Container)

```bash
docker stop ${container_id}
```

停止正在運行的指定容器

