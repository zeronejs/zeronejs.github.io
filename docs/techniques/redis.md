# The cache

[Redis](https://redis.io) is a high-performance key-value database

Redis largely compensates for memcached key/value storage, and in some cases complements relational databases.
::: tip
You need to install [redis](https://redis.io/download) ， or have a valid redis address
:::

## Redis

- **Step 1**: Install the Redis module package provided by Zerone
```bash
yarn add @zeronejs/redis
```

- **Step 2**: Import RedisModule into the root module
```ts
import { RedisModule } from '@zeronejs/redis';
@Module({
    imports: [
        RedisModule.forRoot(), // uses defaults unless given configuration object
        // ... Other modules
    ]
})
export class AppModule {}
```

- **Step 3**: Dependency injection where Redis is needed
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