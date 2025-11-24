export default defineNuxtConfig({
  ssr: true,
  css: ['../assets/css/tailwind.css'],
  nitro: {
    preset: 'netlify',
  },
  modules: ['@pinia/nuxt'],
})
