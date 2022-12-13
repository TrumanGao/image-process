<script setup lang="ts">
import { RouterView } from "vue-router";
// Element Plus 国际化: https://element-plus.gitee.io/zh-CN/guide/i18n.html#configprovider
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
</script>

<template>
  <el-config-provider :locale="zhCn">
    <RouterView class="app-view" />
  </el-config-provider>
</template>

<style scoped>
.app-view {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
