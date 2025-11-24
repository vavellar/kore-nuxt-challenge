<template>
  <div
      class="
      grid grid-cols-1 gap-10
      px-6 py-10

      lg:grid-cols-[0.5fr_2fr]
      lg:px-32 lg:py-12
    "
  >
    <div
        class="
        flex flex-col gap-2
        lg:sticky lg:top-20 lg:h-max
      "
    >
      <NuxtLink
          v-for="(option, index) in options"
          :key="index"
          :to="{ path: $route.fullPath.split('#')[0], hash: `#${option.to}` }"
          class="
          text-blue-light font-semibold cursor-pointer
          hover:text-blue-dark
          text-base lg:text-lg
        "
      >
        {{ option.text }}
      </NuxtLink>
    </div>

    <div>
      <div class="flex flex-col lg:flex-row gap-6">
        <OfferingTerms terms="" class="w-full" />
        <Documents terms="" class="w-full" />
      </div>

      <div class="my-6 flex flex-col gap-10">
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
  { text: "Offering Terms and Documents", to: "offering-terms" },
  { text: "Team", to: "team" },
  { text: "Marketing Plan", to: "marketing-plan" },
  { text: "FAQ", to: "faq" },
];
</script>
