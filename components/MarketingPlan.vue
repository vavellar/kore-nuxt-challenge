<script setup lang="ts">
const props = defineProps({ plan: { type: Object, default: () => ({ paragraphs: [] }) } })
</script>

<template>
  <div class="bg-white rounded shadow p-4">
    <h3 class="font-semibold mb-3">Performance Marketing Plan</h3>
    <div class="text-sm text-gray-700 space-y-2">
      <p v-for="(p, i) in props.plan?.paragraphs || []" :key="i">{{ p }}</p>
    </div>
  </div>
</template>
