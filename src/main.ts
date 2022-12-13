import { createApp } from "vue";
import { createPinia } from "pinia";
// 模版
import App from "./App.vue";
// 插件
import { router } from "./router";
// 组件
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 样式
import "./assets/main.less";

// 模版
const app = createApp(App);
// 插件
app.use(createPinia());
app.use(router);
// 组件
Object.entries({ ...ElementPlusIconsVue }).map(([key, component]) => {
  app.component(key, component);
});
app.mount("#app");

console.log("环境变量：", process.env.VITE_MODE);
