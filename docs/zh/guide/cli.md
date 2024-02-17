# 命令行接口

<!-- <NpmBadge package="@zeronejs/cli" /> -->

Zerone 命令行接口是由 [@zeronejs/cli](https://www.npmjs.com/package/@zeronejs/cli) 包提供的。

```bash
npm i -g @zeronejs/cli
```

执行 `zerone --help` 来获取下列帮助信息：

```bash
Usage: zerone <command> [options]

Options:
  -v, --version         Output the current version.
  -h, --help            Output usage information.

Commands:
  new|n [name]          Generate New Zerone application.
  build [options]       ts代码打包为js
  info|i                Display Zerone project details.
  generate|g [options]  Generate a Zerone CRUD element
  api                   Generate Swagger Api
  help [command]        display help for command
```

## api

读取 swagger(v3)的文档，生成前端相应的 ts/js 代码
::: tip
如果您是前端开发者，这将很有帮助。
:::

```bash
Usage: zerone api [options]

Generate Swagger Api

Options:
  -d, --delete       删除之前生成的代码.
  -js, --javascript  生成js代码.
  -p, --path <path>  指定 "swagger.config.json "文件夹的路径（相对于当前位置）
  -h, --help         Output usage information.
```

- **步骤 1**: 你需要在生成 api 的位置添加一个 `swagger.config.json` 配置文件

  > 配置示例
  >
  > ```ts
  > {
  >     "docsUrl": "http://www.example.com/v3/api-docs",
  >     "includeTags": [],
  >     "excludeTags": ["bot-callback-controller"],
  >     "axiosInstanceUrl": "@/utils/request",
  >     "prefix": "",
  >     "vueUseAxios": true,
  > }
  > ```

- **步骤 2**: 运行命令

```bash
zerone api
```

##### 参数说明

| 参数             | 说明                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| docsUrl          | json 文档地址                                                                                                 |
| includeTags      | 要包含的 tags（不填或空数组表示全部包含）                                                                     |
| excludeTags      | 要排除的 tags                                                                                                 |
| axiosInstanceUrl | axios 实例地址 （默认：@/utils/request）                                                                      |
| prefix           | 接口要添加的前缀                                                                                              |
| vueUseAxios      | 同时生成 vueuse 中的 [useAxios](https://vueuse.org/integrations/useAxios/) （需要安装`@vueuse/integrations`） |

## info

输出当前系统和依赖相关的信息。

在你想要检查你的环境，或者提交 Issue 时候，可以使用该命令。

```bash
zerone info
```

## new

新建一个 Zerone 项目。

```bash
Usage: zerone new|n [options] [name]

Generate New Zerone application.

Options:
  -h, --help  Output usage information.
```

## generate

通常，在开发过程中，我们每创建一个表都需要创建与之相关的 CRUD 接口或服务， 其中充斥着大量的 C / V 操作、创建多个
文件，这其中还有重命名等多个操作，既浪费时间，也不会有技术提升。

并且初级开发者在执行上述操作时，经常因复制或重命名等低级失误导致项目进度卡住。

`generate`旨在帮助开发者降低重复工作量，帮您在一盏茶的功夫完成工作。并且程序生成的代码命名就是正确的，不会出现低级失误。

<!-- ::: tip
您仅需写一个表结构，执行一行命令，即可生成 CRUD
::: -->

`generate`会读取当前命令行目录下所有\*.entity.ts 文件，并生成与之相关的 CRUD，您仅需写一个[表结构](https://typeorm.io/#/entities)。
::: tip
生成的 Module 类 需要导入到根模块。
:::

```bash
Usage: zerone generate|g [options]

Generate a Zerone CRUD element

Options:
  -d, --delete       Delete files generated before this module.
  -p, --path <path>  Specifies the path to the "entities" folder (relative to the command line).
  -h, --help         Output usage information.
```

## build

会编译打包项目中的 ts 文件，它与`tsc`的区别在于 可以复制其他文件 如：package.json 等
::: tip
如果您是库开发者，这将很有帮助。

但在实际开发过程中，您可能不需要它，请使用`npm run build`。
:::

```bash
Usage: zerone build [options]

ts代码打包为js

Options:
  -p, --path <path>  Specify the path of the folder where "tsconfig.json" is located.
  -d, --delete       Delete files specified by "outDir".
  -h, --help         Output usage information.
```
