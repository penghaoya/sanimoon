<!-- 最新报告轮播组件 -->
<template>
  <section class="py-16 bg-[#f5f9fa]">
    <div class="container mx-auto px-4">
      <!-- 标题部分 -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <h3 class="text-sm text-emerald-600 font-medium mb-2">
            LATEST REPORTS
          </h3>
          <h2 class="text-2xl font-bold">최신 보고서</h2>
        </div>
        <button
          class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <span class="text-xl">+</span>
        </button>
      </div>

      <!-- 轮播图部分 -->
      <div class="relative">
        <!-- 左右导航按钮 -->
        <button
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
        >
          <span class="text-2xl">&lt;</span>
        </button>
        <button
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
        >
          <span class="text-2xl">&gt;</span>
        </button>

        <!-- 轮播内容 -->
        <div class="flex gap-6 overflow-hidden">
          <!-- 卡片1 -->
          <div
            class="w-1/3 bg-white rounded-lg overflow-hidden shadow-lg relative"
          >
            <div
              class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm rounded"
            >
              Sanimoon SERIES
            </div>
            <img
              src="https://static.wixstatic.com/media/e59db0_a4a8ed65a3cf4419a30202ca8ea78222~mv2.png/v1/fill/w_412,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e59db0_a4a8ed65a3cf4419a30202ca8ea78222~mv2.png"
              alt="Report 1"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-lg font-bold mb-2">
                인구변화로 인한 주택수요 불균형 전망과 대응 방안 연구
              </h3>
            </div>
          </div>

          <!-- 卡片2 -->
          <div
            class="w-1/3 bg-white rounded-lg overflow-hidden shadow-lg relative"
          >
            <div
              class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm rounded"
            >
              Sanimoon SERIES
            </div>
            <img
              src="https://static.wixstatic.com/media/c00589_8a6137080c6649d5baafa4c8ff6c4c0a~mv2.png/v1/fill/w_412,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c00589_8a6137080c6649d5baafa4c8ff6c4c0a~mv2.png"
              alt="Report 2"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-lg font-bold mb-2">
                저출산·고령화 시대! 노동시장의 경제적 효과 분석
              </h3>
            </div>
          </div>

          <!-- 卡片3 -->
          <div
            class="w-1/3 bg-white rounded-lg overflow-hidden shadow-lg relative"
          >
            <div
              class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm rounded"
            >
              Sanimoon SERIES
            </div>
            <img
              src="https://static.wixstatic.com/media/c00589_8a6137080c6649d5baafa4c8ff6c4c0a~mv2.png/v1/fill/w_412,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c00589_8a6137080c6649d5baafa4c8ff6c4c0a~mv2.png"
              alt="Report 3"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-lg font-bold mb-2">
                연금 인상방법과 새액공제의 투자 효과 분석과 시사점
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 后续可以添加轮播逻辑
</script>

<style scoped>
/* 可以添加自定义样式 */
</style>
