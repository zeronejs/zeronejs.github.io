---
sidebar: auto
---
# 贡献指南

## 概览

在 `packages` 目录下存放了多个互相关联的独立 Package 。

- `@zeronejs/cli`: 命令行接口 (CLI) 模块。包含创建 Zerone 项目，一键生成 CURD ，build 等功能。

- `@zeronejs/role-easy`: 简单的角色授权模块。

- `@zeronejs/auth`: 身份认证模块。

- `@zeronejs/redis`: redis模块。

- `@zeronejs/utils`: 仅可以在 Node 端使用的工具函数模块。

## 开发配置

开发要求：

- [Node.js](http://nodejs.org) **version 16+**
- [pnpm](https://pnpm.io/zh/)

克隆代码仓库，并安装依赖：

```bash
pnpm i
```

本项目开发使用的一些主要工具：

- [TypeScript](https://www.typescriptlang.org/) 作为开发语言
- [Jest](https://jestjs.io/) 用于单元测试
- [ESLint](https://eslint.org/) 用于代码检查

## 开发脚本

### `pnpm test`

`test` 命令使用 Jest 来运行单元测试。

### `pnpm commit`

`commit` 命令使用 [git-cz](https://github.com/streamich/git-cz) ,在您进行代码提交时的`消息`。

### `pnpm build`

`build` 命令使用 [zerone cli](https://zerone.top/zh/guide/cli.html) build命令 。

## 文档

源码在[这里](https://github.com/zeronejs/zeronejs.github.io)

所有的 Markdown 源文件都放置在 `docs` 目录下。我们维护了两种翻译：

- 英语 (en-US) 在 `/` 路径下
- 中文 (zh-CN) 在 `/zh/` 路径下


我们在 [GitHub Pages](https://pages.github.com) 部署的 生产 版本。该站点是从最新的提交中[自动构建](https://github.com/features/actions)而来。域名为 [https://zerone.top](https://zerone.top)。
