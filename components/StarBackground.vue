<template>
  <div class="star-background" ref="container">
    <canvas
        ref="canvas"
        class="star-canvas"
        :width="canvasWidth"
        :height="canvasHeight"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted, nextTick} from 'vue'

// Refs
const container = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()
const canvasWidth = ref(800)
const canvasHeight = ref(600)

// Reactive state
const animationFrame = ref<number>()

// Canvas star animation implementation
const createStarField = () => {
  const ctx = canvas.value?.getContext('2d')
  if (!ctx) return

  const stars: Array<{
    x: number
    y: number
    radius: number
    opacity: number
    speed: number
    brightness: number
  }> = []

  // Create stars
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * canvasWidth.value,
      y: Math.random() * canvasHeight.value,
      radius: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.8 + 0.2,
      brightness: Math.random() * 0.5 + 0.5
    })
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value)

    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight.value)
    gradient.addColorStop(0, '#0a0a0a')
    gradient.addColorStop(0.5, '#0f0f0f')
    gradient.addColorStop(1, '#0a0a0a')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)

    // Draw stars with twinkling effect
    stars.forEach(star => {
      // Add subtle twinkling
      const twinkle = Math.sin(Date.now() * 0.001 + star.x * 0.01) * 0.3 + 0.7
      const currentOpacity = star.opacity * star.brightness * twinkle

      ctx.beginPath()
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
      ctx.fill()

      // Add subtle glow effect for brighter stars
      if (star.brightness > 0.8) {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.1})`
        ctx.fill()
      }

      // Move star
      star.y += star.speed
      if (star.y > canvasHeight.value) {
        star.y = -10
        star.x = Math.random() * canvasWidth.value
      }
    })

    animationFrame.value = requestAnimationFrame(animate)
  }

  animate()
}

// Handle window resize
const handleResize = () => {
  canvasWidth.value = window.innerWidth
  canvasHeight.value = window.innerHeight

  if (canvas.value) {
    canvas.value.width = canvasWidth.value
    canvas.value.height = canvasHeight.value
  }
}

// Lifecycle
onMounted(async () => {
  await nextTick()

  // Set initial canvas dimensions
  if (typeof window !== 'undefined') {
    canvasWidth.value = window.innerWidth
    canvasHeight.value = window.innerHeight
  }

  // Add resize listener
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }

  // Start the star animation
  createStarField()
})

onUnmounted(() => {
  // Clean up
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value)
  }

  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<style scoped>
.star-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
}

.star-canvas {
  display: block;
  background: #000000;
}
</style>
