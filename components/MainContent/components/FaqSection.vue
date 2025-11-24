<template>
  <section id="faq">
    <h2 class="faq-title">FAQ</h2>

    <div class="faq-wrapper">
      <div
          v-for="(item, index) in faqs"
          :key="index"
          class="faq-item"
      >
        <button class="faq-question" @click="toggle(index)">
          {{ item.question }}

          <svg
              class="faq-icon"
              :class="{ 'rotate-180': opened === index }"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div v-if="opened === index" class="faq-answer">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = [
  { question: "Lorem Ipsum", answer: "Lorem ipsum..." },
  { question: "Lorem Ipsum", answer: "Lorem ipsum..." },
  { question: "Lorem Ipsum", answer: "Lorem ipsum..." },
  { question: "Lorem Ipsum", answer: "Lorem ipsum..." }
]

const opened = ref(null)

function toggle(index) {
  opened.value = opened.value === index ? null : index
}
</script>

<style scoped>
.faq-title {
  @apply text-blue-light text-3xl font-bold;
}

.faq-wrapper {
  @apply space-y-4 mt-6;
}

.faq-item {
  @apply border rounded-lg border-blue-light;
}

.faq-question {
  @apply w-full text-left p-4 text-blue-light font-semibold flex justify-between items-center cursor-pointer;
}

.faq-icon {
  @apply w-5 h-5 transform transition-transform duration-200;
}

.faq-answer {
  @apply px-4 pb-4 text-gray-700;
}
</style>
