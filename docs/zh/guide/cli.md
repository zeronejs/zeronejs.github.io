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
  help [command]        display help for command
```
## info

输出当前系统和依赖相关的信息。

在你想要检查你的环境，或者提交 Issue 时候，可以使用该命令。
```bash
zerone info
```
## new

新建一个Zerone项目。

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
`generate`会读取当前命令行目录下所有*.entity.ts文件，并生成与之相关的 CRUD，您仅需写一个[表结构](https://typeorm.io/#/entities)。
::: tip
生成的 Module类 需要导入到根模块。
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

会编译打包项目中的ts文件，它与`tsc`的区别在于 可以复制其他文件 如：package.json等
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

