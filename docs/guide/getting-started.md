# Getting Started

## Prerequisites

- [Node.js v12+](https://nodejs.org/)
<!-- - [Yarn v1 classic](https://classic.yarnpkg.com/zh-Hans/) （可选） -->

<!-- ::: tip
- 使用 [pnpm](https://pnpm.io/zh/) 时，你需要在 [`.npmrc`](https://pnpm.io/zh/npmrc#shamefully-hoist) 文件中设置 `shamefully-hoist=true` 。
- 使用 [yarn 2](https://yarnpkg.com/) 时，你需要在 [`.yarnrc.yml`](https://yarnpkg.com/configuration/yarnrc#nodeLinker) 文件中设置 `nodeLinker: 'node-modules'` 。
::: -->

## Manual Installation

This chapter will help you build a simple Zerone base service from scratch.

- **Step 1**: Install Zerone CLI tool and create a new project

```bash
npm i -g @zeronejs/cli
zerone new project-name
cd project-name
```

- **Step 2**: Install the dependencies and run them

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


  Zerone launches a development server at[http://localhost:5000](http://localhost:5000). [http://localhost:5000/docs](http://localhost:5000/docs) started a Swagger open API.

You should now have a simple working Zerone server.
<!-- 接下来，了解一下 Zerone [目录](./dir-structure.md) 相关的内容。 -->

## Generate CURD by one key

After the project is created, it carries a user entity, and this section will help you generate the interface with one click.

::: tip
The generate command reads [the table structure](https://typeorm.io/#/entities) of all *.entity.ts files in the current directory

You need to enter this folder
```bash
cd src/api/user/entities/
```
:::
With a single command, a CRUD is generated。
```bash
zerone generate
```
Restart the project
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
 
View the generated interface on [http://localhost:5000/docs](http://localhost:5000/docs)

::: tip
This project is built on `TypeOrm`. For personalized requirements such as table association, please refer to [typeorm](https://typeorm.io/#/relations)
:::

## Backstage

Open the [http://localhost:5000/admin](http://localhost:5000/admin)to view the backstage data.

::: tip
Click login directly.
Configuration file in `src/common/admin/adminOption.ts`
:::