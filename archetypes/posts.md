---
title: {{ replace .TranslationBaseName "-" " " | title }}
date: {{ .Date }}
lastmod: {{ .Date }}
author: "A focused Idler"
avatar: "/avatar/avatar-512x512.png"
cover: "/cover/cover-meme.png"
images:
  - "/cover/cover-meme.png"
categories:
  - "Demo"
tags:
  - "Times"
  - "The last hugo theme you need"
nolastmod: true
draft: true
url: "../posts/{{ .File.BaseFileName }}"
isCJKLanguage: false
---

Place a summary of your post content here. This summary will appear on cards displayed on the home page.

<!--more-->

The remaining content of your post.
