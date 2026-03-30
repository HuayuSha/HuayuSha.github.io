---
layout: single
title: "Guestbook / 留言板"
permalink: /guestbook/
author_profile: false
share: false
related: false
comments: false
---

欢迎留言，建议附上你的姓名/单位/联系方式与想交流的话题。  
Please leave a message with your name, affiliation, and topic of interest.

> 当前版本使用 GitHub Issues 驱动的留言系统（Utterances）。  
> This version uses Utterances (GitHub Issues based).

### Privacy note / 隐私说明

- 这是静态站点，**不直接存储访问者 IP**。  
- 留言会存储在仓库 Issues 中，并受 GitHub 平台规则约束。  
- 如需“记录 IP + 后台管理”，可在后续接入 Cloudflare Worker + D1（需单独配置与隐私告知）。

<script src="https://utteranc.es/client.js"
        repo="HuayuSha/HuayuSha.github.io"
        issue-term="pathname"
        label="guestbook"
        theme="preferred-color-scheme"
        crossorigin="anonymous"
        async>
</script>
