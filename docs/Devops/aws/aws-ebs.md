---
sidebar_position: 5
tags:
  - Devops
  - AWS
  - EBS
last_update:
  date: 2025/04/29
  author: Joseph Lin
---

# AWS EBS

EBS（Elastic Block Store）是 AWS 提供的區塊儲存服務，主要用來為 EC2 instance 提供持久性儲存，但也可以設定成 EC2 關閉就刪除( Delete on Terminate)。EBS 可以被視為 EC2 實例的硬碟，並且可以在實例之間進行快照和備份。

EBS 一次僅能綁在一個 instance 上，但一個 instance 可以綁定多個 EBS，且 EBS 是跟 AZ （可用區）綁定的，這意味著 EBS 只能在同一個 AZ 中使用，無法跨 AZ 使用。

## Core concepts

- snapshot：EBS 的快照，主要是備份的資料，可以跨 AZ 以及 Region 使用，