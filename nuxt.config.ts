export default defineNuxtConfig({
  css: [
    '../assets/css/tailwind.css'
  ],
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  modules: [
    "@pinia/nuxt",
    '@nuxtjs/tailwindcss',
  ]
})
