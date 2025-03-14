---
sidebar_position: 1
tags:
  - Devops
  - Container
  - Docker
last_update:
  date: 2025/02/27
  author: Joseph Lin
---

# What is docker

Docker 是一個開源的平台服務，用於開發、運行和部署應用程式。主要透過容器（container）的技術，將應用程式和相依的環境打包使其可以在任何環境中一致的運行。

想要更了解 Docker，就需要從 VM（Virtual Machine） 與 Docker 去比較兩者如何處理開發環境上的問題。

### VM（Virtual Machine）

VM 是一個虛擬化技術，可以在一台主機上運行多個虛擬機器，每個虛擬機器都有自己的作業系統和應用程式，並且可以獨立運行。可以在 Mac 中安裝 Windows 就是使用這項技術。但由於 VM 是個獨立運作的系統，因此會佔用大量的資源，像是會佔用大量的記憶體（Memory）、CPU、硬碟空間等，這造成了低性能的發生。

舉個例子：即便我的主機是 Linux 系統，如果在這主機上新增了其他也是使用 Linux 系統的 VM，那麼這個 VM 也會自己再運行另一個 Linux，這就佔據了大量的資源。

### Docker

在使用 Docker 時，Docker 會在主機上運行 Docker Engine（一個輕量的服務），並且透過 Docker Engine 來啟動一個或多個容器（Container）。每個 Container 是獨立運行的，並且會在 Container 內部安裝執行程式碼所需要的最低需求（ex: Node.js），也可以指定想要使用的作業系統，但這個被使用的作業系統也是羽量級的系統，可以確保你的程式正確執行，也不會像 VM 一樣佔用大量資源。

更重要的是，我們可以使用 Dockerfile 來作為 Container 的設定檔，這個設定檔又可以被 build 成映像檔（image），其他人只要有這個 image 就可以在自己的主機上運行一模一樣的 Container。

在了解兩者的差異之後，來介紹一些 Docker 的基本概念：

#### Image

根據 Dockerfile 所構建出來的映像檔，可以視為一個環境的快照，可透過這個快照建立出多個 Container。

映像還有個 layer 的概念，每一行 Dockerfile 裡面的指令都代表一個 Image layer，這些 layer 會被堆疊在一起，最後形成一個完整的映像檔。

#### Container

透過 Image 所建立起來的環境，具有獨立性，可執行應用程式。

可以把 Container 想像成一個獨立空間，除了有執行 Image 的區域之外，還有自己的 file system，可以儲存檔案，但這些檔案在 Container 被刪除後就會消失。

#### Volumn

呈上，如果想要永久保存 Container 上的資料，Docker 提供了 Volumn 這個概念與語法，可以將 Container 的資料夾與本地端的資料夾做映射，這樣就可以在 Container 被刪除後，還可以保留資料。

- anonymous volume：匿名的 Volumn，當你不指定 Volumn 的名稱時，Docker 會自動幫你產生一個隨機的名稱，並且存在某個指定的地方，生命週期會跟著 Container，如果 Container 關閉，資料也會隨著消失，所以主要來儲存一些應用程式執行時需要使用的暫存資料，像是 node_modules。

- name volumn：指定 Volumn 的名稱，這樣可以將資料永久的存在這個 Volumn 即便 Container 停止也可以持續保存。

- bind mount：將本地端的資料夾與 Container 的資料夾做映射，這樣可以在本地端修改檔案，Container 也會同步更新，主要是用在開發環境時，需要讓檔案修改即時反應在 Container 上。

