---
sidebar: auto
---
# Contributing Guide
## Overview

The `packages` directory houses multiple individual packages that are related to each other.

- `@zeronejs/cli`: Command line interface (CLI) module. Includes Zerone project creation, one-click generation of CURD, build and other functions.

- `@zeronejs/role-easy`: Simple role authorization module.

- `@zeronejs/auth`: Identity authentication module.

- `@zeronejs/redis`: Redis module.

- `@zeronejs/utils`: Tool function module.

## Development Setup

Pre-requirement：

- [Node.js](http://nodejs.org) **version 16+**
- [pnpm](https://pnpm.io/)

Clone the repo, and install dependencies：

```bash
pnpm i
```

Main tools that used in this project：

- [TypeScript](https://www.typescriptlang.org/) as the development language
- [Jest](https://jestjs.io/) for unit testing
- [ESLint](https://eslint.org/) for code linting

## Scripts

### `pnpm test`

The `test` script uses Jest to run unit testings

### `pnpm commit`

The `commit` command uses the `message` from [git-cz](https://github.com/streamich/git-cz) when you commit code.

### `pnpm build`

The `build` command uses [zerone cli](https://zerone.top/guide/cli.html) the build command.

## Documentation

Source code is [here](https://github.com/zeronejs/zeronejs.github.io)

All the markdown source files are placed in `docs` directory. We are maintaining two translations:

- English (en-US) in `/` path
- Chinese (zh-CN) in `/zh/` path


The production version we deployed on [GitHub Pages](https://pages.github.com).

The site is [automatically built](https://github.com/features/actions) from the latest submission. The domain name is [https://zerone.top](https://zerone.top).
