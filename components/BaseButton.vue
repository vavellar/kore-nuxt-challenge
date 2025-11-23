<script setup>
const props = defineProps({
  label: { type: String, default: "" },
  variant: {
    type: String,
    default: "primary",
    validator: v => ["primary", "secondary", "outline", "danger"].includes(v)
  },
  disabled: { type: Boolean, default: false },
  icon: { type: String, default: null }
})

const baseClasses =
    "px-4 py-2 rounded-lg border border-2 font-medium transition flex items-center justify-center gap-2 disabled:opacity-50 whitespace-nowrap"

const variants = {
  primary: "bg-blue-light text-white border-white hover:bg-blue-dark hover:border-blue-dark",
  outline: "border-blue-light text-blue-light bg-white hover:bg-blue-light hover:text-white",
}
</script>

<template>
  <button
      :disabled="disabled"
      :class="[baseClasses, variants[variant]]"
  >
    <img
        v-if="icon"
        :src="icon"
        class="w-5 h-5"
        alt="icon"
    />
    <slot>{{ label }}</slot>
  </button>
</template>
