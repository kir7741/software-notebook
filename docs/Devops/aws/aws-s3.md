---
sidebar_position: 2
tags:
  - Devops
  - AWS
  - S3
last_update:
  date: 2024/06/04
  author: Joseph Lin
---

# S3

AWS S3（Amazon Simple Storage Service）是一個由 AWS 提供的`物件儲存服務`，主要用來儲存和讀取任何數量的資料，如圖片、影片、備份檔案、網站靜態資源、應用程式設定檔等，主要是基於 Region 的一個服務，但命名卻是全球唯一。

## Core concepts

- Bucket：類似於資料夾，用來存放資料的容器。
- Object：S3 中的資料單位，包含資料本身和相關的元資料（metadata），例如檔案名稱、大小、類型等。
- Key：物件在 S3 中的唯一識別碼，通常是物件的完整路徑（例如：`folder1/folder2/file.txt`）。
- Region：AWS S3 的地理區域，S3 是個以 Region 為範圍的服務，選擇適當的區域可以降低延遲和成本。

### (一)、Polices

S3 是用來存取檔案的地方，因此 S3 的權限管理是非常重要的。S3 的權限管理主要是以下幾種方式處理：

1. IAM：使用 IAM 來規定哪些使用者(IAM User)或角色(IAM Roles)可以使用
2. Bucket Policy：目前的主流方式，針對特定的 bucket 來設定權限，例如僅能夠過 cloudfront 存取，或是僅能夠給某些使用者使用。使用 JSON 格式來設定。

### (二)、Versioning

S3 支援物件版本控制（Versioning），可以讓使用者在同一個 bucket 中儲存多個版本的物件。這樣可以避免意外刪除或覆蓋物件的情況，並且可以隨時恢復到先前的版本。

### (三)、Replication

S3 支援物件複製（Replication），但需要開啟版本控制功能才能使用，而在有正確設置 IAM 全縣的情況下，甚至可以跨帳號複製。

S3 的複製分為兩種：

- 跨區域複製（Cross-Region Replication, CRR）：將物件從一個區域的 bucket 複製到另一個區域的 bucket。
  - 達成 lower latency：可以讓使用者在不同區域都能夠快速存取資料。
- 同區域複製（Same-Region Replication, SRR）：將物件從一個區域的 bucket 複製到同一個區域的另一個 bucket。
  - 方便快速建立開發與正式環境

### (四)、Storage Classes

S3 提供多種儲存類別（Storage Classes），可以根據資料的存取頻率和成本需求選擇適合的儲存類別，也可以透過 S3 lifecycle 來自動選擇儲存類別。常見的儲存類別包括：

1. Standard：適合頻繁存取的資料，提供高可用性和低延遲，預設的選項。

2. Standard-Infrequent-Access：

  - 訪問頻率較低，但需要在需要時快速被訪問。
  - 價格比 Standard 低，但存取費用較高。
  - 主要用來 Disaster Recovery、備份。

3. One Zone-Infrequent-Access：

  - 在單一 AZ 裡有高度持久性(High Durability)，檔案遺失率很低，但 AZ 故障時，數據就會遺失。
  - 可用性(Availability)較低，故障的時間比較長。

4. Glacier：適合長期存儲的資料，存取速度較慢，但成本最低。

  - Instant retreieval
    - 最短儲存期間是 90 天，每季讀取一次資料的速度是毫秒級別。
  - Flexible Archive
  - Deep Archive：最短儲存期間是 180 天，最快也要 12 小時才能存取資料，適合長期存儲的資料，成本最低。

5. Intelligent-Tiering：自動將資料移動到最適合的儲存類別，以降低成本。

##### Lifecycle

S3 lifecycle 是一個自動化的管理功能，可以根據設定的規則自動將物件移動到不同的儲存類別。像是 60 天後自動將物件移動到 Infrequent-Access，或是 365 天後自動刪除物件等。

### (五)、Storage Lens

S3 Storage Lens 是一個分析工具，可以提供 S3 的使用情況和成本分析。它可以幫助使用者了解 S3 的存儲使用情況、存儲類別分佈、物件大小分佈等，並且可以提供建議來優化 S3 的使用。

### (六)、Object Encryption

S3 支援物件加密，常見的加密方式包括：

1. Server-Side Encryption (SSE)，由伺服器端自動加密，可以使用以下幾種金鑰：
   - SSE-S3：使用 S3 管理的金鑰進行加密，預設開啟。
   - SSE-KMS：使用 AWS Key Management Service (KMS) 管理的金鑰進行加密，提供更高的安全性和控制。
   - SSE-C：使用客戶端提供的金鑰進行加密。
2. Client-Side Encryption，客戶端自行加密，將加密後的資料上傳到 S3。
3. Transit Encryption，傳輸過程中使用 SSL/TLS 加密，確保資料在傳輸過程中的安全性。這可以透過 Bucket Policy 強制要求。

## Related cli

#### 1. 列出 bucket

```bash
aws s3 ls

## 也可以針對特定的 profile
aws s3 ls --profile <your_profile>
```

#### 2. 移除指定 bucket 裡的檔案

```bash
aws s3 rm s3://<your_bucket>/<your_file> --recursive --profile=<your_profile>

# 當檔案是資料夾時，就需要帶入 --recursive 參數，讓他可以去遍歷資料夾裡面的檔案
```

#### 3. 複製(上傳)檔案到 S3

```bash
aws s3 cp <your_file> s3://<your_bucket>/<your_file> --recursive --profile=<your_profile>
```