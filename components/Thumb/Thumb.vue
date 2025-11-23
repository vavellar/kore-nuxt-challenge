<template>
  <div class="grid grid-cols-[2fr_1fr] grid-rows-1 gap-10 px-20 py-12 bg-blue-light">
    <div class="col-start-1 col-end-2 row-start-1 row-end-2">
      <div class="text-white flex flex-row items-center">
        <p class="mr-3"> < </p>
        <p>Back</p>
      </div>
      <div class="flex flex-row">
        <div class="text-lg font-bold text-blue-dark mr-6 flex flex-row items-center bg-white py-5 px-2 rounded-lg w-max mt-4">
          <img src="../../assets/icons/logo.svg" class="mr-1"/>
          <h1 class="text-2xl">Kore</h1>
        </div>
        <div class="flex text-white flex-col justify-evenly item-center">
          <h2 class="text-2xl font-bold">Kore</h2>
          <h3 class="text-xl font-bold">Lorem ipsum dolor sit</h3>
        </div>
      </div>
      <div class="w-full flex justify-between items-center mt-4 flex-wrap gap-4 my-4">
        <div class="flex gap-3">
          <div class="px-4 py-1.5 border-2 border-white text-white rounded-full text-sm font-light whitespace-nowrap">
            Fintech
          </div>

          <div class="px-4 py-1.5 border-2 border-white text-white rounded-full  text-sm font-light whitespace-nowrap">
            Investments
          </div>
        </div>

        <div class="flex gap-3">
          <div class="flex items-center gap-2 px-4 py-1.5 border-2 border-black text-black rounded-full bg-white text-sm font-light whitespace-nowrap">
            <img src="../assets/icons/calendar.svg" class="w-4 h-4" alt="">
            213 Days Left
          </div>

          <div class="px-4 py-1.5 border-2 border-black text-black  rounded-full bg-white text-sm font-light whitespace-nowrap">
            157 Total Investors
          </div>
        </div>

      </div>
      <div>
        <img src="../assets/images/ThumbNail.svg" class="w-full"/>
        <p class="mt-2 text-white">https://site.com</p>
      </div>
    </div>

    <div class="col-start-2 col-end-3 row-start-1 row-end-2 w-fit justify-evenly flex flex-col">
      <div class="py-6 px-4 flex items-center gap-4 text-white justify-end">
        <span class="text-md font-light">Share This Deal:</span>
        <div class="flex items-center gap-3">

          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <img src="../assets/icons/facebook.svg" class="w-4 h-4" />
          </div>

          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <img src="../assets/icons/LinkedIn.svg" class="w-4 h-4" />
          </div>

          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <img src="../assets/icons/twitter.svg" class="w-4 h-4" />
          </div>

          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <img src="../assets/icons/envelope.svg" class="w-4 h-4" />
          </div>

        </div>
      </div>
      <SummaryCard />
      <p class="text-white text-sm font-light mt-6 text-center">
        Purchased securities are not currently tradeable. Expect to hold your investment until the company lists on a national exchange or is acquired.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import SummaryCard from "./components/SummaryCard.vue";
</script>
