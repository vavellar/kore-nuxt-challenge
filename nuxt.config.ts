export default defineNuxtConfig({
  css: ['../public/css/main.css'],
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  modules: [
    "@pinia/nuxt",
    '@nuxtjs/tailwindcss',
  ]
})
