<template>
  <div class="doc-card">
    <h2 class="doc-title">Documents</h2>

    <hr class="doc-divider" />

    <div class="doc-list">
      <div v-for="(item, index) in termsList" :key="index">
        <div class="doc-label">
          {{ item.label }}
        </div>

        <div class="doc-file">
          <img src="../../../assets/icons/document.svg" class="doc-icon" />
          <p class="doc-filename">FileName_GoesHere.pdf</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const termsList = [
  { label: 'Form C' },
  { label: 'Custodian and Voting Agreement:' },
  { label: 'Future Proof Convertible Note' },
  { label: 'Future Proof Convertible Note' },
  { label: 'Future Proof Convertible Note' },
]
</script>

<style scoped>
.doc-card {
  @apply border border-blue-light rounded-2xl p-6 w-full bg-white;
}

.doc-title {
  @apply text-blue-600 text-2xl font-semibold mb-4;
}

.doc-divider {
  @apply border-blue-light mb-6;
}

.doc-list {
  @apply space-y-6;
}

.doc-label {
  @apply text-blue-light text-sm font-medium;
}

.doc-file {
  @apply text-gray-900 text-lg flex font-semibold mb-6;
}

.doc-icon {
  @apply mr-2;
}

.doc-filename {
  @apply border-b border-black;
}
</style>
