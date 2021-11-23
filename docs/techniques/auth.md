# Authentication

Authentication is an essential part of most applications. There are many different approaches and strategies to handle authentication. The approach taken for any project depends on its particular application requirements. This chapter presents several approaches to authentication that can be adapted to a variety of different requirements.

[JWT introduction](https://jwt.io/introduction/)

## Installation
Install an Auth authentication package provided by `Zerone`, including JWT Strategy and Local Strategy.
```bash
yarn add @zeronejs/auth
```

## Start using
Import the AuthModule into the root module.
::: tip
We configure the `AuthModule` using `forRoot()`, passing in a configuration object. [here](https://github.com/auth0/node-jsonwebtoken#usage) for more details on the available configuration options.
:::
```ts
import { AuthModule } from '@zeronejs/auth';
@Module({
    imports: [
        AuthModule.forRoot({
            secret: 'secretKey',
            signOptions: { expiresIn: '6h' },
        }),
        // ... Other modules
    ]
})
export class AppModule {}
```
::: danger
Do not expose this key publicly. We have done so here to make it clear what the code is doing, but in a production system you must protect this key using appropriate measures such as a secrets vault, environment variable, or configuration service.
:::
The JWT Strategy is enabled globally by default. If the interface needs to skip JWT validation, use the decorator `@SkipJwtAuth`
```ts
    @SkipJwtAuth()
    @Post('auth/register')
    async register(@Body() createUserDto: UserCreateDto) 
```

## The sample

Typically, you can use this module to implement login registration
```ts
import { UseGuards } from '@nestjs/common';
import { SkipJwtAuth, AuthService, LocalAuthGuard, Request, encryptedUserPassword } from '@zeronejs/auth';

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
To invoke the `login` interface(Or when you use `LocalAuthGuard`), you need to provide the `username` and `passwrod` fields.
:::