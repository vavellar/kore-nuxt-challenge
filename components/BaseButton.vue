<template>
  <button
      :disabled="disabled"
      :class="[baseClasses, variants[variant]]"
  >
    <img
        v-if="icon"
        :src="icon"
        class="icon"
        alt="icon"
    />
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: "" },
  variant: {
    type: String,
    default: "primary",
    validator: v => ["primary", "outline"].includes(v)
  },
  disabled: { type: Boolean, default: false },
  icon: { type: String, default: null }
})

const baseClasses = "btn-base"

const variants = {
  primary: "btn-primary",
  outline: "btn-outline",
}
</script>

<style scoped>
.btn-base {
  @apply px-4 py-2 rounded-lg border border-2 font-medium transition
  flex items-center justify-center gap-2
  disabled:opacity-50 whitespace-nowrap w-full;
}

.btn-primary {
  @apply bg-blue-light text-white border-white
  hover:bg-blue-dark hover:border-blue-dark;
}

.btn-outline {
  @apply border-blue-light text-blue-light bg-white
  hover:bg-blue-light hover:text-white;
}

.icon {
  @apply w-5 h-5;
}
</style>
