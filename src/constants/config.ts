// 环境变量
export const VITE_MODE = process.env.VITE_MODE as
  | "PRODUCTION"
  | "TESTING"
  | "DEVELOPMENT";

// 域名host
const WEBSITE_ADDRESS_HOST_MAP = {
  PRODUCTION: "",
  TESTING: "",
  DEVELOPMENT: "",
};
// 导出域名host
export const WEBSITE_ADDRESS_HOST = WEBSITE_ADDRESS_HOST_MAP[VITE_MODE];

// 域名子路由
const WEBSITE_BASE_URL_MAP = {
  PRODUCTION: "/image-process",
  TESTING: "/image-process",
  DEVELOPMENT: "",
};
// 导出域名子路由
export const WEBSITE_BASE_URL = WEBSITE_BASE_URL_MAP[VITE_MODE];
