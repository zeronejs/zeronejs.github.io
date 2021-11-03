# 高速缓存

[Redis](https://redis.io) 是一个高性能的key-value数据库

Redis 的出现，很大程度补偿了memcached这类key/value存储的不足，在部分场合可以对关系数据库起到很好的补充作用。
::: tip
您需要安装 [redis](https://redis.io/download) ，或者有一个有效的redis地址
:::

## Redis

- **步骤1**: 安装Zerone 提供的redis模块包
```bash
yarn add @zeronejs/redis
```

- **步骤2**: 将RedisModule导入根模块
```ts
import { RedisModule } from '@zeronejs/redis';
@Module({
    imports: [
        RedisModule.forRoot(), // 除非给定配置对象，否则使用默认值
        // ... 其他模块
    ]
})
export class AppModule {}
```

- **步骤3**: 在需要redis 的地方 依赖注入
```ts
import { Inject } from '@nestjs/common';
import { REDIS_CLIENT, Redis } from '@zeronejs/redis';

...
export class AppController {
    constructor(
        @Inject(REDIS_CLIENT) private readonly redisClient: Redis
    ) {}

    @Get()
    async getHello() {
        console.log(await this.redisClient.set('key', 'value'));
        console.log(await this.redisClient.get('key'));
        return 'hello';
    }
}
...
```