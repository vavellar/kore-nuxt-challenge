<script setup lang="ts">
const props = defineProps({ documents: { type: Array, default: () => [] } })
</script>

<template>
  <div class="bg-white rounded shadow p-4">
    <h3 class="font-semibold mb-2">Documents</h3>
    <ul class="text-sm">
      <li v-for="(d, idx) in props.documents" :key="idx" class="py-2 border-b last:border-b-0">
        <a :href="d.url" class="text-blue-600 underline">{{ d.name }}</a>
      </li>
    </ul>
  </div>
</template>
