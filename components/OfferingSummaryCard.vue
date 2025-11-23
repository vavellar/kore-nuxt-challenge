<script setup lang="ts">
const props = defineProps({ summary: { type: Object, default: () => ({}) } })
</script>

<template>
  <div class="bg-white p-6 rounded shadow">
    <div class="text-sm text-gray-500">Funding Goal</div>
    <div class="text-3xl font-bold my-2">${{ props.summary?.raised ?? '0' }}</div>
    <div class="text-xs text-gray-400">of ${{ props.summary?.raiseGoal }}</div>

    <ul class="mt-4 text-sm text-gray-600 space-y-1">
      <li><strong>Min Investment:</strong> ${{ props.summary?.minInvestment }}</li>
      <li><strong>Deadline:</strong> {{ props.summary?.closeDate }}</li>
      <li><strong>Duration:</strong> {{ props.summary?.durationMonths }} months</li>
    </ul>

    <button class="mt-6 w-full py-2 bg-blue-600 text-white rounded">Invest Now</button>
  </div>
</template>
