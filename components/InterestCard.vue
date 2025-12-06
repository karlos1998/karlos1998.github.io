<template>
  <div class="about-card interests-card">
    <h2><span style="font-size:1.5em">🛠️</span> Zainteresowania</h2>
    <ul>
      <li v-for="(item, idx) in items" :key="idx">
        <span v-if="item.icon" :style="{ fontSize: '1.2em' }">{{ item.icon }}</span>
        <span v-if="item.text">{{ item.text }}</span>
        <NuxtLink v-if="item.link" :to="item.link" class="about-link">{{ item.linkText || 'więcej' }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type {InterestItem} from '~/types/interfaces'

const {items} = defineProps<{ items: InterestItem[] }>()
</script>
// można odziedziczyć style z index.vue
