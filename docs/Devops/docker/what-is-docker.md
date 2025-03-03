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