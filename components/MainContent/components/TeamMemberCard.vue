<template>
  <div class="card-container">
    <div class="card-header">
      <div class="avatar-wrapper">
        <img
            :src="`https://randomuser.me/api/portraits/men/${randomId}.jpg`"
            class="avatar-image"
        />
      </div>

      <h1 class="member-name">{{ name }}</h1>
      <p class="member-position">{{ position }}</p>
    </div>

    <div class="card-body">
      <p class="member-bio">
        {{ bio }}
      </p>

      <div class="social-wrapper">
        <div class="social-item">
          <img src="/icons/LinkedIn.svg" />
          <span>LinkedIn</span>
        </div>

        <div class="social-item">
          <img src="/icons/facebook.svg" />
          <span>Facebook</span>
        </div>

        <div class="social-item">
          <img src="/icons/twitter.svg" />
          <span>X</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  position: String,
  bio: String,
})

const randomId = Math.floor(Math.random() * 99)
</script>

<style scoped>
.social-wrapper {
  @apply flex justify-center space-x-5;
}

.social-item {
  @apply flex items-center space-x-2 text-black font-medium text-sm cursor-pointer;
}

.card-container {
  @apply w-full bg-white rounded-2xl border border-blue-light max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl;
}

.card-header {
  @apply text-white p-8 text-center;
}

.avatar-wrapper {
  @apply w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4;
}

.avatar-image {
  @apply rounded-full object-cover;
}

.member-name {
  @apply text-2xl font-semibold mb-1 text-blue-light;
}

.member-position {
  @apply text-black text-sm font-light;
}

.card-body {
  @apply p-6;
}

.member-bio {
  @apply text-gray-600 leading-relaxed text-center mb-6;
}

.social-row {
  @apply flex justify-center space-x-5;
}

.social-item {
  @apply flex items-center space-x-2 text-black font-medium text-sm;
}
</style>
