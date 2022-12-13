import { createRouter, createWebHashHistory } from "vue-router";
import { WEBSITE_BASE_URL } from "@/constants/config";

export const router = createRouter({
  history: createWebHashHistory(WEBSITE_BASE_URL),
  routes: [
    {
      path: "/", // ?type=png&quality=1
      name: "HomeView",
      component: () => import("@/views/HomeView.vue"),
      props: (route) => ({
        type: route.query.type, // 转换格式
        quality: route.query.quality, // 压缩质量
      }),
    },
  ],
});
