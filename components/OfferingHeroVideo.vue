<script setup lang="ts">
const props = defineProps({ videoUrl: { type: String, default: '' } })
</script>

<template>
  <div class="mt-4 bg-white rounded shadow overflow-hidden relative">
    <div class="w-full h-64 bg-gray-200 flex items-center justify-center">
      <div class="absolute inset-0 flex items-center justify-center">
        <button class="bg-white/80 rounded-full p-4">▶</button>
      </div>
    </div>
  </div>
</template>
