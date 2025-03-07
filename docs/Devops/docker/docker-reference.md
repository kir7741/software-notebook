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