<template>
  <div ref="element" class="scroll-animation" :class="{ 'animate': isVisible }">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  threshold: {
    type: Number,
    default: 0.1
  },
  animationClass: {
    type: String,
    default: 'fade-up'
  }
})

const element = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        // 如果只想触发一次动画，可以取消观察
        // observer.unobserve(entry.target)
      } else {
        // 如果想要元素离开视图时重置动画，取消注释下面的行
        // isVisible.value = false
      }
    })
  }, {
    threshold: props.threshold
  })

  if (element.value) {
    observer.observe(element.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.scroll-animation {
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s ease-in-out;
}

/* 淡入上移 */
.scroll-animation.fade-up {
  transform: translateY(30px);
}

/* 淡入下移 */
.scroll-animation.fade-down {
  transform: translateY(-30px);
}

/* 淡入左移 */
.scroll-animation.fade-left {
  transform: translateX(30px);
}

/* 淡入右移 */
.scroll-animation.fade-right {
  transform: translateX(-30px);
}

/* 缩放 */
.scroll-animation.scale {
  transform: scale(0.9);
}

/* 动画激活状态 */
.scroll-animation.animate {
  opacity: 1;
  visibility: visible;
  transform: translate(0) scale(1);
}
</style>
