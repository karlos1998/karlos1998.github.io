<template>
  <Transition name="loader">
    <div v-if="isLoading" class="page-loader">
      <!-- Animated background particles -->
      <div class="particles">
        <div v-for="i in 20" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>

      <!-- Main loader content -->
      <div class="loader-content">
        <!-- Animated rings -->
        <div class="rings">
          <div class="ring ring-1"></div>
          <div class="ring ring-2"></div>
          <div class="ring ring-3"></div>
        </div>

        <!-- Logo with reveal animation -->
        <div class="loader-logo">
          <div class="logo-wrapper">
            <span class="logo-text">
              <span v-for="(char, index) in logoText" :key="index" class="char"
                    :style="{ animationDelay: `${index * 0.1}s` }">
                {{ char === ' ' ? '\u00A0' : char }}
              </span>
            </span>
          </div>
          <div class="logo-underline"></div>
        </div>

        <!-- Progress bar -->
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progress + '%' }"></div>
          </div>
          <p class="progress-text">{{ progress }}%</p>
        </div>

        <!-- Loading text with dots animation -->
        <p class="loader-text">
          Ładowanie<span class="dots">
            <span class="dot">.</span>
            <span class="dot">.</span>
            <span class="dot">.</span>
          </span>
        </p>
      </div>

      <!-- Corner decorations -->
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>
    </div>
  </Transition>
</template>

<script setup>
const isLoading = ref(true)
const progress = ref(0)
const logoText = "Let's Code It".split('')

const getParticleStyle = (index) => {
  const angle = (360 / 20) * index
  const distance = 40 + Math.random() * 20
  return {
    '--angle': `${angle}deg`,
    '--distance': `${distance}vh`,
    '--delay': `${Math.random() * 2}s`,
    '--duration': `${3 + Math.random() * 2}s`
  }
}

onMounted(() => {
  // Animate progress bar
  const startTime = Date.now()
  const minimumLoadTime = 3000

  const progressInterval = setInterval(() => {
    const elapsed = Date.now() - startTime
    const newProgress = Math.min(Math.floor((elapsed / minimumLoadTime) * 100), 100)
    progress.value = newProgress

    if (newProgress >= 100) {
      clearInterval(progressInterval)
    }
  }, 30)

  nextTick(() => {
    const elapsed = Date.now() - startTime
    const remainingTime = Math.max(0, minimumLoadTime - elapsed)

    setTimeout(() => {
      isLoading.value = false
      clearInterval(progressInterval)
    }, remainingTime)
  })
})
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Particles */
.particles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fbbf24;
  border-radius: 50%;
  opacity: 0;
  animation: particleFloat var(--duration) var(--delay) infinite;
  box-shadow: 0 0 10px #fbbf24;
}

@keyframes particleFloat {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--distance));
  }
}

/* Main content */
.loader-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  z-index: 2;
}

/* Animated rings */
.rings {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
}

.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid transparent;
  border-radius: 50%;
  animation: ringPulse 3s ease-in-out infinite;
}

.ring-1 {
  width: 80px;
  height: 80px;
  border-top-color: #fbbf24;
  animation-delay: 0s;
}

.ring-2 {
  width: 120px;
  height: 120px;
  border-right-color: #f59e0b;
  animation-delay: 0.5s;
}

.ring-3 {
  width: 160px;
  height: 160px;
  border-bottom-color: #fbbf24;
  animation-delay: 1s;
}

@keyframes ringPulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
    opacity: 0.5;
  }
}

/* Logo */
.loader-logo {
  margin-top: 100px;
}

.logo-wrapper {
  overflow: hidden;
}

.logo-text {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  display: flex;
}

.char {
  display: inline-block;
  animation: charReveal 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(100%);
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Fallback for browsers that don't support background-clip */
  color: #fbbf24;
}

@keyframes charReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-underline {
  height: 4px;
  background: linear-gradient(90deg, transparent, #fbbf24, transparent);
  margin-top: 1rem;
  animation: underlineGrow 1.5s ease-out 0.5s forwards;
  transform: scaleX(0);
  border-radius: 2px;
}

@keyframes underlineGrow {
  to {
    transform: scaleX(1);
  }
}

/* Progress bar */
.progress-container {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: fadeIn 0.6s ease-out 1s both;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24);
  background-size: 200% 100%;
  border-radius: 2px;
  transition: width 0.3s ease;
  animation: gradientShift 2s linear infinite;
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
}

@keyframes gradientShift {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
}

.progress-text {
  text-align: center;
  font-size: 0.75rem;
  color: #999;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.1em;
}

/* Loading text */
.loader-text {
  font-size: 0.875rem;
  color: #999;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  animation: fadeIn 0.6s ease-out 1.2s both;
}

.dots {
  display: inline-flex;
  gap: 2px;
}

.dot {
  animation: dotBounce 1.4s infinite;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes dotBounce {
  0%, 60%, 100% {
    opacity: 1;
    transform: translateY(0);
  }
  30% {
    opacity: 0.4;
    transform: translateY(-8px);
  }
}

/* Corner decorations */
.corner {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(251, 191, 36, 0.3);
  animation: cornerPulse 2s ease-in-out infinite;
}

.corner-tl {
  top: 2rem;
  left: 2rem;
  border-right: none;
  border-bottom: none;
  animation-delay: 0s;
}

.corner-tr {
  top: 2rem;
  right: 2rem;
  border-left: none;
  border-bottom: none;
  animation-delay: 0.5s;
}

.corner-bl {
  bottom: 2rem;
  left: 2rem;
  border-right: none;
  border-top: none;
  animation-delay: 1s;
}

.corner-br {
  bottom: 2rem;
  right: 2rem;
  border-left: none;
  border-top: none;
  animation-delay: 1.5s;
}

@keyframes cornerPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

/* General animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Transition */
.loader-enter-active {
  transition: opacity 0.3s ease;
}

.loader-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.loader-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 640px) {
  .logo-text {
    font-size: 2rem;
  }

  .progress-container {
    width: 250px;
  }

  .rings {
    top: -100px;
  }

  .ring-1 {
    width: 60px;
    height: 60px;
  }

  .ring-2 {
    width: 90px;
    height: 90px;
  }

  .ring-3 {
    width: 120px;
    height: 120px;
  }

  .corner {
    width: 40px;
    height: 40px;
  }

  .corner-tl,
  .corner-tr {
    top: 1rem;
  }

  .corner-tl,
  .corner-bl {
    left: 1rem;
  }

  .corner-tr,
  .corner-br {
    right: 1rem;
  }

  .corner-bl,
  .corner-br {
    bottom: 1rem;
  }
}
</style>
