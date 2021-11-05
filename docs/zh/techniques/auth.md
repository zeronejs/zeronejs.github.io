# 身份验证

身份验证是大多数应用程序的重要组成部分。有许多不同的方法和策略来处理身份验证。任何项目采用的方法取决于其特定的应用要求。本章介绍了几种可适应各种不同要求的身份验证方法。

[JWT 介绍](https://jwt.io/introduction/)


- **步骤1**: 安装Zerone 提供的一个auth 身份验证包，其中包括jwt策略和local策略
```bash
yarn add @zeronejs/auth
```

- **步骤2**: 将AuthModule导入根模块
::: tip
或者导入到您依赖`AuthService`的那个模块
:::

```ts
import { AuthModule } from '@zeronejs/auth';
@Module({
    imports: [
        AuthModule,
        // ... 其他模块
    ]
})
export class AppModule {}
```
::: tip
默认情况下 jwt策略会全局开启，如果接口需要跳过jwt验证，请使用装饰器 `@SkipJwtAuth`
```ts
    @SkipJwtAuth()
    @Post('auth/register')
    async register(@Body() createUserDto: UserCreateDto) 
```
:::

## 示例

通常情况下，您可以使用此模块实现 登录 注册
```ts
import { UseGuards } from '@nestjs/common';
import { SkipJwtAuth, AuthService, LocalAuthGuard, Request } from '@zeronejs/auth';
import { encryptedUserPassword } from '@zeronejs/utils';

class AppController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ) {}
    
    @SkipJwtAuth()
    @Post('auth/register')
    async register(@Body() createUserDto: UserCreateDto) {
        const user = await this.userService.create({
            ...createUserDto,
            password: await encryptedUserPassword(createUserDto.password),
        });
        return this.authService.login(user);
    }

    @SkipJwtAuth()
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Req() req: Request) {
        return this.authService.login(req.user);
    }
```

::: tip
调用`login`接口时（或者说是当您使用`LocalAuthGuard`），您需要提供`username`和`passwrod`字段
:::