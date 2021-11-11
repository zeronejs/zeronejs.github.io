# Typescript AST（抽象语法树）

`TypeScript AST` 的读取是一个挑战，这个库封装了 TypeScript compiler API，并且它很简单。

## 手动安装

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add @zeronejs/ast
```
  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash
npm install @zeronejs/ast
```

  </CodeGroupItem>
</CodeGroup>

## 解释器

根据不同的声明方式 `Zerone` 提供了多种解释器

### Imports 
假设您有一个文件 `source.ts` ,并提供以下三种导入方式
```ts
import * as ts from 'typescript';
import { readFileSync } from 'fs';
import path, { join } from 'path';

```
创建一个文件 `interpret.ts`, 并引入`@zeronejs/ast`
::: tip
`InterpretCore`是解释器的核心依赖
:::

```ts
import { ImportsInterpret, InterpretCore } from '@zeronejs/ast';
import { join } from 'path';

const interpretCore = new InterpretCore(join(__dirname, 'source.ts'));
const imports = new ImportsInterpret(interpretCore).interpret();

console.log(imports)
// => [
//      { from: 'typescript', elements: [], namespaceImport: 'ts' },
//      { from: 'fs', elements: [ 'readFileSync' ] },
//      { from: 'path', elements: [ 'join' ], defalutImport: 'path' }
// ]
```

### Classes 
在您的源文件中声明一个类
```ts
/**
 * 用户表
 */
@Entity()
export class UserEntity {
	/**
	 * id
	 */
	@PrimaryGeneratedColumn()
	id: number;
	/**
	 * 用户名
	 */
	@Index({ unique: true })
	@Column({ unique: true })
	username: string;
	/**
	 * 备注
	 */
	@Column({ default: 'desc' })
	desc?: string;
}

```
use

```ts
import { ClassesInterpret, InterpretCore } from '@zeronejs/ast';
import { join } from 'path';

const interpretCore = new InterpretCore(join(__dirname, 'source.ts'));
const classes = new ClassesInterpret(interpretCore).interpret();

console.log(imports)
/**
 * => [
    {
        "name": "UserEntity",
        "decorators": [{"name": "Entity",...}],
        "documentation": "用户表",
        "properties": [
            ...
            {
                "name": "username",
                "documentation": "用户名",
                "isOptional": false,
                "type": {"value": "string","typeReferences": []}
                "decorators": [
                    {
                        "name": "Index",
                        "expression": {
                            "args": [{"unique": "true"}]
                        }
                    },
                    ...
                ],
                
            },
            ...
        ]
    }
]
 * 
 */
```

### enums

获取所有枚举

```ts
import { EnumsInterpret, InterpretCore } from '@zeronejs/ast';
import { join } from 'path';

const interpretCore = new InterpretCore(join(__dirname, 'source.ts'));
const enums = new EnumsInterpret(interpretCore).interpret();

console.log(enums)

```

### variables

获取所有变量

```ts
import { VariableStatement, InterpretCore } from '@zeronejs/ast';
import { join } from 'path';

const interpretCore = new InterpretCore(join(__dirname, 'source.ts'));
const vars = new VariableStatement(interpretCore).interpret();

console.log(vars)

```
### typeAlias

获取所有类型别名

```ts
import { TypeAliasDeclaration, InterpretCore } from '@zeronejs/ast';
import { join } from 'path';

const interpretCore = new InterpretCore(join(__dirname, 'source.ts'));
const typeAlias = new TypeAliasDeclaration(interpretCore).interpret();

console.log(typeAlias)

```
### interfaces

获取所有接口

```ts
import { InterfaceDeclaration, InterpretCore } from '@zeronejs/ast'; 
import { join } from 'path';

const interpretCore = new InterpretCore(join(__dirname, 'source.ts'));
const interfaces = new InterfaceDeclaration(interpretCore).interpret();

console.log(interfaces)

```
