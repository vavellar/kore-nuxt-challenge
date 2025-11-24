<template>
  <div
      class="w-full bg-white border-2 border-white rounded-2xl p-6 shadow-sm max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
  >
    <div class="flex items-center justify-between mb-1">
      <p class="text-gray-600 text-sm mt-2">Funding Goal</p>
      <div class="px-4 py-1 border-2 border-gray-300 rounded-full text-gray-600 text-sm whitespace-nowrap">
        RegCF
      </div>
    </div>

    <p class="text-xl font-light text-black">{{ format(summary.raiseGoal) }}</p>

    <p class="text-blue-light font-light text-xl">Funds Raised</p>
    <p class="text-3xl font-bold text-blue-light">{{ format(summary.raised) }}</p>

    <hr class="my-4 border-gray-300">

    <div class="flex items-baseline gap-2 text-[16px]">
      <span class="font-bold text-black text-xl">{{ format(summary.minInvestment) }}</span>
      <span class="text-gray-600 text-xl">Minimum Investment</span>
    </div>

    <hr class="my-4 border-gray-300">

    <p class="text-gray-600 font-light text-lg">Deadline:
      <span class="font-semibold text-black ml-1 text-2xl">{{ formatMonthYear(summary.closeDate) }}</span>
    </p>

    <p class="mt-3 text-gray-600 text-lg font-light">
      Type of Security:
      <span class="font-semibold text-black text-2xl">Revenue Share Agreement</span>
    </p>

    <p class="mt-3 text-gray-600 font-light text-lg">
      Revenue Share Duration:
      <span class="font-semibold text-black text-2xl">{{ summary.durationMonths }} months</span>
    </p>

    <div class="mt-8">
      <BaseButton label="Invest Now" variant="primary" />

      <div class="text-center mt-4">
        <a href="#" class="text-black underline font-medium">
          View Offering Circular
        </a>
      </div>
    </div>
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
