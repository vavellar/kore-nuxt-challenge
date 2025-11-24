export default defineNuxtConfig({
  css: ['../assets/css/main.css'],
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  modules: [
    "@pinia/nuxt",
    '@nuxtjs/tailwindcss',
  ]
})
