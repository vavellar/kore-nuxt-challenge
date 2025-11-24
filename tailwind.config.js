/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#204496',
        'blue-light': '#0084F8'
      }
    },
  },
  plugins: [],
}
