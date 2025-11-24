<template>
  <div class="max-w-md w-full bg-white rounded-2xl border border-blue-light">
    <div class="text-white p-8 text-center">
      <div class="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
        <img
            :src="`https://randomuser.me/api/portraits/men/${randomId}.jpg`"
            class="rounded-full object-cover"
        />
      </div>
      <h1 class="text-2xl font-semibold mb-1 text-blue-light">{{ name }}</h1>
      <p class="text-black text-sm font-light">{{ position }}</p>
    </div>

    <div class="p-6">
      <p class="text-gray-600 leading-relaxed text-center mb-6">
        {{ bio }}
      </p>


      <div class="flex justify-center space-x-5">
        <div class="flex items-center space-x-2 text-black font-medium text-sm">
          <img src="../../../assets/icons/LinkedIn.svg"/>
          <span>LinkedIn</span>
        </div>
        <div class="flex items-center space-x-2 text-black font-medium text-sm">
          <img src="../../../assets/icons/facebook.svg"/>
          <span>Facebook</span>
        </div>
        <div class="flex items-center space-x-2 text-black font-medium text-sm">
          <img src="../../../assets/icons/twitter.svg"/>
          <span>X</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
})

const socialLinks = [
  { name: 'LinkedIn', icon: 'LinkedIn'},
  { name: 'Facebook', icon: 'facebook'},
  { name: 'X', icon: 'twitter'},
]

const randomId = Math.floor(Math.random() * 99)

</script>

<style scoped>
</style>
