<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="theme-default-content">
        <div class="my-footer">
          <img
            src="/images/ads/tencent.jpg"
            alt=""
            srcset=""
            style="width: 231px; margin-right: 12px"
          />
          <a href="https://url.cn/YhqmBuXP" target="_blank">
            <span
              >【腾讯云】领8888元采购礼包，抢爆款云服务器 每月
              9元起，个人开发者加享折上折！</span
            >
          </a>
        </div>

        <br />
        <div class="my-footer">
          <img
            src="/images/ads/qiniucdn.jpg"
            alt=""
            srcset=""
            style="width: 231px; margin-right: 12px"
          />
          <a href="https://s.qiniu.com/IBnUfa" target="_blank">
            <span
              >【七牛云】新人免费
              CDN，全球2000+节点无盲区覆盖，注册即可免费使用</span
            >
          </a>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  display: flex;
  align-items: center;
}
</style>
