<template>
  <div>
    <!-- 轮播图 -->
    <GsapAnimation animation="fadeDown" :duration="1.2">
      <div class="relative">
        <!-- 轮播图容器 -->
        <div class="relative h-[600px] overflow-hidden">
          <div class="absolute inset-0 flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <!-- 轮播图片 -->
            <div v-for="(slide, index) in slides" :key="index" class="relative w-full flex-shrink-0">
              <img :src="slide.image" :alt="slide.title" class="w-full h-[600px] object-cover">
              <!-- 文字内容 -->
              <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                  <transition
                    enter-active-class="transition ease-out duration-500 delay-300"
                    enter-from-class="opacity-0 translate-y-4"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-300"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-4"
                  >
                    <div v-show="currentSlide === index">
                      <p class="text-sm uppercase tracking-wider mb-4">{{ slide.subtitle }}</p>
                      <h1 class="text-5xl font-bold mb-6 leading-tight whitespace-pre-line">{{ slide.title }}</h1>
                      <p class="text-xl max-w-2xl leading-relaxed">{{ slide.description }}</p>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 轮播图指示器和按钮 -->
        <GsapAnimation animation="fadeUp" :delay="0.5">
          <div class="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
            <button v-for="(_, index) in slides" 
              :key="index"
              @click="currentSlide = index"
              class="w-4 h-4 rounded-full transition-colors duration-200 border-2 border-white"
              :class="currentSlide === index ? 'bg-white' : 'bg-transparent'">
            </button>
          </div>
        </GsapAnimation>
      </div>
    </GsapAnimation>

    <!-- 主要内容区域 -->
    <div class="container mx-auto px-4 py-[30px]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 新闻发布部分 -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-center mb-6">
            <div>
              <h2 class="text-emerald-600 text-sm font-medium mb-1">NEWS RELEASE</h2>
              <h3 class="text-2xl font-bold">보도자료</h3>
            </div>
            <button class="w-8 h-8 rounded-full border border-emerald-600 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
          </div>
          <div class="space-y-6">
            <div v-for="(item, index) in latestReports" :key="index" class="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <a href="#" class="block group">
                <h4 class="text-gray-900 group-hover:text-emerald-600 mb-2 line-clamp-2">{{ item.title }}</h4>
                <p class="text-gray-500 text-sm">{{ item.date }}</p>
              </a>
            </div>
          </div>
        </div>

        <!-- 经济趋势部分 -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-center mb-6">
            <div>
              <h2 class="text-emerald-600 text-sm font-medium mb-1">KERI ECONOMIC TRENDS AND OUTLOOK</h2>
              <h3 class="text-2xl font-bold">KERI 경제동향과 전망</h3>
            </div>
            <button class="w-8 h-8 rounded-full border border-emerald-600 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
          </div>
          <div class="space-y-6">
            <div v-for="(item, index) in trends" :key="index" class="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <a href="#" class="block group">
                <h4 class="text-gray-900 group-hover:text-emerald-600 mb-2 line-clamp-2">{{ item.title }}</h4>
                <p class="text-gray-500 text-sm">{{ item.date }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LatestReports />

    <!-- 活动照片 -->
    <div class="bg-gray-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <GsapAnimation animation="fadeRight">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">
              {{ $t('home.activityPhotos') }}
            </h2>
          </GsapAnimation>

          <GsapAnimation animation="scale" :stagger="0.15">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div v-for="photo in activityPhotos" :key="photo.id" 
                class="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200">
                <div class="aspect-[4/3] overflow-hidden">
                  <img :src="photo.imageUrl" :alt="photo.title" 
                    class="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-200">
                </div>
                <div class="p-4">
                  <h3 class="text-lg font-medium text-gray-900 group-hover:text-keri-blue transition-colors duration-200">
                    {{ photo.title }}
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">{{ photo.date }}</p>
                </div>
              </div>
            </div>
          </GsapAnimation>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GsapAnimation from '~/components/GsapAnimation.vue'
import LatestReports from '~/components/home/LatestReports.vue'

// 轮播图数据
const slides = [
  {
    image: 'https://static.wixstatic.com/media/c00589_4d80567ab2114a969066c220f896ab54~mv2.jpg/v1/fill/w_1441,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c00589_4d80567ab2114a969066c220f896ab54~mv2.jpg',
    subtitle: 'The New Leap of Korea\'s Economy',
    title: '한국경제의 새로운 도약을\n위해 앞장서겠습니다.',
    description: '한국경제연구원은 자유시장경제 이념을 바탕으로 한국경제의 발전과 기업하기 좋은 제도적 환경조성을 위한 정책과제를 종합적으로 연구합니다.'
  },
  {
    image: 'https://static.wixstatic.com/media/c00589_4d80567ab2114a969066c220f896ab54~mv2.jpg/v1/fill/w_980,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c00589_4d80567ab2114a969066c220f896ab54~mv2.jpg',
    subtitle: 'Research & Policy',
    title: '연구와 정책을 통한\n미래 비전 제시',
    description: '경제 및 기업 관련 제도·정책에 대한 분석·평가 및 정책대안을 제시합니다.'
  },
  {
    image: 'https://static.wixstatic.com/media/c00589_4d80567ab2114a969066c220f896ab54~mv2.jpg/v1/fill/w_980,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c00589_4d80567ab2114a969066c220f896ab54~mv2.jpg',
    subtitle: 'Global Network',
    title: '글로벌 네트워크\n구축',
    description: '국내외 유수 연구기관들과의 교류를 통해 글로벌 싱크탱크로 성장하고 있습니다.'
  }
]

// 当前轮播图索引
const currentSlide = ref(0)

// 轮播图控制函数
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

// 自动轮播
let autoplayInterval
onMounted(() => {
  autoplayInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
})

const latestReports = [
  {
    id: 1,
    title: '트럼프 2.0 시대 개막 100시간과 한국 경제',
    href: '#',
    description: '트럼프 정부 정책이 한국 경제에 미치는 영향 및 대응 방안 분석',
    date: '2024.01.23',
    datetime: '2024-01-23',
  },
  {
    id: 2,
    title: '2024 한경협-피터슨 국제경제연구소 공동회의 개최',
    href: '#',
    description: '글로벌 경제 동향과 한국 경제 발전 방향 탐구',
    date: '2024.11.25',
    datetime: '2024-11-25',
  },
  {
    id: 3,
    title: 'AI 혁명 시대의 기업가 정신과 한국 경제 재도약 세미나',
    href: '#',
    description: 'AI 시대 한국 경제의 발전 기회와 도전 과제 탐구',
    date: '2024.11.17',
    datetime: '2024-11-17',
  },
]

const trends = [
  {
    title: 'KERI 경제동향과 전망-2024년 2분기 [Vol. 34-2]',
    date: '24. 6. 14.'
  },
  {
    title: 'KERI 경제동향과 전망-2024년 1분기 [Vol. 34-1]',
    date: '24. 3. 15.'
  },
  {
    title: 'KERI 경제동향과 전망-2023년 2분기 [Vol. 33-2]',
    date: '23. 6. 30.'
  },
  {
    title: 'KERI 경제동향과 전망-2023년 1분기 [Vol. 33-1]',
    date: '23. 3. 31.'
  },
  {
    title: 'KERI 경제동향과 전망-2022년 ~ 2023년 [Vol. 32-3]',
    date: '22. 12. 31.'
  }
]

const activityPhotos = [
  {
    id: 1,
    title: '트럼프-2-0-시대-개막-100시간과-한국-경제',
    imageUrl: 'https://static.wixstatic.com/media/5d637b_e372085e92684a6391dfb98960a1b63e~mv2.jpg/v1/fill/w_277,h_183,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/KERI%EC%BB%AC%EB%9F%BC-%EC%9E%84%EC%8B%9C-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
    date: '2024.02.15'
  },
  {
    id: 2,
    title: '2024 한청학-파티손국제경제연구소 공동 캠퍼런스',
    imageUrl: 'https://static.wixstatic.com/media/5d637b_34be2395248849c9bc3f1fb0e294cd42~mv2.jpg/v1/fill/w_277,h_183,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/KERI%EC%BB%AC%EB%9F%BC-%EC%9E%84%EC%8B%9C-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
    date: '2024.02.10'
  },
  {
    id: 3,
    title: 'AI 학명 시대의 기업가정신과 한국경제의 재도약',
    imageUrl: 'https://static.wixstatic.com/media/5d637b_b745d5d517d2424c9df15e3ce2f59b17~mv2.jpg/v1/fill/w_305,h_172,fp_0.50_0.50,q_90,enc_auto/5d637b_b745d5d517d2424c9df15e3ce2f59b17~mv2.webp',
    date: '2024.02.05'
  },
  {
    id: 4,
    title: '국내의 석학들이 바라본 저출산‧고령화의 영향과 해법',
    imageUrl: 'https://static.wixstatic.com/media/c00589_070fcbe32273476e950e0339b05c690a~mv2.jpg/v1/fill/w_306,h_172,fp_0.50_0.50,q_90,enc_auto/c00589_070fcbe32273476e950e0339b05c690a~mv2.webp',
    date: '2024.02.01'
  }
]
</script>

<style scoped>
.white-space-pre-line {
  white-space: pre-line;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
