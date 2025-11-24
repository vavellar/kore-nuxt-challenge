<template>
  <div
      class="
        grid grid-cols-1
        gap-8
        px-6 py-8
        bg-blue-light

        sm:px-10 sm:py-12
        lg:grid-cols-[2fr_1fr] lg:gap-10 lg:px-20
    "
  >
    <div>
      <div class="text-white flex items-center">
        <p class="mr-3 text-lg cursor-pointer">&lt;</p>
        <p class="text-base">Back</p>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center mt-4">
        <div
            class="text-lg font-bold text-blue-dark mr-0 sm:mr-6 flex items-center bg-white py-4 px-3 rounded-lg w-max"
        >
          <img src="../../assets/icons/logo.svg" class="mr-1" />
          <h1 class="text-xl sm:text-2xl">Kore</h1>
        </div>

        <div class="text-white flex flex-col mt-3 sm:mt-0">
          <h2 class="text-xl sm:text-2xl font-bold">Kore</h2>
          <h3 class="text-lg sm:text-xl font-bold">Lorem ipsum dolor sit</h3>
        </div>
      </div>

      <div
          class="flex flex-wrap justify-between items-center mt-4 gap-4 text-sm sm:text-base"
      >
        <div class="flex gap-3">
          <div
              class="px-4 py-1.5 border-2 border-white text-white rounded-full whitespace-nowrap"
          >
            Fintech
          </div>

          <div
              class="px-4 py-1.5 border-2 border-white text-white rounded-full whitespace-nowrap"
          >
            Investments
          </div>
        </div>

        <div class="flex gap-3">
          <div
              class="flex items-center gap-2 px-4 py-1.5 border-2 border-black text-black bg-white rounded-full whitespace-nowrap"
          >
            <img src="../assets/icons/calendar.svg" class="w-4 h-4" />
            213 Days Left
          </div>

          <div
              class="px-4 py-1.5 border-2 border-black text-black bg-white rounded-full whitespace-nowrap"
          >
            157 Total Investors
          </div>
        </div>
      </div>

      <div class="mt-4">
        <img src="../assets/images/ThumbNail.svg" class="w-full rounded-lg" />
        <p class="mt-2 text-white break-all text-sm">
          https://site.com
        </p>
      </div>
    </div>

    <div class="flex flex-col items-center lg:items-end justify-around">
      <div
          class="py-4 px-2 flex items-center gap-4 text-white justify-center lg:justify-end w-full"
      >
        <span class="text-sm sm:text-base font-light">Share This Deal:</span>

        <div class="flex items-center gap-3">
          <div class="icon-circle">
            <img src="../assets/icons/facebook.svg" class="w-4 h-4" />
          </div>

          <div class="icon-circle">
            <img src="../assets/icons/LinkedIn.svg" class="w-4 h-4" />
          </div>

          <div class="icon-circle">
            <img src="../assets/icons/twitter.svg" class="w-4 h-4" />
          </div>

          <div class="icon-circle">
            <img src="../assets/icons/envelope.svg" class="w-4 h-4" />
          </div>
        </div>
      </div>

      <SummaryCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import SummaryCard from "./components/SummaryCard.vue";
</script>

<style scoped>
.icon-circle {
  @apply w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer;
}
</style>
