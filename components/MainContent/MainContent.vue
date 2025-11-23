<template>
  <div class="grid grid-cols-[0.5fr_2fr] grid-rows-1 gap-10 px-20 py-12">
    <div class="sticky top-20 h-max">
      <div class="flex flex-col gap-2">
        <NuxtLink class="text-blue-light font-semibold cursor-pointer hover:text-blue-dark" v-for="(option, index) in options" :key="index"   :to="{ path: $route.fullPath.split('#')[0], hash: `#${option.to}` }">
          {{ option.text }}
        </NuxtLink>
      </div>
    </div>
    <div>
      <div class="flex flex-row gap-6">
        <OfferingTerms terms="" class="w-full"/>
        <Documents terms="" class="w-full"/>
      </div>
      <div class="my-6">
        <Team />
        <PerfomanceMarketingPlan />
        <FaqSection />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import OfferingTerms from "./components/OfferingTerms.vue";
import Documents from "./components/Documents.vue";
import PerfomanceMarketingPlan from "./components/PerfomanceMarketingPlan.vue";
import Team from "./components/Team.vue";
import FaqSection from "./components/FaqSection.vue";

const options = [
  { text: 'Offering Terms and Documents', to: 'offering-terms' },
  { text: 'Team', to: 'team' },
  { text: 'Marketing Plan', to: 'marketing-plan' },
  { text: 'FAQ', to: 'faq' }
]
</script>
