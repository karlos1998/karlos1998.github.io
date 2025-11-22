<template>
  <div class="nav">
    <!-- Burger Menu Button -->
    <div
        class="burger-menu"
        :class="{ open: isOpen }"
        @click="toggleMenu"
        role="button"
        aria-label="Toggle navigation menu"
    >
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </div>

    <!-- Navigation Panel -->
    <div class="nav-panel" :class="{ open: isOpen }">
      <nav>
        <ul class="nav-list">
          <li class="nav-item" v-for="item in menuItems" :key="item.path">
            <NuxtLink
                :to="item.path"
                class="nav-link"
                :class="{ active: $route.path === item.path }"
                @click="closeMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Overlay -->
    <div
        v-if="isOpen"
        class="nav-overlay"
        @click="closeMenu"
    ></div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'
import {useRouter} from 'vue-router'

// Reactive state
const isOpen = ref(false)

// Menu items
const menuItems = [
  {path: '/', label: 'Strona główna'},
  {path: '/cv', label: 'Moje CV'},
  {path: '/projekty', label: 'Projekty'},
  {path: '/filmy', label: 'Filmy'},
  {path: '/sekret', label: 'Sekret'}
]

// Router instance
const router = useRouter()

// Methods
const toggleMenu = () => {
  isOpen.value = !isOpen.value

  // Prevent body scroll when menu is open
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

// Handle escape key
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeMenu()
  }
}

// Auto-close menu on route change
const handleRouteChange = () => {
  if (isOpen.value) {
    closeMenu()
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('keydown', handleEscape)
  router.afterEach(handleRouteChange)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
}

.burger-menu {
  width: 50px;
  height: 50px;
  background: var(--theme-primary);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1001;
}

.burger-menu:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.burger-line {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-origin: center;
}

.burger-menu.open .burger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.burger-menu.open .burger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.burger-menu.open .burger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.nav-panel {
  position: fixed;
  top: 0;
  right: -400px;
  width: 350px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  transition: right 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 999;
  padding: 6rem 2rem 2rem;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

.nav-panel.open {
  right: 0;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 0.5rem;
  transform: translateX(20px);
  opacity: 0;
  animation: slideIn 0.3s ease-out forwards;
}

.nav-item:nth-child(1) {
  animation-delay: 0.1s;
}

.nav-item:nth-child(2) {
  animation-delay: 0.2s;
}

.nav-item:nth-child(3) {
  animation-delay: 0.3s;
}

.nav-item:nth-child(4) {
  animation-delay: 0.4s;
}

.nav-item:nth-child(5) {
  animation-delay: 0.5s;
}

.nav-link {
  display: block;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--theme-primary);
  transition: left 0.3s ease;
  z-index: -1;
}

.nav-link:hover::before,
.nav-link.active::before {
  left: 0;
}

.nav-link:hover,
.nav-link.active {
  color: white;
  transform: translateX(-10px);
}

.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: 0;
  animation: fadeIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .nav {
    top: 1rem;
    right: 1rem;
  }

  .burger-menu {
    width: 45px;
    height: 45px;
  }

  .burger-line {
    width: 22px;
  }

  .nav-panel {
    width: 280px;
    padding: 5rem 1.5rem 2rem;
  }

  .nav-link {
    font-size: 1.1rem;
    padding: 0.8rem 1.2rem;
  }
}
</style>
