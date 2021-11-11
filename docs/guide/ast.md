# Typescript AST

Reading the `TypeScript AST` is a challenge. The library encapsulates the TypeScript Compiler API and is simple.

## Installing

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add @zeronejs/ast-ts
```
  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash
npm install @zeronejs/ast-ts
```

  </CodeGroupItem>
</CodeGroup>

## Interprets

`Zerone` offers a variety of interpreters depending on how it is declared

### Imports 
Suppose you have a file `source.ts` that provides the following three import options
```ts
import * as ts from 'typescript';
import { readFileSync } from 'fs';
import path, { join } from 'path';

```
Create a file `interpret.ts` and import `@zeronejs/ast-ts`
::: tip
`InterpretCore` is a core dependency for the interpreter
:::

```ts
import { ImportsInterpret, InterpretCore } from '@zeronejs/ast-ts';
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
Declare a `class` to your source file
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
import { ClassesInterpret, InterpretCore } from '@zeronejs/ast-ts';
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

Get all `enums`

```ts
import { EnumsInterpret, InterpretCore } from '@zeronejs/ast-ts';
import { join } from 'path';

const interpretCore = new InterpretCore(join(__dirname, 'source.ts'));
const enums = new EnumsInterpret(interpretCore).interpret();

console.log(enums)

```

### variables

Get all `variables`

```ts
import { VariableStatement, InterpretCore } from '@zeronejs/ast-ts';
import { join } from 'path';

const interpretCore = new InterpretCore(join(__dirname, 'source.ts'));
const vars = new VariableStatement(interpretCore).interpret();

console.log(vars)

```
### typeAlias

Get all `typeAlias`

```ts
import { TypeAliasDeclaration, InterpretCore } from '@zeronejs/ast-ts';
import { join } from 'path';

const interpretCore = new InterpretCore(join(__dirname, 'source.ts'));
const typeAlias = new TypeAliasDeclaration(interpretCore).interpret();

console.log(typeAlias)

```
### interfaces

Get all `interfaces`

```ts
import { InterfaceDeclaration, InterpretCore } from '@zeronejs/ast-ts'; 
import { join } from 'path';

const interpretCore = new InterpretCore(join(__dirname, 'source.ts'));
const interfaces = new InterfaceDeclaration(interpretCore).interpret();

console.log(interfaces)

```
