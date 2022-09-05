# 工具箱

ts 常用的一些工具类或方法

## 安装

<!-- 安装`Zerone` 提供的微信登录服务包，其中包括 微信网页授权、微信小程序授权。 -->
<CodeGroup>
  <CodeGroupItem title="YARN" >

```bash
yarn add @zeronejs/utils
```

  </CodeGroupItem>
  <CodeGroupItem title="PNPM" active>

```bash
pnpm add @zeronejs/utils
```

  </CodeGroupItem>
</CodeGroup>

## 概览

前端 dom 相关

- [LocalStorage](#localstorage) 有代码提示的 localstorage
- [SessionStorage](#sessionstorage) 有代码提示的 sessionStorage
- [getImageBase64](#getimagebase64) 获取图片的 base64 编码
- [downloadImage](#downloadimage) 单张图片下载

JSON 扩展

- [jsonMinify](#jsonminify) 去除 json 代码中的注释

日期

- [dateFormat](#dateformat) 日期格式化
- [beautifyTime](#beautifytime) 格式化时间为 刚刚，xx 分钟前，xx 小时前
- [getAgeByBirthday](#getagebybirthday) 根据生日获取年龄

[is](#is) 类型断言

实用类型别名

- [Merge](#merge) 类型合并
- [MergeType](#mergetype) 把一堆类型 如：`Partial<Pick<User, "name">> & Omit<User, "name"> ` 合并成简单的 `{name?:string;age:number}`
- [PickMethodsKey](#pickmethodskey) 选出方法的所有 key
- [PickReadonly](#pickreadonly)
- [PartialByKeys](#partialbykeys)
- [RequiredByKeys](#requiredbykeys)
- [DeepRequired](#deeprequired) 深度 Required

随机字符串

- [randomChars](#randomchars) 随机字符串, 包括大小写字母和数字
- [randomNumChars](#randomnumchars) 只包括数字
- [randomStrChars](#randomstrchars) 只有小写字母


## DOM

### LocalStorage

有代码提示的 localstorage

- 示例：

```ts
import { LocalStorage } from "@zeronejs/utils";
interface LocalStorageEntities {
  name: string;
  age: number;
}
export const myLocalStorage = new LocalStorage<LocalStorageEntities>();

myLocalStorage.setItem("age", 1);

const age = myLocalStorage.getItem("age");
```

- 你将会有一个友善的代码提示

![详情1](/images/techniques/utils/localStorageUse1.png)
![详情2](/images/techniques/utils/localStorageUse2.png)

### SessionStorage

用法与[LocalStorage](#localstorage) 相同。

- 示例：

```ts
import { SessionStorage } from "@zeronejs/utils";
```

### getImageBase64

获取图片的 base64 编码

- 示例：

```ts
import { getImageBase64 } from "@zeronejs/utils";

const img = document.createElement("img");
const res = getImageBase64(img);
```

### downloadImage

单张图片下载

- 示例：

```ts
import { downloadImage } from "@zeronejs/utils";

downloadImage("you img url", "filename.png");
```

## JSON 扩展

### jsonMinify

去除 json 代码中的注释

- 示例：

```ts
import { jsonMinify } from "@zeronejs/utils";

const source = `
// this is a JSON file with comments
{
    "foo": "bar",	// this is cool
    "bar": [
        "baz", "bum", "zam"
    ],
/* the rest of this document is just fluff
   in case you are interested. */
    "something": 10,
    "else": 20
}

/* NOTE: You can easily strip the whitespace and comments
   from such a file with the JSON.minify() project hosted
   here on github at http://github.com/getify/JSON.minify
*/`;
const assertValue =
  '{"foo":"bar","bar":["baz","bum","zam"],"something":10,"else":20}';

const isPass = jsonMinify(source) === assertValue;
```

## 日期

### dateFormat

日期格式化

- 示例：

```ts
import { dateFormat } from "@zeronejs/utils";

dateFormat(Date.now(), "YYYY-mm-dd HH:MM:SS");
```

### beautifyTime

格式化时间为 刚刚，xx 分钟前，xx 小时前

- 示例：

```ts
import { dateFormat } from "@zeronejs/utils";

dateFormat(Date.now(), "YYYY-mm-dd HH:MM:SS");
```

### getAgeByBirthday

根据生日获取年龄

- 示例：

```ts
import { getAgeByBirthday } from "@zeronejs/utils";

getAgeByBirthday(new Date("2020/07/01"));
```

## is 类型断言

- `isObjectLike`
- `isBoolean`
- `isString`
- `isNumber`
- `isSymbol`
- `isDate`
- `isInteger` 整数
- `isDecimal` 小数
- `isNegative` 负数
- `isPositive` 正数
- `isOdd` 奇数
- `isEven` 偶数
- `isUndefined`
- `isNull`
- `isNil` null 或 undefined
- `isError`

## 实用类型别名

### Merge

类型合并

- 示例：

```ts
import type { Merge } from "@zeronejs/utils";
type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Result = Merge<foo, coo>; //  to be {name: string, age: number, sex: string}
```

### MergeType

把一堆类型 如：`Partial<Pick<User, "name">> & Omit<User, "name"> ` 合并成简单的 `{name?:string;age:number}`

- 示例：

```ts
import type { MergeType } from "@zeronejs/utils";
interface User = {
  name: string;
  age: string;
}

type Result = MergeType<Partial<Pick<User, "name">> & Omit<User, "name">>; //  to be {name?:string;age:number}

```

### PickMethodsKey

选出方法的所有 key

### PickReadonly

- 示例：

```ts
import type { PickReadonly } from "@zeronejs/utils";
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: PickReadonly<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
```
### PartialByKeys

- 示例：

```ts
import type { PartialByKeys } from "@zeronejs/utils";
interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }
```

### RequiredByKeys

- 示例：

```ts
import type { RequiredByKeys } from "@zeronejs/utils";
interface User {
  name?: string;
  age?: number;
  address?: string;
}

type UserRequiredName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }
```

### DeepRequired

深度 Required

- 示例：

```ts
import type { DeepRequired } from "@zeronejs/utils";
interface User {
  name?: {
    first?: string;
    second?: string;
  };
  age?: number;
  address?: string;
}

type UserDeepRequired = DeepRequired<User>; // name: {first: string; ssecond: string;};age: number;address: string;}
```

## 随机字符串

### randomChars

随机字符串, 包括大小写字母和数字

- 示例：

```ts
import { randomChars } from "@zeronejs/utils";

randomChars();
```

### randomNumChars

随机字符串，只包括数字

- 示例：

```ts
import { randomNumChars } from "@zeronejs/utils";

randomNumChars();
```

### randomStrChars

随机字符串，只有小写字母

- 示例：

```ts
import { randomStrChars } from "@zeronejs/utils";

randomStrChars();
```
