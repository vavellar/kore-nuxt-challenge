<template>
  <div class="border border-blue-light rounded-2xl p-6 w-full bg-white">
    <h2 class="text-blue-600 text-2xl font-semibold mb-4">
      Documents
    </h2>

    <hr class="border-blue-light mb-6" />

    <div class="space-y-6">
      <div v-for="(item, index) in termsList" :key="index">
        <div class="text-blue-light text-sm font-medium">
          {{ item.label }}
        </div>
        <div class="text-gray-900 text-lg flex font-semibold mb-6">
          <img src="../../../assets/icons/document.svg" class="mr-2"/>
          <p class="border-b border-black">
            FileName_GoesHere.pdf
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useOffering} from "../../../composables/useOffering.js";


const termsList = [
  { label: 'Form C'},
  { label: 'Custodian and Voting Agreement:'},
  { label: 'Future Proof Convertible Note'},
  { label: 'Future Proof Convertible Note'},
  { label: 'Future Proof Convertible Note'},
]
</script>
