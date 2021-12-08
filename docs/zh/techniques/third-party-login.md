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
安装`Zerone` 提供的微信登录服务包，其中包括 微信网页授权、微信小程序授权。
<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add @zeronejs/wechat-login
```
  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash
npm install @zeronejs/wechat-login
```

  </CodeGroupItem>
</CodeGroup>

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
        const { session_key, openid, unionid } = await this.wechatLoginMiniProgramService.code2session({
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
### 网站应用扫码登录

[网站应用微信登录开发指南](https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html)

### 服务器Token验证
#### 安装

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add @zeronejs/utils
```
  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash
npm install @zeronejs/utils
```

  </CodeGroupItem>
</CodeGroup>

```ts
import { wechatVerifyServerToken } from "@zeronejs/utils";
...
    @Get('/wx') // 你填写的服务器路由
    async wxServer(@Query() query: any) {
        const { signature, timestamp, nonce, echostr } = query;
        const token = '你填写的Token';
        return wechatVerifyServerToken({
            signature,
            timestamp,
            nonce,
            echostr,
            token
        })
    }
```

## 支付宝
本章将带您实现`小程序登录`、`PC网页内登录`
### 支付宝小程序登录
参考 [支付宝小程序获取会员基础信息](https://opendocs.alipay.com/mini/introduce/twn8vq)。

#### 依赖
- 支付宝sdk [@zeronejs/alipay-sdk](./alipay-sdk.md)
::: tip
示例由[uni-app](https://uniapp.dcloud.io/README)构建。你也可以使用其他或原生，用它只是给你提供思路。
:::
#### 第一步：添加授权按钮
```html
<button open-type="getAuthorize" @getAuthorize="getUser" 
    onGetAuthorize="getUser" onError="onAuthError" scope='userInfo'>
	会员基础信息授权
</button>
```

#### 第二步：授权登录和获取用户信息
```js
uni.login({
    success: (loginRes) => {
        // 获取用户信息
        uni.getUserInfo({
            provider: "alipay",
            success: (infoRes) => {
                const userInfo = JSON.parse(infoRes.response).response // 以下方的报文格式解析两层 response
                // 数据发送至服务器端
                uni.request({
                    url: `http://example.com/somePost`,
                    data: {
                        code: loginRes.code,
                        userInfo
                    },
                    method: "POST",
                    success: (res) => {
                        // 你的代码
                    }
                });
            }
        });
    }
});
```
#### 第三步：服务端获取userId
```ts
@Post('somePost')
async demo(@Body() body: any) {
    const alipay = this.alipayService.getInstance();
    const result = await alipay.exec('alipay.system.oauth.token', {
        grantType: 'authorization_code',
        code: body.code,
        // refreshToken: 'token'
    });
    console.log(result);
    // ... 数据库、登录等等
}
```
### PC网页内支付宝登录

适用于移动应用、网页应用（PC 站点）等其他应用类型,参考 [PC 网页内获取用户信息](https://opendocs.alipay.com/open/284/web)。
#### 依赖
- 支付宝sdk [@zeronejs/alipay-sdk](./alipay-sdk.md)
#### 第一步：URL拼接
在你的`Controller`控制器内
```ts
    @Get('/pclogin') // 自定义路由
    async pclogin(@Res() res: Response) {
        const alipay = this.alipayService.getInstance();
        const myURL = new URL('https://openauth.alipay.com/oauth2/publicAppAuthorize.htm');
        myURL.searchParams.set('app_id', alipay.config.appId);
        myURL.searchParams.set('scope', 'auth_user');
        myURL.searchParams.set(
            'redirect_uri',
            encodeURI('https://www.example.com/pclogin/notify')// 请填写你的授权回调地址
        );
        const url = myURL.href;
        return res.redirect(url);
    }
```

#### 第二步：授权登录和获取用户信息
```ts
    @Get('/pclogin/notify') // 自定义的授权回调页面
    async pcloginNotify(@Query() query: any) { // query携带auth_code、app_id、scope
        const alipay = this.alipayService.getInstance();
        // 第一步：换取 access_token 和 userId
        const result = await alipay.exec('alipay.system.oauth.token', {
            grantType: 'authorization_code',
            code: query.auth_code,
        });
        const { accessToken, userId, msg, code } = result as any;
        if (!accessToken || !msg) {
            console.log(msg, code)
            return result;
        }
        // 第二步：获取用户信息
        const user = await alipay.exec('alipay.user.info.share', {
            authToken: accessToken,
            bizContent: {},
        });
        // ... 数据库、登录等等
        console.log(user, userId);
    }
```
