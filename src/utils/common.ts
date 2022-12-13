import type { CACHE } from "@/constants/cache";

/**
 * 根据键名读取本地存储
 */
export function getStorage(
  storageType: "sessionStorage" | "localStorage",
  storageKey: keyof typeof CACHE
) {
  if (storageType !== "localStorage" && storageType !== "sessionStorage") {
    throw Error("本地存储类型错误：" + storageType);
  }

  const storage = window[storageType].getItem(storageKey);
  if (storage) {
    try {
      return JSON.parse(storage);
    } catch (error) {
      return storage;
    }
  } else {
    return "";
  }
}

/**
 * 根据键名写入本地存储
 */
export function setStorage(
  storageType: "sessionStorage" | "localStorage",
  storageKey: keyof typeof CACHE,
  storageData: unknown
) {
  if (storageType !== "localStorage" && storageType !== "sessionStorage") {
    throw Error("本地存储类型错误：" + storageType);
  }

  if (typeof storageData === "string") {
    window[storageType].setItem(storageKey, storageData);
  } else {
    window[storageType].setItem(storageKey, JSON.stringify(storageData));
  }
}

/**
 * 下载blob
 */
export function downloadBlob(blob: Blob, fileName: string = "下载文件") {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
}
