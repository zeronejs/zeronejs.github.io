# 快速上手

## 依赖环境

- [Node.js v12+](https://nodejs.org/zh-cn/)
<!-- - [Yarn v1 classic](https://classic.yarnpkg.com/zh-Hans/) （可选） -->

<!-- ::: tip
- 使用 [pnpm](https://pnpm.io/zh/) 时，你需要在 [`.npmrc`](https://pnpm.io/zh/npmrc#shamefully-hoist) 文件中设置 `shamefully-hoist=true` 。
- 使用 [yarn 2](https://yarnpkg.com/) 时，你需要在 [`.yarnrc.yml`](https://yarnpkg.com/configuration/yarnrc#nodeLinker) 文件中设置 `nodeLinker: 'node-modules'` 。
::: -->

## 手动安装

这一章节会帮助你从头搭建一个简单的 Zerone 基础服务。

- **步骤1**: 安装Zerone cli工具并新建项目

```bash
npm i -g @zeronejs/cli
zerone new project-name
cd project-name
```

- **步骤2**: 安装依赖并运行

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn
yarn start
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install
npm run start
```

  </CodeGroupItem>
</CodeGroup>


  Zerone 会在 [http://localhost:5000](http://localhost:5000) 启动一个开发服务器。[http://localhost:5000/docs](http://localhost:5000/docs) 启动一个 Swagger 开放api。

现在，你应该已经有了一个简单可用的 Zerone 服务器。
<!-- 接下来，了解一下 Zerone [目录](./dir-structure.md) 相关的内容。 -->

## 一键生成CURD

项目创建之后，会携带一个用户表，这一章节将帮助您一键生成接口

::: tip
generate 命令会读取当前目录下所有 *.entity.ts文件 的[表结构](https://typeorm.io/#/entities)

需要您进入此文件夹
```bash
cd src/api/user/entities/
```
:::
仅需一行命令，一套CRUD就生成了。
```bash
zerone generate
```
重启项目
 <CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn start
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm run start
```

  </CodeGroupItem>
</CodeGroup>
 
[http://localhost:5000/docs](http://localhost:5000/docs) 查看生成的接口
::: tip
本项目构建于typeorm, 如有表关联等个性化需求，请参考[typeorm](https://typeorm.io/#/relations)
:::

## 数据后台

打开[http://localhost:5000/admin](http://localhost:5000/admin)查看启动的数据后台。

::: tip
可直接点击登录。
配置文件在 `src/common/admin/adminOption.ts`
:::