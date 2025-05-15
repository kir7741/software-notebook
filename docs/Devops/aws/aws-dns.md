---
sidebar_position: 5
tags:
  - Devops
  - AWS
  - DNS
  - Route53
last_update:
  date: 2025/05/09
  author: Joseph Lin
---

# AWS Route 53

DNS 最主要的功能就是將網域名稱轉換成 IP 位址，這樣使用者就可以透過網域名稱來存取網站，而不需要記住 IP 位址，在收到 client 的請求時，會將 Domain 解析，並找到相對應的 IP 位址，根據這個 IP 位址來取得網站檔案。而 AWS 的 DNS 服務就是 `Route 53`，它提供了 DNS 的解析服務，並且可以與其他 AWS 的服務整合，像是 `S3`、`EC2`、`CloudFront` 等等。

## Core concepts

### (ㄧ)、Terminologies

- Domain Registrar：網域註冊商如 AWS Route 53、GoDaddy、Namecheap 等等。主要是用來註冊網域名稱的服務商，並且提供 DNS 的解析服務。AWS Route 53 是 AWS 提供的網域註冊商，可以直接在 AWS 上註冊網域名稱。

- DNS Records：DNS 紀錄是用來將網域名稱轉換成 IP 位址的紀錄，主要有 A、CNAME、MX、TXT 等等。這些紀錄會告訴 DNS 伺服器如何將網域名稱轉換成 IP 位址，並且可以設定 TTL（Time to Live）來控制紀錄的有效期限。

- Top Level Domain (TLD)：網域名稱的最高層級，如 .com、.net、.org 等等。這些網域名稱是由 ICANN（Internet Corporation for Assigned Names and Numbers）所管理的，並且可以用來註冊網域名稱。

- Second Level Domain (SLD)：網域名稱的第二層級，如 amazon.com, google.com 等等。

- Subdomain：網域名稱的子網域，如 www.amazon.com、mail.google.com 等等。

- FQDN：完全合格的網域名稱（Fully Qualified Domain Name），是指完整的網域名稱，包括主機名稱和網域名稱，如 api.www.example.com。

### (二)、How DNS works

DNS 的工作原理是 client 端發送請求時，會連線到 Local DNS Server，而 Local DNS Server 會依序去詢問，以 www.google.com 為例：

- 首先詢問 Root DNS Server，這個伺服器會告訴 Local DNS Server 哪個 TLD DNS Server 負責 `.com` 的解析。
- 接著 Local DNS Server 會詢問負責 `.com` 的 TLD DNS Server，這個伺服器會告訴 Local DNS Server 哪個 SLD DNS Server 負責 `google.com` 的解析。
- 最後 Local DNS Server 會詢問負責 `google.com` 的 SLD DNS Server，這個伺服器會告訴 Local DNS Server `www.google.com` 的 IP 位址。

### (三)、Records

records 是用來將網域名稱轉換成 IP 位址的紀錄，簡單說明就是你希望如何控制路由的流量(How you want to route traffic for a domain)，

一個 record 會包含以下的資訊：

1. Domain/subdomain：網域名稱或子網域名稱，如 www.example.com、api.example.com 等等。
2. Record type：紀錄的類型，如 A、CNAME、MX、TXT 等等。
3. value：紀錄的值，如 IP 位址。
4. TTL：紀錄的有效期限，單位是秒，預設是 300 秒。
5. Routing policy：路由策略，決定如何回應 client 的請求。

而 Record type 主要有以下幾種：

1. A - IPv4 的紀錄，將 domain 對應到 IPv4 的 ip 上，像是 example.com 會對應到 1.2.3.4
2. AAAA - IPv6 的紀錄，像是 example.com 會對應到 2001:db8::1
3. CNAME
4. NS


