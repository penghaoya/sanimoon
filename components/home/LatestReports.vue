<!-- 最新报告轮播组件 -->
<template>
  <section class="py-16 bg-[#f5f9fa]">
    <div class="container mx-auto px-4">
      <!-- 标题部分 -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <!-- <h3 class="text-sm text-emerald-600 font-medium mb-2">
            LATEST REPORTS
          </h3> -->
          <h2 class="text-2xl font-bold">
            <span v-if="currentLanguage === 'ko'">최신 보고서</span>
            <span v-else>Latest Reports</span>
          </h2>
        </div>
        <button
          @click="viewAllReports"
          class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <span class="text-xl">+</span>
        </button>
      </div>

      <!-- 报告展示部分 -->
      <div class="relative">
        <!-- 左右导航按钮 - 仅当报告数量超过每页显示数量时显示 -->
        <button
          v-if="totalPages > 1"
          @click="prevPage"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 transition-colors md:block hidden"
          aria-label="Previous page"
        >
          <span class="text-2xl">&lt;</span>
        </button>
        <button
          v-if="totalPages > 1"
          @click="nextPage"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 transition-colors md:block hidden"
          aria-label="Next page"
        >
          <span class="text-2xl">&gt;</span>
        </button>

        <!-- 报告内容 -->
        <div 
          class="flex overflow-hidden"
          :style="{ transform: `translateX(-${currentPage * 100}%)` }"
          :class="isAnimating ? 'transition-transform duration-500 ease-out' : ''"
        >
          <!-- 将报告分组展示 -->
          <div 
            v-for="page in totalPages" 
            :key="'page-'+page"
            class="min-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            <!-- 每页显示的报告卡片 -->
            <div
              v-for="report in getPageReports(page)"
              :key="'report-'+report.id"
              class="bg-white rounded-lg overflow-hidden shadow-lg relative h-full"
            >
              <div
                class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm rounded"
              >
                Sanimoon SERIES
              </div>
              <img
                :src="report.imageUrl"
                :alt="currentLanguage === 'ko' ? report.title.ko : report.title.en"
                class="w-full h-48 object-cover"
                loading="lazy"
              />
              <div class="p-6">
                <h3 class="text-lg font-bold mb-2 line-clamp-2">
                  {{ currentLanguage === 'ko' ? report.title.ko : report.title.en }}
                </h3>
                <p class="text-sm text-gray-500">{{ report.date }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 指示器 - 仅当报告数量超过每页显示数量时显示 -->
        <div v-if="totalPages > 1" class="flex justify-center mt-8 space-x-3">
          <button
            v-for="page in totalPages"
            :key="'indicator-'+page"
            @click="goToPage(page - 1, true)"
            class="w-3 h-3 rounded-full transition-colors duration-200"
            :class="currentPage === page - 1 ? 'bg-emerald-600' : 'bg-gray-300'"
            :aria-label="`Go to page ${page}`"
          ></button>
        </div>
        
        <!-- 导航按钮 - 仅当报告数量超过每页显示数量时显示 -->
        <div v-if="totalPages > 1" class="flex justify-center mt-6 space-x-6">
          <button 
            @click="prevPage"
            class="px-5 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors flex items-center"
            :disabled="currentPage === 0"
            :class="{'opacity-40 cursor-not-allowed': currentPage === 0}"
          >
            <span class="mr-1">&lt;</span> 
            <span>{{ currentLanguage === 'ko' ? '이전' : 'Previous' }}</span>
          </button>
          <button 
            @click="nextPage"
            class="px-5 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors flex items-center"
            :disabled="currentPage === totalPages - 1"
            :class="{'opacity-40 cursor-not-allowed': currentPage === totalPages - 1}"
          >
            <span>{{ currentLanguage === 'ko' ? '다음' : 'Next' }}</span>
            <span class="ml-1">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

// 获取当前语言
const currentLanguage = computed(() => {
  // 如果使用了谷歌翻译，检查body类来确定是否已翻译
  const isTranslated = document.documentElement.classList.contains('translated-ltr');
  return isTranslated ? 'en' : 'ko';
});

// 轮播状态
const currentPage = ref(0);
const isAnimating = ref(false);

const getReportsPerPage = () => {
  // 根据屏幕宽度动态确定每页显示的报告数量
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) { // 移动端
      return 1;
    } else if (window.innerWidth < 768) { // 平板
      return 2;
    }
  }
  return 3; // 桌面端
};

// 响应式每页报告数量
const reportsPerPage = ref(3);

// 最新报告数据
const reports = [
  {
    id: 1,
    title: {
      ko: "인구변화로 인한 주택수요 불균형 전망과 대응 방안 연구",
      en: "Study on Housing Demand Imbalance Forecasting and Countermeasures due to Population Changes"
    },
    imageUrl: "/images/reports/report1.png",
    description: {
      ko: "인구변화로 인한 주택수요 불균형 전망과 대응 방안 연구",
      en: "Research on housing demand imbalance forecasting and response measures due to population changes"
    },
    date: "2025.02.15",
  },
  {
    id: 2,
    title: {
      ko: "저출산·고령화 시대! 노동시장의 경제적 효과 분석",
      en: "Analysis of Economic Effects on the Labor Market in the Era of Low Fertility and Aging Population"
    },
    imageUrl: "/images/reports/report2.png",
    description: {
      ko: "저출산·고령화 시대의 노동시장 경제적 효과 분석",
      en: "Analysis of economic effects on the labor market in the era of low fertility and aging"
    },
    date: "2025.01.25",
  },
  {
    id: 3,
    title: {
      ko: "연금 인상방법과 새액공제의 투자 효과 분석과 시사점",
      en: "Analysis and Implications of Pension Increase Methods and Investment Effects of New Tax Deductions"
    },
    imageUrl: "/images/reports/report3.png",
    description: {
      ko: "연금 인상방법과 새액공제의 투자 효과 분석과 시사점",
      en: "Analysis and implications of pension increase methods and investment effects of new tax deductions"
    },
    date: "2025.01.05",
  },
  {
    id: 4,
    title: {
      ko: "디지털 혁신과 한국 경제의 미래 경쟁력",
      en: "Digital Innovation and Future Competitiveness of the Korean Economy"
    },
    imageUrl: "/images/reports/report4.png",
    description: {
      ko: "디지털 혁신이 한국 경제의 미래 경쟁력에 미치는 영향",
      en: "The impact of digital innovation on the future competitiveness of the Korean economy"
    },
    date: "2025.01.15",
  },
  {
    id: 5,
    title: {
      ko: "글로벌 무역 환경 변화와 한국 수출의 대응 전략",
      en: "Changes in Global Trade Environment and Response Strategies for Korean Exports"
    },
    imageUrl: "https://static.wixstatic.com/media/c00589_070fcbe32273476e950e0339b05c690a~mv2.jpg/v1/fill/w_306,h_172,fp_0.50_0.50,q_90,enc_auto/c00589_070fcbe32273476e950e0339b05c690a~mv2.webp",
    description: {
      ko: "글로벌 무역 환경 변화와 한국 수출의 대응 전략",
      en: "Changes in the global trade environment and response strategies for Korean exports"
    },
    date: "2025.01.20",
  },
  {
    id: 6,
    title: {
      ko: "친환경 에너지 전환과 산업 구조 재편 연구",
      en: "Research on Eco-friendly Energy Transition and Industrial Restructuring"
    },
    imageUrl: "https://static.wixstatic.com/media/5d637b_34be2395248849c9bc3f1fb0e294cd42~mv2.jpg/v1/fill/w_277,h_183,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/KERI%EC%BB%AC%EB%9F%BC-%EC%9E%84%EC%8B%9C-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg",
    description: {
      ko: "친환경 에너지 전환과 산업 구조 재편 연구",
      en: "Research on eco-friendly energy transition and industrial restructuring"
    },
    date: "2025.01.10",
  },
];

// 计算总页数
const totalPages = computed(() => Math.ceil(reports.length / reportsPerPage.value));

// 获取特定页的报告
const getPageReports = (page) => {
  const startIndex = (page - 1) * reportsPerPage.value;
  const endIndex = startIndex + reportsPerPage.value;
  return reports.slice(startIndex, endIndex);
};

// 轮播控制函数
const animationDuration = 500; // 动画持续时间（毫秒）

// 处理动画效果
const handleAnimation = () => {
  isAnimating.value = true;
  setTimeout(() => {
    isAnimating.value = false;
  }, animationDuration);
};

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1 && !isAnimating.value) {
    currentPage.value++;
    handleAnimation();
  }
};

const prevPage = () => {
  if (currentPage.value > 0 && !isAnimating.value) {
    currentPage.value--;
    handleAnimation();
  }
};

const goToPage = (page, useAnimation = false) => {
  if (page !== currentPage.value && !isAnimating.value) {
    currentPage.value = page;
    if (useAnimation) {
      handleAnimation();
    }
  }
};

const viewAllReports = () => {
  // 这里可以导航到所有报告的页面
  // TODO: 实现导航到报告列表页
  console.log('查看所有报告');
};

let resizeHandler;

// 处理窗口大小变化
const handleResize = () => {
  const newReportsPerPage = getReportsPerPage();
  if (newReportsPerPage !== reportsPerPage.value) {
    // 更新每页显示数量
    reportsPerPage.value = newReportsPerPage;
    // 确保当前页有效
    if (currentPage.value >= totalPages.value) {
      currentPage.value = Math.max(0, totalPages.value - 1);
    }
  }
};

onMounted(() => {
  // 初始化每页显示数量
  reportsPerPage.value = getReportsPerPage();
  
  // 添加窗口大小变化监听
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize);
    resizeHandler = handleResize;
  }

  // 监听谷歌翻译事件
  const observer = new MutationObserver(() => {
    // 当DOM发生变化时，检查是否需要更新当前语言
    if (document.documentElement.classList.contains('translated-ltr')) {
      // 页面已被翻译
    }
  });

  // 监视document元素的class变化
  observer.observe(document.documentElement, { 
    attributes: true, 
    attributeFilter: ['class'] 
  });
});

// 当组件卸载时清除事件监听
onUnmounted(() => {
  if (typeof window !== 'undefined' && resizeHandler) {
    window.removeEventListener('resize', resizeHandler);
  }
});
</script>

<style scoped>
/* 卡片样式 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 响应式样式 */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
