<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div class="max-w-md w-full text-center">
      <div class="mb-6">
        <h1 class="text-6xl font-bold text-gray-700">404</h1>
        <h2 class="text-2xl font-semibold text-gray-800 mt-2">{{ config.public.maintenanceMessage }}</h2>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-md">
        <div class="animate-spin mb-6 mx-auto">
          <svg class="w-16 h-16 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <p class="text-gray-600 mb-4">
          The website is currently under maintenance. Please try again later.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

// 使用空布局，不显示导航栏和页脚
definePageMeta({
  layout: 'empty'
});
</script>
