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

AWS S3（Amazon Simple Storage Service）是一個由 AWS 提供的`物件儲存服務`，主要用來儲存和讀取任何數量的資料，如圖片、影片、備份檔案、網站靜態資源、應用程式設定檔等。

## Core concepts

- Bucket：類似於資料夾，用來存放資料的容器。
- Object：S3 中的資料單位，包含資料本身和相關的元資料（metadata），例如檔案名稱、大小、類型等。
- Key：物件在 S3 中的唯一識別碼，通常是物件的完整路徑（例如：`folder1/folder2/file.txt`）。
- Region：AWS S3 的地理區域，S3 是個以 Region 為範圍的服務，選擇適當的區域可以降低延遲和成本。

## Related cli

#### 列出 bucket

```bash
aws s3 ls

## 也可以針對特定的 profile
aws s3 ls --profile <your_profile>
```

#### 移除指定 bucket 裡的檔案

```bash
aws s3 rm s3://<your_bucket>/<your_file> --recursive --profile=<your_profile>

# 當檔案是資料夾時，就需要帶入 --recursive 參數，讓他可以去遍歷資料夾裡面的檔案
```

#### 複製(上傳)檔案到 S3

```bash
aws s3 cp <your_file> s3://<your_bucket>/<your_file> --recursive --profile=<your_profile>
```