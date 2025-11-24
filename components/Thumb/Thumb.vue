<template>
  <div class="layout-container">
    <div>
      <div class="back-button">
        <p>&lt;</p>
        <p>Back</p>
      </div>

      <div class="header-wrapper">
        <div class="logo-box">
          <img src="/icons/logo.svg" class="mr-1" />
          <h1>Kore</h1>
        </div>

        <div class="title-box">
          <h2>Kore</h2>
          <h3>Lorem ipsum dolor sit</h3>
        </div>
      </div>

      <div class="tags-section">
        <div class="tags-left">
          <div class="tag-outline">Fintech</div>
          <div class="tag-outline">Investments</div>
        </div>

        <div class="tags-right">
          <div class="tag-filled">
            <img src="/icons/calendar.svg" class="icon" />
            213 Days Left
          </div>

          <div class="tag-filled">
            157 Total Investors
          </div>
        </div>
      </div>

      <div class="thumbnail-section">
        <img src="/images/ThumbNail.svg" class="thumb" />
        <p class="thumb-url">https://site.com</p>
      </div>
    </div>

    <div class="side-content">
      <div class="share-area">
        <span>Share This Deal:</span>

        <div class="share-icons">
          <div class="icon-circle">
            <img src="/icons/facebook.svg" class="icon" />
          </div>

          <div class="icon-circle">
            <img src="/icons/LinkedIn.svg" class="icon" />
          </div>

          <div class="icon-circle">
            <img src="/icons/twitter.svg" class="icon" />
          </div>

          <div class="icon-circle">
            <img src="/icons/envelope.svg" class="icon" />
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
.layout-container {
  @apply grid grid-cols-1 gap-8 px-6 py-8 bg-blue-light
  sm:px-10 sm:py-12
  lg:grid-cols-[2fr_1fr] lg:gap-10 lg:px-20;
}

.back-button {
  @apply text-white flex items-center;
}
.back-button p:first-child {
  @apply mr-3 text-lg cursor-pointer;
}
.back-button p:last-child {
  @apply text-base;
}

.header-wrapper {
  @apply flex flex-col sm:flex-row sm:items-center mt-4;
}

.logo-box {
  @apply text-lg font-bold text-blue-dark mr-0 sm:mr-6 flex items-center
  bg-white py-4 px-3 rounded-lg w-max;
}
.logo-box h1 {
  @apply text-xl sm:text-2xl;
}

.title-box {
  @apply text-white flex flex-col mt-3 sm:mt-0;
}
.title-box h2 {
  @apply text-xl sm:text-2xl font-bold;
}
.title-box h3 {
  @apply text-lg sm:text-xl font-bold;
}

.tags-section {
  @apply flex flex-wrap justify-between items-center mt-4 gap-4 text-sm sm:text-base;
}

.tags-left {
  @apply flex gap-3;
}
.tag-outline {
  @apply px-4 py-1.5 border-2 border-white text-white rounded-full whitespace-nowrap;
}

.tags-right {
  @apply flex gap-3;
}
.tag-filled {
  @apply flex items-center gap-2 px-4 py-1.5 border-2 border-black text-black bg-white rounded-full whitespace-nowrap;
}

.icon {
  @apply w-4 h-4;
}

.thumbnail-section {
  @apply mt-4;
}
.thumb {
  @apply w-full rounded-lg;
}
.thumb-url {
  @apply mt-2 text-white break-all text-sm;
}

.side-content {
  @apply flex flex-col items-center lg:items-end justify-around;
}

.share-area {
  @apply py-4 px-2 flex items-center gap-4 text-white justify-center lg:justify-end w-full;
}
.share-area span {
  @apply text-sm sm:text-base font-light;
}

.share-icons {
  @apply flex items-center gap-3;
}

.icon-circle {
  @apply w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer;
}
</style>
