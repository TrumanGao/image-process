export interface imageQueryInterface {
  type: "png" | "jpg" | "webp" | "svg";
  quality: number;
}

export interface imageStoreInterface {
  imageQuery: imageQueryInterface;
  imageList: any[];
}
