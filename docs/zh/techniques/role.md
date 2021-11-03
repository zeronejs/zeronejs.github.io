# 角色授权

授权是指确定用户能够做什么的过程。

例如，允许管理用户创建、编辑和删除帖子。非管理员用户仅被授权阅读帖子。

<!-- 授权是正交的，独立于身份验证。但是，授权需要身份验证机制。

有许多不同的方法和策略来处理授权。任何项目采用的方法取决于其特定的应用要求。本章介绍了几种可以适应各种不同要求的授权方法。 -->

## 基本的 RBAC 实现

- **步骤1**: 安装Zerone 提供的一个简单的权限验证包
```bash
yarn add @zeronejs/role-easy
```

- **步骤2**: 让我们创建一个Role代表系统中角色的枚举
::: tip
它在 common/role/enums.ts
:::
```ts
export enum Role {
  User = 'user',
  Admin = 'admin',
}
```
- **步骤3**: 将RolesModule导入根模块
```ts
import { RolesModule } from '@zeronejs/role-easy';
@Module({
    imports: [
        RolesModule,
        // ... 其他模块
    ]
})
export class AppModule {}
```

- **步骤4**: 在需要权限验证的接口加入 Roles 装饰器
```ts
import { Roles } from '@zeronejs/role-easy';
import { Role } from './common/role/enums';

...
@Get()
@Roles(Role.Admin)
getHello(): string {
    return this.appService.getHello();
}
...
```


::: tip
在这个例子中，我们假设request.user包含用户实例和允许的角色（在roles属性下）

为确保此示例有效，您的User类必须如下所示：

```ts
class User {
  // ...other properties
  roles: Role[];
}
```
:::