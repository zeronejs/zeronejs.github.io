# Role authorization

Authorization refers to the process that determines what a user is able to do. For example, an administrative user is allowed to create, edit, and delete posts. A non-administrative user is only authorized to read the posts.

<!-- 授权是正交的，独立于身份验证。但是，授权需要身份验证机制。

有许多不同的方法和策略来处理授权。任何项目采用的方法取决于其特定的应用要求。本章介绍了几种可以适应各种不同要求的授权方法。 -->

## Basic RBAC implementation

- **Step 1**: Install a simple permission verification package provided by `Zerone`
```bash
yarn add @zeronejs/role-easy
```

- **Step 2**: let's create a Role enum representing roles in the system
::: tip
It is common/role/enums.ts
:::
```ts
export enum Role {
  User = 'user',
  Admin = 'admin',
}
```
- **Step 3**: Import RolesModule into the root module
```ts
import { RolesModule } from '@zeronejs/role-easy';
@Module({
    imports: [
        RolesModule,
        // ... Other modules
    ]
})
export class AppModule {}
```

- **Step 4**: Add the Roles decorator to the interface that requires permission validation
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
In this example, we assumed that `request.user` contains the user instance and allowed roles (under the `roles` property).

To make sure this example works, your `User` class must look as follows:

```ts
class User {
  // ...other properties
  roles: Role[];
}
```
:::