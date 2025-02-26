<template>
    <div class="min-h-screen bg-white">
      <!-- 顶部导航栏 -->
      <header class="bg-white border-b border-gray-100">
        <div class="mx-auto max-w-7xl">
          <div class="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
            <!-- Logo -->
            <div class="flex-shrink-0">
              <NuxtLink to="/" class="flex items-center">
                <img class="h-8 w-auto" src="/images/logo.png" alt="SANI MOON Logo">
              </NuxtLink>
            </div>
  
            <!-- 主导航 -->
            <nav class="hidden md:flex items-center justify-center space-x-8">
              <NuxtLink v-for="item in navigation" 
                :key="item.name" 
                :to="item.href"
                class="text-sm font-medium text-gray-700 hover:text-keri-blue transition-colors duration-200">
                {{ $t(`navigation.${item.name}`) }}
              </NuxtLink>
            </nav>
  
            <!-- 右侧功能区 -->
            <div class="flex items-center space-x-4">
              <!-- 搜索按钮 -->
              <button class="text-gray-700 hover:text-keri-blue transition-colors duration-200">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
  
              <!-- 语言切换 -->
              <button @click="toggleLanguage" 
                class="text-sm font-medium text-gray-700 hover:text-keri-blue transition-colors duration-200 flex items-center space-x-1">
                <span>{{ currentLanguage === 'ko' ? 'ENG' : '한국어' }}</span>
              </button>
  
              <!-- 移动端菜单按钮 -->
              <button @click="toggleMobileMenu" class="md:hidden text-gray-700 hover:text-keri-blue">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path v-if="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M6 18L18 6M6 6l12 12" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
  
          <!-- 移动端菜单 -->
          <div v-show="isMobileMenuOpen" class="md:hidden border-t border-gray-100">
            <div class="px-4 py-2 space-y-1">
              <NuxtLink v-for="item in navigation" 
                :key="item.name" 
                :to="item.href"
                class="block py-2 text-sm font-medium text-gray-700 hover:text-keri-blue transition-colors duration-200">
                {{ $t(`navigation.${item.name}`) }}
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
      <footer class="bg-gradient-to-br from-[#010536] to-[#1a237e] text-white py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
            <!-- Logo and Address -->
            <div class="md:col-span-4 space-y-6">
              <img src="/images/logo.png" alt="Sanimoon Logo" class="h-10">
              <div class="text-sm space-y-2 text-gray-300">
                <p>{{ $t('footer.address.line1') }}</p>
                <p>{{ $t('footer.address.line2') }}</p>
                <p>{{ $t('footer.address.email') }}</p>
              </div>
              <!-- Social Links -->
              <div class="flex space-x-4 pt-4">
                <a href="#" class="text-gray-300 hover:text-white transition-colors" :title="$t('footer.social.facebook')">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" class="text-gray-300 hover:text-white transition-colors" :title="$t('footer.social.twitter')">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" class="text-gray-300 hover:text-white transition-colors" :title="$t('footer.social.linkedin')">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
  
            <!-- Navigation Links -->
            <div class="md:col-span-8">
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <!-- Column 1: About -->
                <div>
                  <h3 class="text-lg font-semibold mb-4 text-white">{{ $t('footer.about.title') }}</h3>
                  <ul class="space-y-3 text-sm">
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors">{{ $t('footer.about.purpose') }}</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors">{{ $t('footer.about.message') }}</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors">{{ $t('footer.about.history') }}</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors">{{ $t('footer.about.organization') }}</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors">{{ $t('footer.about.location') }}</a></li>
                  </ul>
                </div>
  
                <!-- Column 2: Research -->
                <div>
                  <h3 class="text-lg font-semibold mb-4 text-white">{{ $t('footer.research.title') }}</h3>
                  <ul class="space-y-3 text-sm">
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors">{{ $t('footer.research.reports') }}</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors">{{ $t('footer.research.policy') }}</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors">{{ $t('footer.research.bulletin') }}</a></li>
                  </ul>
                </div>
  
                <!-- Column 3: Communication -->
                <div>
                  <h3 class="text-lg font-semibold mb-4 text-white">{{ $t('footer.communication.title') }}</h3>
                  <ul class="space-y-3 text-sm">
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors">{{ $t('footer.communication.press') }}</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors">{{ $t('footer.communication.photos') }}</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors">{{ $t('footer.communication.column') }}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Bottom Bar -->
          <div class="mt-12 pt-8 border-t border-gray-700">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <p class="text-sm text-gray-400">{{ $t('footer.copyright') }}</p>
              <div class="mt-4 md:mt-0">
                <ul class="flex space-x-6 text-sm text-gray-400">
                  <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.links.privacy') }}</a></li>
                  <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.links.terms') }}</a></li>
                  <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.links.contact') }}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  const { locale } = useI18n()
  
  const navigation = [
    { name: 'about', href: '/introduce' },
    { name: 'research', href: '/research' },
    { name: 'news', href: '/news' },
    { name: 'column', href: '/column' },
  ]
  
  const currentLanguage = ref('ko')
  const isMobileMenuOpen = ref(false)
  
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'ko' ? 'en' : 'ko'
    locale.value = currentLanguage.value
  }
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
  </script>
  
  <style>
  .group:hover .group-hover\:scale-x-100 {
    transform: scaleX(1);
  }
  </style>
  