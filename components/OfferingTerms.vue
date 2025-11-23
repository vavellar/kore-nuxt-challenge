<script setup lang="ts">
const props = defineProps({ terms: { type: Object, default: () => ({}) } })
</script>

<template>
  <div class="bg-white rounded shadow p-4">
    <h3 class="font-semibold text-lg mb-2">Offering Terms</h3>
    <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
      <div v-for="(item, idx) in props.terms?.items || []" :key="idx" class="flex justify-between">
        <span class="text-gray-500">{{ item[0] }}</span>
        <span class="font-medium">{{ item[1] }}</span>
      </div>
    </div>
  </div>
</template>
