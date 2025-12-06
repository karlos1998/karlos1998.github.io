<template>
  <div class="company-card">
    <h2>{{ title }}</h2>
    <div v-html="content" />
  </div>
</template>

<script setup lang="ts">
import type {InfoCardProps} from '~/types/interfaces'

const {title, content} = defineProps<InfoCardProps>()
</script>

<style scoped>
.company-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(251, 191, 36, 0.10);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl) var(--space-xl);
  min-width: 290px;
  max-width: 390px;
  margin-bottom: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.company-card h2 {
  font-size: var(--font-xl);
  margin-bottom: var(--space-md);
  color: var(--color-accent);
  font-weight: 700;
}

.company-card b {
  color: var(--color-accent);
  letter-spacing: 0.5px;
}
</style>
