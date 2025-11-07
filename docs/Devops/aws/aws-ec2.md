---
sidebar_position: 4
tags:
  - Devops
  - AWS
  - EC2
last_update:
  date: 2025/04/29
  author: Joseph Lin
---

# AWS EC2

EC2（Elastic Compute Cloud）是 AWS 提供的虛擬伺服器服務，主要用來提供彈性的計算能力，讓使用者可以根據需求隨時啟動或關閉虛擬伺服器。EC2 可以被視為 AWS 的虛擬機器服務，並且可以與其他 AWS 服務整合，如 S3、RDS、ELB 等等。

## Core concepts

## Storage

### (一)、AWS EBS

EBS（Elastic Block Store）是 AWS 提供的區塊儲存服務，主要用來為 EC2 instance 提供持久性儲存，但也可以設定成 EC2 關閉就刪除(Delete on Terminate)。EBS 可以被視為 EC2 實例的硬碟，並且可以在實例之間進行快照和備份。

EBS 一次僅能綁在一個 instance 上，但一個 instance 可以綁定多個 EBS，且 EBS 是跟 AZ （可用區）綁定的，這意味著 EBS 只能在同一個 AZ 中使用，無法跨 AZ 使用。

- network drive：EBS 是透過網路進行存取，雖然可以保留資料，但多少會有延遲的問題。
- snapshot：EBS 的快照，主要用於備份資料，可以跨 AZ 以及 Region 使用。
- volumn: EBS 的磁碟區， 是 EBS 的一個儲存單位，可以想像成掛載在 EC2 上的虛擬硬碟。可以啟用預設預設加密，儲存的資料、傳輸過程、快照都會進行加密，這樣可以確保資料的安全性。
  - Root volumn：預設就會有的磁碟區，預設會是 Delete on Terminate。
  - other volumn：除了 Root volumn 之外的磁碟區，預設不會是 Delete on Terminate。

> 例外狀況：io2 volumn 可以掛載在多個 EC2 上，這樣可以讓多個 EC2 之間共享資料，最多可以掛載到 16 個。

### (二)、Instance Store

Instance Store 是 AWS 提供的臨時儲存空間，主要用來提供 EC2 instance 的臨時儲存空間，當 instance 關閉或終止時，Instance Store 中的資料會被刪除。Instance Store 的速度比 EBS 快，但不適合用來儲存重要的資料。

- hardware drive：Instance Store 是透過實體硬碟進行存取，在效能方便比 EBS 快。但缺點是資料會隨著 instance 的關閉或終止而消失。因此適合拿來處理快取或是臨時性的資料

### (三)、EFS

EFS（Elastic File System）是 AWS 託管的網路文件系統(network file system)，可掛載在不同的 EC2 上，並且可以跨 AZ 使用，成本也較高。

- 主要用於內容管理、網路服務、數據共用
- 透過 NFS（Network File System）協定來存取資料
- 僅能在 Linux 上使用
- 按次計費，不需提前設置使用容量
- storage tiers: 可以想成是檔案的生命週期策略，可以設定成幾天之後自動轉移到其他的儲存空間，這樣可以降低成本。
  - Standard：適合用於頻繁訪問的檔案
  - Infrequent Access：適合用於不常使用的資料，讀取時需要價格，但儲存的價格很低。
  - Archive：最少使用的檔案，僅能用於訪問，價格也因此而最低。


## Group

### (一)、Cluster placement group（集群放置群組）

HPC 係指 High Performance Computing，高效能運算，主要用於需要高效能運算的應用程式，如科學計算、金融分析、機器學習等。HPC 有一項關鍵是低延遲網路，而 Cluster placement group 有以下特點：

- 將 多個 EC2 instances 緊密的打包在 AZ 裡面，instances 之間有更低的延遲和更高的頻寬
- EC2 instances 放置在同一個物理位置，所以最大程度地減少實例之間的網絡延遲。

因此適合用於需要高效能運算的應用程式，但缺點是只能在同一個 AZ 裡面使用，出現故障時，整體會一起故障。

### (二)、Partition placement group

Partition placement group 主要用於大型分散式應用程式，如 HDFS、HBase 等等。Partition placement group 可以將 instances 分成多個 partition，每個 partition 裡面的 instances 會被分散在不同的硬體上，這樣可以降低硬體故障對應用程式的影響，並且可以提高應用程式的可用性和容錯性。


分區數量和範圍：

每個可用區（AZ）最多可以有7個分區。
分區放置群組可以橫跨同一區域中的多個可用區。
EC2實例數量：

分區放置群組可以容納數百個EC2實例。
分區之間的隔離：

每個分區中的實例與其他分區中的實例不共用機架（rack）。
這種隔離確保了在一個分區發生故障時，不會影響其他分區中的EC2實例。
分區信息： 

EC2實例可以透過 metadata 獲取有關分區的信息。
這些信息可以幫助實例進行相關操作或設置，以實現低延遲和高吞吐量的應用。
分區放置群組常用於需要高吞吐量和低延遲的應用程序，如HDFS（Hadoop分佈式文件系統）、HBase（分佈式NoSQL數據庫）、Cassandra（分佈式NoSQL數據庫）、Kafka（分佈式消息隊列）等。

### (三)、Spread placement group

Spread placement group 有以下特點：

- 可以將 instances 分散在不同的硬體上
- 可以跨多個 AZ
- 一個硬體故障，其他還可以使用
- 每個 AZ 最多只能有 7 個 instances

因此適合用於需要高可用性(High Availability)和容錯性的應用程式。