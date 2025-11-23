<template>
 <section id="faq">
   <h2 class="text-blue-light text-3xl font-bold">FAQ</h2>
   <div class="space-y-4 mt-6">
     <div
         v-for="(item, index) in faqs"
         :key="index"
         class="border rounded-lg border-blue-light"
     >
       <button
           class="w-full text-left p-4 text-blue-light font-semibold flex justify-between items-center"
           @click="toggle(index)"
       >
         {{ item.question }}
         <svg
             class="w-5 h-5 transform transition-transform duration-200"
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

       <div
           v-if="opened === index"
           class="px-4 pb-4 text-gray-700"
       >
         {{ item.answer }}
       </div>
     </div>
   </div>
 </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: "Lorem Ipsum",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa mauris, congue in neque non, venenatis porttitor metus. Sed at dignissim risus. Phasellus et tortor quis sapien sollicitudin facilisis at non augue. Morbi quis sapien ipsum. Mauris venenatis pharetra nisi, at consectetur tellus pellentesque non. Integer at hendrerit dui. Morbi vel ultricies nisl. Sed aliquam, metus a feugiat faucibus, ipsum libero viverra mauris, sit amet convallis mi mi ac leo. Pellentesque ultrices auctor elit, ultricies vestibulum diam iaculis mollis. Suspendisse diam orci, pretium quis tellus id, placerat vestibulum ligula. Sed eu enim vel erat bibendum porta et sed lacus. Aliquam hendrerit facilisis turpis vitae interdum. Curabitur erat massa, ullamcorper sed tellus ac, faucibus pretium diam. Praesent vitae dui non tortor lobortis tempor ut at nisi. Vestibulum dapibus nulla eu dolor viverra pellentesque. Donec ut diam a risus ultricies commodo at ac velit."
  },
  {
    question: "Lorem Ipsum",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa mauris, congue in neque non, venenatis porttitor metus. Sed at dignissim risus. Phasellus et tortor quis sapien sollicitudin facilisis at non augue. Morbi quis sapien ipsum. Mauris venenatis pharetra nisi, at consectetur tellus pellentesque non. Integer at hendrerit dui. Morbi vel ultricies nisl. Sed aliquam, metus a feugiat faucibus, ipsum libero viverra mauris, sit amet convallis mi mi ac leo. Pellentesque ultrices auctor elit, ultricies vestibulum diam iaculis mollis. Suspendisse diam orci, pretium quis tellus id, placerat vestibulum ligula. Sed eu enim vel erat bibendum porta et sed lacus. Aliquam hendrerit facilisis turpis vitae interdum. Curabitur erat massa, ullamcorper sed tellus ac, faucibus pretium diam. Praesent vitae dui non tortor lobortis tempor ut at nisi. Vestibulum dapibus nulla eu dolor viverra pellentesque. Donec ut diam a risus ultricies commodo at ac velit."

  },
  {
    question: "Lorem Ipsum",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa mauris, congue in neque non, venenatis porttitor metus. Sed at dignissim risus. Phasellus et tortor quis sapien sollicitudin facilisis at non augue. Morbi quis sapien ipsum. Mauris venenatis pharetra nisi, at consectetur tellus pellentesque non. Integer at hendrerit dui. Morbi vel ultricies nisl. Sed aliquam, metus a feugiat faucibus, ipsum libero viverra mauris, sit amet convallis mi mi ac leo. Pellentesque ultrices auctor elit, ultricies vestibulum diam iaculis mollis. Suspendisse diam orci, pretium quis tellus id, placerat vestibulum ligula. Sed eu enim vel erat bibendum porta et sed lacus. Aliquam hendrerit facilisis turpis vitae interdum. Curabitur erat massa, ullamcorper sed tellus ac, faucibus pretium diam. Praesent vitae dui non tortor lobortis tempor ut at nisi. Vestibulum dapibus nulla eu dolor viverra pellentesque. Donec ut diam a risus ultricies commodo at ac velit."

  },
  {
    question: "Lorem Ipsum",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa mauris, congue in neque non, venenatis porttitor metus. Sed at dignissim risus. Phasellus et tortor quis sapien sollicitudin facilisis at non augue. Morbi quis sapien ipsum. Mauris venenatis pharetra nisi, at consectetur tellus pellentesque non. Integer at hendrerit dui. Morbi vel ultricies nisl. Sed aliquam, metus a feugiat faucibus, ipsum libero viverra mauris, sit amet convallis mi mi ac leo. Pellentesque ultrices auctor elit, ultricies vestibulum diam iaculis mollis. Suspendisse diam orci, pretium quis tellus id, placerat vestibulum ligula. Sed eu enim vel erat bibendum porta et sed lacus. Aliquam hendrerit facilisis turpis vitae interdum. Curabitur erat massa, ullamcorper sed tellus ac, faucibus pretium diam. Praesent vitae dui non tortor lobortis tempor ut at nisi. Vestibulum dapibus nulla eu dolor viverra pellentesque. Donec ut diam a risus ultricies commodo at ac velit."
  }
]

const opened = ref(null)

function toggle(index) {
  opened.value = opened.value === index ? null : index
}
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
