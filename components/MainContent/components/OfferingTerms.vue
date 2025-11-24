<template>
  <div class="terms-container" id="offering-terms">
    <h2 class="terms-title">Offering Terms</h2>

    <hr class="terms-divider" />

    <div class="terms-list">
      <div v-for="(item, index) in termsList" :key="index">
        <div class="terms-label">{{ item.label }}</div>
        <div class="terms-value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOffering } from "../../../composables/useOffering.js";
import { useMoney } from "../../../composables/useMoney.js";
import { useDate } from "../../../composables/useDate.js";

const { terms } = useOffering()
const { format } = useMoney()
const { formatMonthYear } = useDate()

const termsList = [
  { label: 'Regulation', value: terms.value.regulation },
  { label: 'Offering Type', value: terms.value.offeringType },
  { label: 'Security Type', value: terms.value.securityType },
  { label: 'Target Offering', value: format(terms.value.targetOffering) },
  { label: 'Max Offering', value: format(terms.value.maxOffering) },
  { label: 'Min Investment', value: format(terms.value.minInvestment) },
  { label: 'Max Investment', value: format(terms.value.maxInvestment) },
  { label: 'Minimum Hold Period', value: terms.value.holdPeriod },
  { label: 'Closing Date', value: formatMonthYear(terms.value.closingDate) }
]
</script>

<style scoped>
.terms-container {
  @apply border border-blue-light rounded-2xl p-6 w-full bg-white;
}

.terms-title {
  @apply text-blue-600 text-2xl font-semibold mb-4;
}

.terms-divider {
  @apply border-blue-light mb-6;
}

.terms-list {
  @apply space-y-6;
}

.terms-label {
  @apply text-blue-light text-sm font-medium;
}

.terms-value {
  @apply text-gray-900 text-lg font-semibold;
}
</style>
