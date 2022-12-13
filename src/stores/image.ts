import { defineStore } from "pinia";
import type { imageQueryInterface, imageStoreInterface } from "./image.d";

const defalutImageQuery = (): imageQueryInterface => ({
  type: "png",
  quality: 100,
});

export const useImageStore = defineStore({
  id: "image",
  state: (): imageStoreInterface => ({
    imageQuery: defalutImageQuery(),
    imageList: [],
  }),
  actions: {
    setImageQuery(query: imageQueryInterface = defalutImageQuery()) {
      query.quality = Number(query.quality);
      this.imageQuery = query;
    },
  },
});
