<template>
  <div class="min-h-screen bg-white">
    <!-- 顶部导航栏 -->
    <header class="bg-white border-b border-gray-100">
      <div class="mx-auto max-w-7xl">
        <div
          class="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8"
        >
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="flex items-center">
              <img
                class="h-8 w-auto"
                src="/images/logo.png"
                alt="SANI MOON Logo"
              />
            </NuxtLink>
          </div>

          <!-- 主导航 -->
          <nav class="hidden md:flex items-center justify-center space-x-8">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="text-sm font-medium text-gray-700 hover:text-keri-blue transition-colors duration-200"
            >
              {{ navigationNames[item.name] }}
            </NuxtLink>
          </nav>

          <!-- 右侧功能区 -->
          <div class="flex items-center space-x-4">
            <!-- 搜索按钮 -->
            <!-- <button
              class="text-gray-700 hover:text-keri-blue transition-colors duration-200"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button> -->

            <!-- 自定义翻译按钮 -->
            <div class="relative inline-block">
              <button
                @click="toggleLanguageMenu"
                class="text-sm font-medium text-gray-700 hover:text-keri-blue transition-colors duration-200 flex items-center space-x-1"
              >
                <span>{{ currentLanguage === 'ko' ? 'ENG' : '한국어' }}</span>
              </button>
              <div v-if="showLanguageMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <div class="py-1">
                  <a href="#" @click.prevent="changeLanguage('en')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                  <a href="#" @click.prevent="changeLanguage('ko')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">한국어</a>
                </div>
              </div>
            </div>

            <!-- 移动端菜单按钮 -->
            <button
              @click="toggleMobileMenu"
              class="md:hidden text-gray-700 hover:text-keri-blue"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  v-if="isMobileMenuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- 移动端菜单 -->
        <div
          v-show="isMobileMenuOpen"
          class="md:hidden border-t border-gray-100"
        >
          <div class="px-4 py-2 space-y-1">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="block py-2 text-sm font-medium text-gray-700 hover:text-keri-blue transition-colors duration-200"
            >
              {{ navigationNames[item.name] }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- 页面主体 -->
    <main>
      <slot />
    </main>

    <!-- 页脚 -->
    <footer
      class="bg-gradient-to-br from-[#010536] to-[#1a237e] text-white py-16"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <!-- Logo and Address -->
          <div class="md:col-span-4 space-y-6">
            <img src="/images/f_logo.png" alt="Sanimoon Logo" class="h-10" />
            <div class="text-sm space-y-2 text-gray-300">
              <p>서울특별시 강남구 테헤란로</p>
              <p>대한민국</p>
              <p>이메일 : info@sanimoon-expert.com</p>
            </div>
            <!-- Social Links -->
            <div class="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                class="text-gray-300 hover:text-white transition-colors"
                title="링크드인"
              >
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="md:col-span-8">
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <!-- Column 1: About -->
              <div>
                <h3 class="text-lg font-semibold mb-4 text-white">
                  소개
                </h3>
                <ul class="space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white transition-colors"
                      >설립목적</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white transition-colors"
                      >인사말</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white transition-colors"
                      >연혁</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white transition-colors"
                      >조직도</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white transition-colors"
                      >오시는 길</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Column 2: Research -->
              <div>
                <h3 class="text-lg font-semibold mb-4 text-white">
                  연구
                </h3>
                <ul class="space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white transition-colors"
                      >연구보고서</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white transition-colors"
                      >정책제안</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white transition-colors"
                      >연구동향</a
                    >
                  </li>
                </ul>
              </div>

              <!-- Column 3: Communication -->
              <div>
                <h3 class="text-lg font-semibold mb-4 text-white">
                  소통
                </h3>
                <ul class="space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white transition-colors"
                      >보도자료</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white transition-colors"
                      >사진자료</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-300 hover:text-white transition-colors"
                      >칼럼</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="mt-12 pt-8 border-t border-gray-700">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm">
              &copy; 2025 한국경제연구원. All rights reserved.
            </p>
            <div class="mt-4 md:mt-0">
              <ul class="flex space-x-6 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    class="hover:text-white transition-colors"
                    >개인정보처리방침</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-white transition-colors"
                    >이용약관</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-white transition-colors"
                    >문의하기</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const navigation = [
  { name: "about", href: "/introduce" },
  { name: "research", href: "/research" },
  { name: "news", href: "/news" },
  { name: "column", href: "/column" },
];

// Navigation names in Korean
const navigationNames = {
  home: "연구원 소개",
  about: "연구원 소개",
  research: "연구",
  news: "소통",
  column: "미디어와 네트워킹"
};

const isMobileMenuOpen = ref(false);
const showLanguageMenu = ref(false);
const currentLanguage = ref('ko');
const translateApiLoaded = ref(false);

// 显示/隐藏语言菜单
const toggleLanguageMenu = () => {
  showLanguageMenu.value = !showLanguageMenu.value;
};

// 切换语言函数
const changeLanguage = (lang) => {
  if (lang === currentLanguage.value) {
    showLanguageMenu.value = false;
    return;
  }

  currentLanguage.value = lang;
  showLanguageMenu.value = false;

  // 如果谷歌翻译API已加载，则调用其翻译功能
  if (window.google && window.google.translate) {
    const selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
      selectElement.value = lang === 'ko' ? '' : lang;
      selectElement.dispatchEvent(new Event('change'));
    }
  } else {
    // 否则重新加载页面并添加语言参数
    window.location.href = window.location.pathname + '?lang=' + lang;
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// 添加点击外部区域关闭语言菜单的事件
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target;
    // 如果点击的不是语言菜单或其子元素，则关闭菜单
    if (showLanguageMenu.value && !target.closest('.relative.inline-block')) {
      showLanguageMenu.value = false;
    }
  });
  
  // 加载谷歌翻译脚本
  const googleTranslateScript = document.createElement('script');
  googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInitCallback';
  googleTranslateScript.async = true;
  document.head.appendChild(googleTranslateScript);

  // 创建一个隐藏的翻译元素
  const translationElement = document.createElement('div');
  translationElement.id = 'google_translate_element';
  translationElement.style.display = 'none';
  document.body.appendChild(translationElement);

  // 全局回调函数
  window.googleTranslateElementInitCallback = function() {
    translateApiLoaded.value = true;
    new window.google.translate.TranslateElement({
      pageLanguage: 'ko', 
      autoDisplay: false,
      includedLanguages: 'en', 
    }, 'google_translate_element');
    
    // 从URL检查语言参数
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && langParam !== 'ko') {
      setTimeout(() => {
        changeLanguage(langParam);
      }, 1000);
    }
  };
});

// 使用onUnmounted清理
onUnmounted(() => {
  document.removeEventListener('click', () => {});
});
</script>

<style>
.group:hover .group-hover\:scale-x-100 {
  transform: scaleX(1);
}

/* 隐藏谷歌翻译工具栏 */
.goog-te-banner-frame {
  display: none !important;
}

.goog-te-menu-value:hover {
  text-decoration: none !important;
}

.goog-tooltip {
  display: none !important;
}

.goog-tooltip:hover {
  display: none !important;
}

.goog-text-highlight {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* 修复谷歌翻译导致的body位移 */
body {
  top: 0 !important;
}
</style>
