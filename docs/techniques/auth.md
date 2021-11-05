# Authentication

Authentication is an essential part of most applications. There are many different approaches and strategies to handle authentication. The approach taken for any project depends on its particular application requirements. This chapter presents several approaches to authentication that can be adapted to a variety of different requirements.

[JWT introduction](https://jwt.io/introduction/)

## Authentication requirements

- **Step 1**: Install an Auth authentication package provided by `Zerone`, including JWT Strategy and Local Strategy
```bash
yarn add @zeronejs/auth
```

- **Step 2**: Import the AuthModule into the root module
::: tip
Or import into the module where you depend on `AuthService`
:::
```ts
import { AuthModule } from '@zeronejs/auth';
@Module({
    imports: [
        AuthModule,
        // ... Other modules
    ]
})
export class AppModule {}
```
::: tip
The JWT Strategy is enabled globally by default. If the interface needs to skip JWT validation, use the decorator `@SkipJwtAuth`
```ts
    @SkipJwtAuth()
    @Post('auth/register')
    async register(@Body() createUserDto: UserCreateDto) 
```
:::

## The sample

Typically, you can use this module to implement login registration
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
To invoke the `login` interface(Or when you use `LocalAuthGuard`), you need to provide the `username` and `passwrod` fields.
:::