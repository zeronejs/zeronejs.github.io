# 支付宝sdk

第一次使用，请先在 设置 > 开发设置 > 接口加签方式 配置[生成的公钥](https://miniu.alipay.com/keytool/create)，注意选择`其他（PKCS1）`

::: danger
不要公开暴露示例中的密钥（secret）。我们在这里这样做是为了向您明确代码在做什么，但在生产环境中，您必须使用适当的措施来保护此密钥，
例如秘钥库、环境变量或配置服务。
:::
## 安装
<!-- 安装`Zerone` 提供的微信登录服务包，其中包括 微信网页授权、微信小程序授权。 -->
<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add @zeronejs/alipay-sdk
```
  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash
npm install @zeronejs/alipay-sdk
```

  </CodeGroupItem>
</CodeGroup>

## 配置

在根模块输入`AlipayModule`

```ts
import { AlipayModule } from '@zeronejs/alipay-sdk';

@Module({
    ...
    imports: [
        ...,
        AlipayModule.forRoot({
            appId: 'xxxxxxxxxxx',
            privateKey: fs.readFileSync(join(__dirname, './privateKey.txt'), 'ascii'), //自行配置位置 
        }),
    ],
    ...
})
export class appModule {}
```
### 必填参数
| 参数       | 类型   | 说明                             |
| ---------- | ------ | -------------------------------- |
| appId      | String | 开放平台上创建应用时生成的 appId |
| privateKey | String | 应用私钥字符串                   |

### 可选参数
| 参数            | 类型    | 默认值                                | 说明                                              |
| --------------- | ------- | ------------------------------------- | ------------------------------------------------- |
| name            | String  | -                                     | 实例名称，在你需要配置多个appId时使用             |
| signType        | String  | RSA2                                  | 签名算法，不建议修改                              |
| alipayPublicKey | String  | -                                     | 支付宝公钥，需要对结果验签时候必填                |
| gateway         | String  | https://openapi.alipay.com/gateway.do | 支付宝网关地址 ，沙箱环境下使用时需要修改         |
| timeout         | Number  | 5000                                  | 网关超时时间，单位毫秒                            |
| camelcase       | Boolean | true                                  | 是否把网关返回数据中的的下划线 key 转换为驼峰写法 |
::: tip
你可以配置多个appId
```ts
AlipayModule.forRoot([
    {
        name: 'app1',
        appId: 'xxxxxxxxxxx1',
        privateKey: 'xxxxxxxxxxxxxxxxxx', 
    },
    {
        name: 'app2',
        appId: 'xxxxxxxxxxx2',
        privateKey: 'xxxxxxxxxxxxxxxxxx', 
    }
])
```
:::
## 使用
获取`alipay`实例，并调用sdk提供的方法
```ts
import { AlipayService } from '@zeronejs/alipay-sdk';
@Controller()
export class AlipayController {
    constructor(private readonly alipayService: AlipayService) {}
    @Post('demo')
    async demo(@Body() body: any) {
        // 获取 alipay 实例
        const alipay = this.alipayService.getInstance();
        const result = await alipay.exec('alipay.system.oauth.token', {
            grantType: 'authorization_code',
            code: body.code,
        });
        console.log(result);
    }
}

```
::: tip
当你[配置](#配置)了多个appId
```ts
const alipay = this.alipayService.getInstance('app1');
```
:::
### exec(method, params, options)
#### 必填参数
| 参数   | 类型   | 说明                                         |
| ------ | ------ | -------------------------------------------- |
| method | String | 调用的 Api，比如 `alipay.system.oauth.token` |

#### 可选参数

##### params
| 参数   | 类型   | 默认值 | 说明                                             |
| ------ | ------ | ------ | ------------------------------------------------ |
| params | Object | -      | Api 的请求参数（包含“公共请求参数”和“业务参数”） |
##### 请求参数
| 参数       | 类型   | 默认值 | 说明                                                                                                                                                  |
| ---------- | ------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| bizContent | Object | -      | 仅当 Api 文档的“公共请求参数”列表中存在 `biz_content`时，才需要通过 bizContent 设置业务参数，否则应该通过 params 传参，[业务参数 Demo](#包含业务参数)、[无业务参数 Demo](#不包含业务参数) |
##### options
| 参数         | 类型    | 默认值 | 说明                                                |
| ------------ | ------- | ------ | --------------------------------------------------- |
| validateSign | Boolean | false  | 是否对返回值验签（依赖[配置](#配置)的`支付宝公钥`） |
| formData     | Object  | -      | 文件上传类接口的请求参数                            |
| log          | Object  |        | 存在时会调用 info、error 方法写日志                 |

### checkNotifySign(postData)
通知验签
#### 参数
| 参数     | 类型   | 说明                                                   |
| -------- | ------ | ------------------------------------------------------ |
| postData | Object | 验签参数（需要先把验签的字符串消息转换为 Object 对象） |

## Demo
### 包含业务参数
::: tip
以“[统一收单交易关闭接口](https://opendocs.alipay.com/apis/api_1/alipay.trade.close)”为例，因为“公共请求参数”中包含 `biz_content` 所以需要通过 `bizContent`  传递文档下方的“请求参数”：
:::


![统一收单交易关闭接口详情](/images/guide/includeBusinessParameters.png)

```ts
const result = await alipay.exec('alipay.trade.close', {
    notifyUrl: 'http://notify_url',
    appAuthToken: '',
    // 通过 bizContent 传递请求参数
    bizContent: {
        tradeNo: '',
        outTradeNo: '',
        operatorId: '',
    },
});
// 从官方文档看到，result 包含 tradeNo、outTradeNo 2 个 key
console.log('tradeNo: %s, outTradeNo: %s', result.tradeNo, result.outTradeNo);
```

### 不包含业务参数
::: tip
以“[换取授权访问令牌](https://opendocs.alipay.com/apis/api_9/alipay.system.oauth.token)”为例，因为“公共请求参数”中不包含 `biz_content` 所以参数需要直接放到 params 中：
:::

![换取授权访问令牌详情](/images/guide/notIncludeBusinessParameters.png)

```ts
const result = await alipay.exec('alipay.system.oauth.token', {
    // 请求参数
    grantType: 'authorization_code',
    code: 'code',
    refreshToken: 'token',
});
// result 为 API 介绍内容中 “响应参数” 对应的结果
console.log(result);
```