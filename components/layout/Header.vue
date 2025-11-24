<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <img src="../../assets/icons/logo.svg" class="mr-1" />
        <h1 class="text-2xl">Kore</h1>
      </div>

      <div class="navbar-links">
        <p class="nav-link">INVEST</p>
        <p class="nav-link">FAQ</p>
        <p class="nav-link">CONTACT US</p>
        <p class="nav-link">EDUCATION</p>
      </div>
    </div>

    <div class="navbar-actions">
      <div class="mr-2">
        <BaseButton label="Login" variant="outline" />
      </div>
      <BaseButton label="Sign up" variant="primary" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../BaseButton.vue";
</script>
<style scoped>
.navbar {
  @apply bg-white flex flex-row justify-between px-8 fixed top-0 left-0 w-full z-50 shadow;
}

.navbar-container {
  @apply container mx-auto px-4 py-6 flex items-center max-w-[1920px];
}

.navbar-logo {
  @apply text-lg font-bold text-blue-dark mr-12 flex flex-row items-center;
}

.navbar-links {
  @apply hidden md:flex flex-row;
}

.nav-link {
  @apply text-blue-light mx-4 font-semibold hover:text-blue-dark cursor-pointer;
}

.navbar-actions {
  @apply flex flex-row items-center;
}
</style>

