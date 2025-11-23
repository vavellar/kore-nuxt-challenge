<template>
  <div class="min-h-screen bg-gray-50 pb-12 max-w-[1920px] mx-auto">
    <Header />
  <div class="mt-16">
  <OfferingHeader :data="store.data"/>
  </div>

  </div>
</template>

<script setup lang="ts">
import { useRoute} from "nuxt/app";
import { useOfferingStore } from '../../../stores/offering'
import OfferingHeader from "../../../components/OfferingHeader.vue";
import OfferingHeroVideo from "../../../components/OfferingHeroVideo.vue";
import OfferingTerms from "../../../components/OfferingTerms.vue";
import OfferingDocuments from "../../../components/OfferingDocuments.vue";
import TeamSection from "../../../components/TeamSection.vue";
import MarketingPlan from "../../../components/MarketingPlan.vue";
import FaqSection from "../../../components/FaqSection.vue";
import OfferingSummaryCard from "../../../components/OfferingSummaryCard.vue";
import Header from "../../../components/layout/Header.vue";
const route = useRoute()
const store = useOfferingStore()
await store.fetchOffering(String(route.params.id || '1'))
</script>
