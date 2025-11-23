<script setup lang="ts">
const props = defineProps({ data: { type: Object, default: () => ({}) } })
</script>

<template>
  <div class="flex items-start gap-4">
    <div class="w-16 h-16 bg-white rounded shadow flex items-center justify-center">
    </div>
    <div>
      <h1 class="text-2xl font-bold">{{ props.data?.title || 'Kore' }}</h1>
      <p class="text-sm text-gray-500">{{ props.data?.subtitle || 'Lorem ipsum dolor sit' }}</p>
    </div>
  </div>
</template>
