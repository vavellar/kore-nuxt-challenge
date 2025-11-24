<template>
  <div v-if="error" class="w-fit mx-auto mt-20 flex flex-col items-center">
    <p class="text-red-500 text-center mt-10">
      {{ error }}
    </p>
    <NuxtLink to="/" class="mt-4">
      Back
    </NuxtLink>

  </div>
  <div class="min-h-screen w-full border border-gray-100 max-w-[1920px] mx-auto" v-else>
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
import BaseButton from "../../../components/BaseButton.vue";
const route = useRoute()
const { fetch, error } = useOffering()

await fetch(String(route.params.id))
</script>
