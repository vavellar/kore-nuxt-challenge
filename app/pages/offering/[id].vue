<template>
  <div class="min-h-screen bg-white max-w-[1920px] mx-auto">
    <Header />
  <div class="mt-20">
    <Thumb />
    <MainContent />
  </div>
  <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRoute} from "nuxt/app";
import { useOffering } from '../../../composables/useOffering'
import Header from "../../../components/layout/Header.vue";
import Thumb from "../../../components/Thumb/Thumb.vue";
import MainContent from "../../../components/MainContent/MainContent.vue";
import FaqSection from "../../../components/MainContent/components/FaqSection.vue";
import Footer from "../../../components/layout/Footer.vue";
const route = useRoute()
const { fetch } = useOffering()

await fetch(String(route.params.id))
</script>
