<template>
  <div class="bg-white py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h1 class="text-3xl font-bold tracking-tight text-keri-blue sm:text-4xl mb-8">
          {{ $t('about.title') }}
        </h1>

        <div class="prose prose-lg prose-indigo max-w-none">
          <p class="text-gray-600">
            {{ $t('about.description') }}
          </p>

          <div class="mt-12 grid gap-8">
            <!-- 设立目的 -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">
                {{ $t('about.purpose.title') }}
              </h2>
              <p class="text-gray-600">
                {{ $t('about.purpose.content') }}
              </p>
            </div>

            <!-- 主要职能 -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">
                {{ $t('about.functions.title') }}
              </h2>
              <ul class="space-y-4">
                <li v-for="(item, index) in $t('about.functions.list')" :key="index" 
                  class="flex items-start">
                  <span class="flex-shrink-0 h-6 w-6 text-keri-blue">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span class="ml-3 text-gray-600">{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- 组织结构 -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">
                {{ $t('about.organization.title') }}
              </h2>
              <div class="mt-4">
                <img src="https://static.wixstatic.com/media/c00589_4d80567ab2114a969066c220f896ab54~mv2.jpg/v1/fill/w_1441,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c00589_4d80567ab2114a969066c220f896ab54~mv2.jpg" alt="Organization Chart" 
                  class="w-full rounded-lg shadow-sm">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>
