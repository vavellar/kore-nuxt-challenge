<template>
  <div class="border border-blue-light rounded-2xl p-6 max-w-xl bg-white" id="offering-terms">
    <h2 class="text-blue-600 text-2xl font-semibold mb-4">
      Offering Terms
    </h2>

    <hr class="border-blue-light mb-6" />

    <div class="space-y-6">
      <div v-for="(item, index) in termsList" :key="index">
        <div class="text-blue-light text-sm font-medium">
          {{ item.label }}
        </div>
        <div class="text-gray-900 text-lg font-semibold">
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useOffering} from "../../../composables/useOffering.js";


const { terms } = useOffering()

const termsList = [
  { label: 'Regulation', value: terms.value.regulation },
  { label: 'Offering Type', value: terms.value.offeringType },
  { label: 'Security Type', value: terms.value.securityType },
  { label: 'Target Offering', value: terms.value.targetOffering },
  { label: 'Max Offering', value: terms.value.maxOffering },
  { label: 'Min Investment', value: terms.value.minInvestment },
  { label: 'Max Investment', value: terms.value.maxInvestment },
  { label: 'Minimum Hold Period', value: terms.value.holdPeriod },
  { label: 'Closing Date', value: terms.value.closingDate }
]
</script>
