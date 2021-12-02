# 第三方登录

`Zerone` 提供多个服务，帮您快速接入第三方登录。

::: tip
当您获取完用户后，可以使用[身份验证](./auth.md)插件完成登录。
:::
::: danger
不要公开暴露示例中的密钥（secret）。我们在这里这样做是为了向您明确代码在做什么，但在生产环境中，您必须使用适当的措施来保护此密钥，
例如秘钥库、环境变量或配置服务。
:::
## 微信
安装Zerone 提供的微信登录服务包，其中包括 微信网页授权、微信小程序授权。
```bash
yarn add @zeronejs/wechat-login
```

### 微信网页授权

在你需要`微信网页授权`的模块（module）提供`WechatLoginOauth2Service`服务。

```ts
import { WechatLoginOauth2Service } from '@zeronejs/wechat-login';

@Module({
    ...
    providers: [..., WechatLoginOauth2Service],
})
export class userModule {}
```
##### 公众号配置 
请参阅[微信网页授权官网文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)提供的配置说明。

##### 功能
`WechatLoginOauth2Service`提供多个方法，你只需传递参数，`Zerone`帮你对接微信。
| 方法名             | 说明                                                                                                                                                |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| getCode            | [第一步：用户同意授权，获取code](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html#0)                  |
| getAccessToken     | [第二步：通过code换取网页授权access_token](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html#1)        |
| refreshAccessToken | [第三步：刷新access_token（如果需要）](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html#2)            |
| getUserInfo        | [第四步：拉取用户信息(需scope为 snsapi_userinfo)](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html#3) |
| checkAccessToken   | [附：检验授权凭证（access_token）是否有效](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html#4)        |

##### 示例

```ts
import { WechatLoginOauth2Service } from '@zeronejs/wechat-login';
import { Request, Response } from 'express';
...
@Controller()
class UserController { // 你的控制器
    constructor(
        // 注入服务
        private readonly wechatLoginOauth2Service: WechatLoginOauth2Service,
    ) {}
    
    @Get('/webLogin') // 自定义路由
    async webLogin(@Res() res: Response) {
        // 第一步
        const url = this.wechatLoginOauth2Service.getCode({
            appid: 'wx1d7fa6b14a9xxxxx', // 公众号appid
            redirect_uri: encodeURIComponent('https://www.example.com/webLogin/redirectUri'), // 授权后重定向的回调链接地址， 请填写你自己的
            scope: 'snsapi_userinfo', // 应用授权作用域 ,根据自己需求提供
        });
        return res.redirect(url);
    }
    // 填写的回调链接地址
    @Get('/webLogin/redirectUri')
    async redirectUri(@Req() req: Request) {
        // 第二步
        const actoken = await this.wechatLoginOauth2Service.getAccessToken({
            appid: 'wx1d7fa6b14a9xxxxx',// 公众号appid
            secret: 'xxxxxxxxxxxxxxx',// 公众号的appsecret
            code: req.query.code as string,
        });
        // 第四步
        const userInfo = await this.wechatLoginOauth2Service.getUserInfo({
            access_token: actoken.data.access_token,
            openid: actoken.data.openid,
            lang: 'zh_CN',
        });
        // ... 数据库、登录等等 
     
    }
```

### 微信小程序登录

在你需要`微信小程序登录`的模块（module）提供`WechatLoginMiniProgramService`服务。

```ts
import { WechatLoginMiniProgramService } from '@zeronejs/wechat-login';

@Module({
    ...
    providers: [..., WechatLoginMiniProgramService],
})
export class userModule {}
```
##### 登录时序 
登录流程时序详见 [小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)
##### 功能
`WechatLoginMiniProgramService`提供多个方法，你只需传递参数，`Zerone`帮你对接微信。
| 方法名         | 说明                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| code2session   | [code换取session_key、openid、unionid](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html) |
| getUserProfile | [完整用户信息的解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)                               |
| wxLogin        | jscode2session、getUserProfile 的合集                                                                                                      |

##### 示例

1. 小程序端调用 [wx.login()](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) 获取 临时登录凭证code ，并回传到开发者服务器。

2. 服务端通过`code` 换取session_key, openid和unionid

```ts
import { WechatLoginMiniProgramService } from '@zeronejs/wechat-login';
...
@Controller()
class UserController { // 你的控制器
    constructor(
        // 注入服务
        private readonly wechatLoginMiniProgramService: WechatLoginMiniProgramService,
    ) {}
    @Post('code2session') // 你的自定义路由
    async code2session(@Body() body: any) {
        const { code } = body;
        const data = await this.wechatLoginMiniProgramService.code2session({
            appId: 'wxbcf4c453d6exxxxx',
            secret: 'xxxxxxxxxxxxxxxxxxxx',
            code,
        });
        // ... 数据库、登录等等
    }
    
```
3. 小程序端调用 [wx.getUserProfile()](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html) 获取完整用户信息的加密数据`encryptedData`和加密算法的初始向量 `iv`。

4. 服务端解密数据

```ts
    ...
    @Post('getUserProfile') // 你的自定义路由
    async getUserProfile(@Body() body: any) {
        const { encryptedData, iv } = body;
        const data = this.wechatLoginMiniProgramService.getUserProfile({
            appId: 'wxbcf4c453d6exxxxx',
            encryptedData,
            iv,
            session_key, // 由第二步获取
        });
        // ... 数据库、登录等等
    }
    
```
##### 一步完成？
```ts
    ...
    const { code, encryptedData, iv } = body;
    const user = await this.wechatLoginMiniProgramService.wxLogin({
        appId: 'wxbcf4c453d6exxxxx',
        secret: 'xxxxxxxxxxxxxxxxxxxx',
        code,
        encryptedData,
        iv,
    });
    // ... 数据库、登录等等
```
