---
sidebar_position: 3
tags:
  - Devops
  - AWS
  - CloudFront
last_update:
  date: 2025/04/29
  author: Joseph Lin
---

# CloudFront

CDN 指的是 `內容傳遞網路服務（Content Delivery Network）`，主要的概念是在全球網路設置大量的節點，並將資料放置在這些節點上，使用者可以就近選擇節點來下載資料，大幅降低資料讀取的時間。而 CDN 本身就符合 `Horizontal Scale` 的概念，一個節點故障，仍舊有其他大量的節點可以提供服務，這已提升了整體的穩定性。

而 AWS 的 CDN 服務就是 `cloudfront`，AWS 的節點稱作 `edge location`，而 `cloudfront` 會將資料放在這些節點上，並提供給使用者下載。`cloudfront` 也可以與其他 AWS 的服務整合，像是 `S3`、`EC2`、`ELB` 等等，這些服務都可以當作 `cloudfront` 的來源（origin），讓 `cloudfront` 可以將資料放在 edge location 上，並提供給使用者下載。

## Core concepts

#### Distribution

- Origin：指定 cloudfront 的來源，像是 `S3`、`EC2`、`ELB` 等等，這些服務都可以當作 `cloudfront` 的來源，可以設定多個 origin，之後再由 behavior 決定哪個路徑要使用哪個 origin。

- Behavior：定義多個 `path pattern` 的行為，每個 path 可以有自己的行為，行爲包含設定指定的 origin、是否要強制 redirect 到 HTTPS，是否要快取等等。也可以連動到指定的 `cloud function`。

