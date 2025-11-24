<template>
  <div class="page-grid">
    <div class="sidebar">
      <NuxtLink
          v-for="(option, index) in options"
          :key="index"
          :to="{ path: $route.fullPath.split('#')[0], hash: `#${option.to}` }"
          class="sidebar-link"
      >
        {{ option.text }}
      </NuxtLink>
    </div>

    <div class="content">
      <div class="top-section">
        <OfferingTerms terms="" class="w-full" />
        <Documents terms="" class="w-full" />
      </div>

      <div class="sections">
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

<style scoped>
.page-grid {
  @apply grid grid-cols-1 gap-10 px-6 py-10
  lg:grid-cols-[0.5fr_2fr]
  lg:px-32 lg:py-12;
}

.sidebar {
  @apply flex flex-col gap-2
  lg:sticky lg:top-20 lg:h-max;
}

.sidebar-link {
  @apply text-blue-light font-semibold cursor-pointer
  hover:text-blue-dark
  text-base lg:text-lg;
}


.top-section {
  @apply flex flex-col lg:flex-row gap-6;
}

.sections {
  @apply my-6 flex flex-col gap-10;
}
</style>
