<template>
  <div class="bg-white flex flex-row justify-between px-8 fixed top-0 left-0 w-full z-50 shadow">
    <div class="container mx-auto px-4 py-6 text-white flex items-center max-w-[1920px]">
      <div class="text-lg font-bold text-blue-dark mr-12 flex flex-row items-center">
        <img src="../../assets/icons/logo.svg" class="mr-1"/>
        <h1 class="text-2xl">Kore</h1>
      </div>
      <p class="text-blue-light mx-4 font-semibold hover:text-blue-dark cursor-pointer">INVEST</p>
      <p class="text-blue-light mx-4 font-semibold hover:text-blue-dark cursor-pointer">FAQ</p>
      <p class="text-blue-light mx-4 font-semibold hover:text-blue-dark cursor-pointer">CONTACT US</p>
      <p class="text-blue-light mx-4 font-semibold hover:text-blue-dark cursor-pointer">EDUCATION</p>
    </div>
    <div class="flex flex-row items-center">
      <div class="mr-2">
        <BaseButton label="Login" variant="outline"/>
      </div>
      <BaseButton label="Sign up" variant="primary" />
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton from "../BaseButton.vue";
</script>
