<script setup lang="ts">
const props = defineProps({ team: { type: Array, default: () => [] } })
</script>

<template>
  <div>
    <h3 class="text-xl font-semibold mb-4">Team</h3>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(m, idx) in props.team" :key="idx" class="bg-white rounded shadow p-4 flex items-center gap-4">
        <img :src="m.img" alt="member" class="w-16 h-16 rounded-full object-cover" />
        <div>
          <div class="font-semibold">{{ m.name }}</div>
          <div class="text-sm text-gray-500">{{ m.role }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
