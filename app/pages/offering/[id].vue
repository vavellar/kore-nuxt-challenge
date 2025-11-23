<template>
  <div class="min-h-screen bg-gray-50 pb-12">
    <Header />

    <div class="bg-blue-200">
      <div class="col-span-8">
        <OfferingHeader :data="store.data" />
      </div>
      <div  class="col-span-8">
        <OfferingHeroVideo :videoUrl="store.data?.video" />
      </div>
    </div>
    <div class="col-span-4">
      <div class="mt-6 space-y-6">
        <OfferingTerms :terms="store.data?.terms" />
        <OfferingDocuments :documents="store.data?.documents" />
        <TeamSection :team="store.data?.team" />
        <MarketingPlan :plan="store.data?.marketingPlan" />
        <FaqSection :faq="store.data?.faq" />
      </div>
      <OfferingSummaryCard :summary="store.data?.summary" />
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
