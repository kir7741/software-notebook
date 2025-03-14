---
sidebar_position: 3
tags:
  - Devops
  - Container
  - Docker
last_update:
  date: 2025/02/27
  author: Joseph Lin
---

# Docker Reference

| Instruction | Description | Sample | Sample Description |
| --- | --- | --- | --- |
| FROM | 以另一個映像檔為基礎去建構新的映像檔 | FROM node | 以 node 為基礎去建構映像檔 |
| COPY $host_file_path $container_file_path | 將本地端的檔案複製到 container 的指定路徑裡面 | COPY . /app | 以 Dockerfile 為基準，將除了 Dockerfile 以外的檔案都複製到 Container 裡面的 /app 資料夾底下 |
| WORKDIR | 設定指令要在 Container 的哪個目錄下執行 | WORKDIR /app  | 之後的所有指令都會在 /app 這個目錄下執行 |
| RUN | 在 Docker 建構 image 時執行的指令 | RUN npm install | 在 Container 中安裝 dependencies |
| CMD | 在 Docker Container 啟動時執行的指令 | CMD ["node", "index.js"] | 啟動 Container 時，會執行 node index.js |
| EXPOSE | Container 環境是獨立的，若是有應用程式在某個 port 號執行，需要將 port 號曝露出來 | EXPOSE 3000 | 將 Container 的 3000 port 曝露出來 |
| VOLUMN | 將 Container 的資料夾與本地端的資料夾做映射 | VOLUMN ["/app/temp"] | 將 Container 的 /app/temp 資料夾映射到本地端 |
| ARG | build-time argument，僅可以在 Dockerfile 中使用 | ARG NODE_VERSION=20 | 在 build image 時，可以傳入 NODE_VERSION 才指定版本 |
| ENV | run-time argument，可在 Dockerfile 中使用，也可以在應用程式中使用 | ENV NODE_VERSION=20 | 設定 NODE_ENV 為 production |

# Docker compose Reference

| Instruction | Description | Sample | Sample Description |
| --- | --- | --- | --- |
| version | 指定 Docker compose 的版本，版本會影響整個 docker compose 可以使用到的功能 | version: '3.8' | 指定 Docker compose 的版本為 3 |
| services | 定義要啟動的服務（容器）| services: frontend | 定義一個名為 frontend 的容器 |
| image | 指定容器使用的映像檔 | image: node | 使用 node 映像檔 |
| volumns | 設定這個服務需要使用到的 volumn | volumns: - /app/temp | 設定一個匿名的 volumn |

# Docker note

#### connect to host network

如果你在 host machine（主機）上起了一個服務，網址會是 localhost:3701，此時因為 Container 的封閉性，你無法在 Container 直接連線到 localhost:3701，這時候可以將網址改成 `host.docker.internal:3701`，這樣 Container 就可以連線到 host machine 上的服務。

#### connect to another container

- 先使用 docker container inspect ${container_name} 來查看 Container 資訊，裡面有個 NetworkSettings.IPAdress 可以得知這個服務起在哪個 IP 位址，但這個方法的缺點是每次 Container 重啟後，IP 位址會改變。

- 使用 Docker network：建立一個共通的 network，當多個 Container 都有連接到 network 時，即可以在程式碼內使用 container name 取代 IP 位址，這樣就可以在 Container 內部連線到其他 Container。

-  Docker compose 會替啟動的服務建立一個 network，所以可以直接使用服務名稱來連線，也因此 Docker compose 不需要設定 network。