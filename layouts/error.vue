<template>
  <div v-if="isMaintenance" class="maintenance-page">
    <h1>🚧 维护中</h1>
    <p>{{ errorMessage }}</p>
  </div>
  <div v-else>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRuntimeConfig } from "#app";

const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const { public: config } = useRuntimeConfig();

// 维护模式计算属性
const isMaintenance = computed(() => {
  console.log(config.maintenanceMode);
  return config.maintenanceMode && props.error.statusCode === 404;
});

// 维护信息计算属性
const errorMessage = computed(() => {
  return config.maintenanceMessage || "网站正在维护，请稍后再试";
});
</script>

<style scoped>
.maintenance-page {
  text-align: center;
  padding: 50px;
  font-family: Arial;
}
</style>
