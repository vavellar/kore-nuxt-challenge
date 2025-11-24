<template>
  <footer class="footer" role="contentinfo" aria-label="Kore footer and newsletter">
    <div class="footer-container">
      <div>
        <div class="footer-logo">
          <img src="/icons/logo-white.svg" class="mr-1"/>
          <span class="text-2xl font-bold">Kore</span>
        </div>

        <p class="footer-text">
          Join our newsletter to stay up to date on features and releases.
        </p>

        <form class="max-w-[720px]" @submit.prevent="onSubmit" novalidate>
          <div class="flex gap-4 mb-4 flex-col sm:flex-row">
            <div class="flex-1">
              <label class="text-base mb-2">First Name</label>
              <input
                  v-model="firstName"
                  type="text"
                  autocomplete="given-name"
                  placeholder="First name"
                  aria-label="First name"
                  class="footer-input"
              />
            </div>

            <div class="flex-1">
              <label class="text-base mb-2">Last Name</label>
              <input
                  v-model="lastName"
                  type="text"
                  autocomplete="family-name"
                  placeholder="Last name"
                  aria-label="Last name"
                  class="footer-input"
              />
            </div>
          </div>

          <div class="flex gap-0 flex-col sm:flex-row items-stretch mb-3">
            <label class="flex-1">
              <input
                  v-model="email"
                  type="email"
                  autocomplete="email"
                  required
                  :aria-invalid="!!emailError"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  class="footer-email"
              />
            </label>

            <button
                type="submit"
                :disabled="submitting || !isEmailValid"
                :aria-disabled="submitting || !isEmailValid"
                class="footer-btn mt-3 sm:mt-0"
            >
              <span v-if="!submitting">Subscribe</span>
              <span v-else>Sending…</span>
            </button>
          </div>

          <p v-if="emailError" class="text-sm text-rose-200 mt-2" role="alert">{{ emailError }}</p>
          <p v-if="successMessage" class="text-sm text-emerald-200 mt-2" role="status">{{ successMessage }}</p>

          <p class="text-xs text-slate-200 mt-4 max-w-[720px]">
            By subscribing you agree to with our
            <a href="#" class="footer-link">Privacy Policy</a> and provide consent to receive updates from our company.
          </p>
        </form>
      </div>

      <div aria-label="Site links">
        <h4 class="font-semibold text-base mb-3">The All-in-One Platform</h4>

        <ul class="footer-list">
          <li><a href="#" class="footer-link">About us</a></li>
          <li><a href="#" class="footer-link">KoreTeam</a></li>
          <li><a href="#" class="footer-link">KorePartners</a></li>
          <li><a href="#" class="footer-link">Media</a></li>
        </ul>

        <ul class="footer-list mt-4">
          <li><a href="#" class="footer-link">GPDR Compliance</a></li>
          <li><a href="#" class="footer-link">Contact</a></li>
          <li><a href="#" class="footer-link">Pricing</a></li>
        </ul>
      </div>

      <div aria-label="Follow us">
        <h4 class="font-semibold text-base mb-3">Follow Us</h4>

        <ul class="footer-list">
          <li>
            <a href="#" aria-label="Facebook" class="inline-flex items-center gap-3 footer-link">
              <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H20l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>
              Facebook
            </a>
          </li>

          <li>
            <a href="#" aria-label="Instagram" class="inline-flex items-center gap-3 footer-link">
              <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.1A4.9 4.9 0 1 0 16.9 13 4.9 4.9 0 0 0 12 8.1zM18.5 5.5a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z"/></svg>
              Instagram
            </a>
          </li>

          <li>
            <a href="#" aria-label="X" class="inline-flex items-center gap-3 footer-link">
              <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 5.2c-.4.2-.9.3-1.4.4.5-.3.8-.8.9-1.4-.5.3-1 .6-1.6.7C19.8 4 18.8 3.5 17.6 3.5c-1.6 0-2.8 1.3-2.8 2.9 0 .2 0 .4.1.6C11.6 6.8 8.2 5 6 3c-.3.4-.5.8-.5 1.4 0 1 .5 1.9 1.3 2.4-.4 0-.8-.1-1.1-.3v.1c0 1.4 1 2.6 2.3 2.9-.4.1-.9.2-1.4.1.4 1.2 1.6 2 3 2.1-1.1.8-2.4 1.3-3.8 1.3H6c1.4.9 3.1 1.4 4.9 1.4 5.9 0 9.1-4.9 9.1-9.2v-.4c.7-.5 1.2-1.2 1.6-2z"/></svg>
              X
            </a>
          </li>

          <li>
            <a href="#" aria-label="LinkedIn" class="inline-flex items-center gap-3 footer-link">
              <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zM9 9.75h3.8v1.5h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.2 2.4 4.2 5.4v6.9h-4v-6.1c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3v6.2H9v-11z"/></svg>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div class="text-sm">© 2016-2025 KoreConX Inc.</div>
      <nav class="flex gap-6 text-slate-200 text-sm" aria-label="Footer legal links">
        <a href="#" class="footer-link">Privacy Policy</a>
        <a href="#" class="footer-link">Terms of Service</a>
        <a href="#" class="footer-link">Cookie Preferences</a>
      </nav>
    </div>
  </footer>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const submitting = ref(false)
const successMessage = ref('')
const emailError = ref('')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isEmailValid = computed(() => emailRegex.test(email.value))

function validateEmail() {
  emailError.value = ''
  if (!email.value) {
    emailError.value = 'Please enter your email.'
    return false
  }
  if (!emailRegex.test(email.value)) {
    emailError.value = 'Please enter a valid email address.'
    return false
  }
  return true
}

async function onSubmit() {
  emailError.value = ''
  successMessage.value = ''

  if (!validateEmail()) return

  submitting.value = true

  try {
    await new Promise((r) => setTimeout(r, 900))
    successMessage.value = 'Thanks for subscribing!'
    firstName.value = ''
    lastName.value = ''
    email.value = ''
  } catch (err) {
    emailError.value = 'Could not subscribe at this time. Please try again later.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.footer {
  @apply bg-blue-dark text-white px-6 py-12;
}

.footer-container {
  @apply max-w-[1200px] mx-auto grid gap-12 grid-cols-1 md:grid-cols-[1fr_340px_260px] items-start;
}

.footer-logo {
  @apply flex items-center gap-4 mb-4;
}

.footer-text {
  @apply text-slate-200 mb-6 max-w-[520px];
}

.footer-input {
  @apply w-full px-4 py-3 rounded-md border border-white/20 bg-white text-slate-800
  focus:outline-none focus:ring-2 focus:ring-white/30;
}

.footer-email {
  @apply w-full px-4 py-4 rounded-l-md sm:rounded-l-md sm:rounded-r-none border-none
  outline-none text-slate-700;
}

.footer-btn {
  @apply bg-[#26375f] hover:bg-[#1f2d4a] disabled:opacity-60 disabled:cursor-not-allowed
  text-white px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md min-w-[140px]
  transition;
}

.footer-link {
  @apply hover:underline;
}

.footer-list {
  @apply space-y-2 text-slate-200;
}
</style>

