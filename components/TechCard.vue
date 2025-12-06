<template>
  <div class="about-card tech-card">
    <h2><span style="font-size:1.5em">💻</span> Technologie</h2>
    <ul>
      <li v-for="(item, idx) in items" :key="idx">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  items: {type: Array, required: true}
})
</script>
// styl dziedziczony
