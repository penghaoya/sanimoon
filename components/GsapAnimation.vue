<template>
  <div ref="element" class="gsap-animation">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  animation: {
    type: String,
    default: 'fadeUp'
  },
  duration: {
    type: Number,
    default: 1
  },
  delay: {
    type: Number,
    default: 0
  },
  ease: {
    type: String,
    default: 'power2.out'
  },
  start: {
    type: String,
    default: 'top 80%'
  },
  stagger: {
    type: Number,
    default: 0
  }
})

const element = ref(null)
let scrollTrigger = null

const animations = {
  fadeUp: {
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 }
  },
  fadeDown: {
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1 }
  },
  fadeLeft: {
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 }
  },
  fadeRight: {
    from: { x: 50, opacity: 0 },
    to: { x: 0, opacity: 1 }
  },
  scale: {
    from: { scale: 0.8, opacity: 0 },
    to: { scale: 1, opacity: 1 }
  },
  rotate: {
    from: { rotation: 15, opacity: 0, scale: 0.8 },
    to: { rotation: 0, opacity: 1, scale: 1 }
  }
}

onMounted(() => {
  const animation = animations[props.animation] || animations.fadeUp
  const elements = props.stagger ? element.value.children : element.value

  scrollTrigger = ScrollTrigger.create({
    trigger: element.value,
    start: props.start,
    onEnter: () => {
      gsap.fromTo(elements, 
        {
          ...animation.from,
          duration: props.duration,
          ease: props.ease,
          stagger: props.stagger
        },
        {
          ...animation.to,
          duration: props.duration,
          ease: props.ease,
          stagger: props.stagger,
          delay: props.delay,
          scrollTrigger: element.value
        }
      )
    }
  })
})

onUnmounted(() => {
  if (scrollTrigger) {
    scrollTrigger.kill()
  }
})
</script>

<style scoped>
.gsap-animation {
  will-change: transform, opacity;
}
</style>
