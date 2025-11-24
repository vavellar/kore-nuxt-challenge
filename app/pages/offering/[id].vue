<template>
  <div v-if="error" class="error-container">
    <p class="error-text">
      {{ error }}
    </p>
    <NuxtLink to="/" class="back-link">
      Back
    </NuxtLink>
  </div>

  <div class="page-wrapper" v-else>
    <Header />
    <div class="content-wrapper">
      <Thumb />
      <MainContent />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "nuxt/app";
import { useOffering } from '../../../composables/useOffering'
import Header from "../../../components/layout/Header.vue";
import Thumb from "../../../components/Thumb/Thumb.vue";
import MainContent from "../../../components/MainContent/MainContent.vue";
import Footer from "../../../components/layout/Footer.vue";

const route = useRoute()
const { fetch, error } = useOffering()

await fetch(String(route.params.id))
</script>

<style scoped>
.error-container {
  @apply w-fit mx-auto mt-20 flex flex-col items-center;
}

.error-text {
  @apply text-red-500 text-center mt-10;
}

.back-link {
  @apply mt-4 underline text-blue-600 hover:text-blue-800;
}

.page-wrapper {
  @apply min-h-screen w-full border border-gray-100 max-w-[1920px] mx-auto;
}

.content-wrapper {
  @apply mt-20;
}
</style>
