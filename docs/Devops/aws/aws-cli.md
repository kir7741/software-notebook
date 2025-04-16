---
sidebar_position: 1
tags:
  - Devops
  - AWS
  - cli
last_update:
  date: 2025/04/16
  author: Joseph Lin
---

# aws cli

## install

```bash
# 可使用官方的安裝指令
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /

# 或者使用 Homebrew 安裝
brew install awscli
```

## configure

aws 的設定主要用來寫入權限，資訊會放在 `~/.aws/config` 以及 `~/.aws/credentials` 裡面。

而 aws 的設定有 profile 的概念，每個 profile 代表的是一個 aws 帳號，常用來處理環境的區分，像是 develop 環境有一個 profile，production 環境有一個 profile。
aws cli 會使用 `default` 的 profile，如果要使用其他的 profile，則需要在指令中加上 `--profile` 參數。

#### 設定 credentials

```bash
aws configure
# AWS Access Key ID [None]: <your_access_key_id>
# AWS Secret Access Key [None]: <your_access_key_id>
# Default region name [None]
# Default output format [None] - 通常會填 JSON
```

#### 列出所有的 profile

```bash
aws configure list-profiles
```

## S3

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