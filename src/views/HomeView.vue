<script setup lang="ts">
import { onBeforeMount, watch, ref } from "vue";
import { router } from "@/router";
import { useImageStore } from "@/stores/image";
import type { imageQueryInterface } from "@/stores/image.d";
const imageStore = useImageStore();

const typeList: {
  label: string;
  value: imageQueryInterface["type"];
}[] = [
  { label: "png", value: "png" },
  { label: "jpg", value: "jpg" },
  { label: "webp", value: "webp" },
  { label: "svg", value: "svg" },
];
const fileType = ["png", "bmp", "jpg", "jpeg"];
const uploadAccept = ".png, .bmp, .jpg, .jpeg";

const uploadRef = ref();

watch(
  () => imageStore.imageQuery,
  (query) => {
    router.push({
      name: "HomeView",
      query,
    });
  },
  {
    immediate: true,
  }
);

function handleQueryType(type: imageQueryInterface["type"]) {
  imageStore.setImageQuery({
    type,
    quality: imageStore.imageQuery.quality,
  });
}

function handleQueryQuality(quality: number) {
  imageStore.setImageQuery({
    type: imageStore.imageQuery.type,
    quality,
  });
}

function handleUploadImage(e: Event) {
  const files = e.target?.files;
  if (files) {
    const file = files[0];
    const maxSize = 10 * 1024 * 1024;
    const typeArr = file.name.split(".");
    const type = typeArr[typeArr.length - 1];
    if (fileType.indexOf(type.toLowerCase()) === -1) {
      console.error("请上传png、bmp、jpg、jpeg格式的图片");
      uploadRef.value.value = null;
      return;
    }
    if (file.size > maxSize) {
      console.error("请上传小于10M的图片");
      uploadRef.value.value = null;
      return;
    }
    const imageData = new FormData();
    // 将得到的文件流添加到FormData对象
    imageData.append("file", file);
  } else {
    uploadRef.value.value = null;
    console.error("图片上传失败");
  }
}

onBeforeMount(() => {});
</script>

<template>
  <div class="home-view">
    <div class="home-card home-card_query">
      <div class="query-main query-main_type">
        <div class="query-label">图片格式</div>
        <div class="query-content">
          <div
            class="query-content-item"
            v-for="typeItem in typeList"
            :key="typeItem.value"
            @click="handleQueryType(typeItem.value)"
          >
            {{ typeItem.label }}
          </div>
        </div>
      </div>
      <div class="query-main query-main_quality">
        <div class="query-label">图片质量</div>
        <el-slider
          class="query-content"
          :min="0"
          :max="100"
          :model-value="imageStore.imageQuery.quality"
          :step="10"
          show-stops
          show-input
          @input="handleQueryQuality"
        />
      </div>
    </div>
    <div class="home-card home-card_upload">
      <input
        accept=".png, .bmp, .jpg, .jpeg"
        type="file"
        ref="uploadRef"
        multiple
        @change="handleUploadImage"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-view {
  flex-direction: column;
  padding: 10px;
  background-color: #eeeeee;

  .home-card {
    width: 100%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
