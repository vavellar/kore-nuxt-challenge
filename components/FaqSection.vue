<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({ faq: { type: Array, default: () => [] } })
const openIndex = ref(-1)
function toggle(i: number) { openIndex.value = openIndex.value === i ? -1 : i }
</script>

<template>
  <div class="bg-white rounded shadow p-4">
    <h3 class="font-semibold mb-3">FAQ</h3>
    <div class="space-y-2">
      <div v-for="(q, i) in props.faq" :key="i" class="border rounded">
        <button class="w-full text-left p-3" @click="toggle(i)">
          <div class="flex justify-between items-center">
            <div>{{ q.question }}</div>
            <div v-if="openIndex === i">-</div>
            <div v-else>+</div>
          </div>
        </button>
        <div v-show="openIndex === i" class="p-3 border-t text-sm text-gray-700">{{ q.answer }}</div>
      </div>
    </div>
  </div>
</template>
