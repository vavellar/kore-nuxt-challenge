<template>
  <div>
    <div class="summary-card">

      <div class="summary-card-header">
        <p class="summary-card-label">Funding Goal</p>
        <div class="summary-card-badge">RegCF</div>
      </div>

      <p class="summary-card-value">{{ format(summary.raiseGoal) }}</p>

      <p class="summary-card-raised-title">Funds Raised</p>
      <p class="summary-card-raised-value">{{ format(summary.raised) }}</p>

      <hr class="summary-card-divider">

      <div class="summary-card-min">
        <span class="summary-card-min-value">{{ format(summary.minInvestment) }}</span>
        <span class="summary-card-min-label">Minimum Investment</span>
      </div>

      <hr class="summary-card-divider">

      <p class="summary-card-info-text">
        Deadline:
        <span class="summary-card-info-strong">{{ formatMonthYear(summary.closeDate) }}</span>
      </p>

      <p class="summary-card-info-text mt-3">
        Type of Security:
        <span class="summary-card-info-strong">Revenue Share Agreement</span>
      </p>

      <p class="summary-card-info-text mt-3">
        Revenue Share Duration:
        <span class="summary-card-info-strong">{{ summary.durationMonths }} months</span>
      </p>

      <div class="summary-card-footer">
        <BaseButton label="Invest Now" variant="primary" />
        <div class="text-center mt-4">
          <a href="#" class="summary-card-link">View Offering Circular</a>
        </div>
      </div>
    </div>

    <p class="summary-disclaimer">
      Purchased securities are not currently tradeable. Expect to hold your
      investment until the company lists on a national exchange or is
      acquired.
    </p>
  </div>
</template>

<script setup lang="ts">
import {useOffering} from "../../../composables/useOffering";
import BaseButton from "../../BaseButton.vue";
import {useMoney} from "../../../composables/useMoney";
import {useDate} from "../../../composables/useDate";
const { summary } = useOffering()
const { format } = useMoney()
const { formatMonthYear} = useDate()
</script>

<style>
.summary-card {
  @apply w-full bg-white border-2 border-white rounded-2xl p-6 shadow-sm
  max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl;
}

.summary-card-header {
  @apply flex items-center justify-between mb-1;
}

.summary-card-label {
  @apply text-gray-600 text-sm mt-2;
}

.summary-card-badge {
  @apply px-4 py-1 border-2 border-gray-300 rounded-full text-gray-600 text-sm whitespace-nowrap;
}

.summary-card-value {
  @apply text-xl font-light text-black;
}

.summary-card-raised-title {
  @apply text-blue-light font-light text-xl;
}

.summary-card-raised-value {
  @apply text-3xl font-bold text-blue-light;
}

.summary-card-divider {
  @apply my-4 border-gray-300;
}

.summary-card-min {
  @apply flex items-baseline gap-2 text-[16px];
}

.summary-card-min-value {
  @apply font-bold text-black text-xl;
}

.summary-card-min-label {
  @apply text-gray-600 text-xl;
}

.summary-card-info-text {
  @apply text-gray-600 font-light text-lg;
}

.summary-card-info-strong {
  @apply font-semibold text-black text-2xl ml-1;
}

.summary-card-footer {
  @apply mt-8;
}

.summary-card-link {
  @apply text-black underline font-medium;
}

.summary-disclaimer {
  @apply text-white text-sm font-extralight mt-6 text-center px-4;
}

</style>
