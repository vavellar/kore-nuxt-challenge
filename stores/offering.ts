import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOfferingStore = defineStore('offering', () => {
    const data = ref(null)
    const loading = ref(false)

    async function fetchOffering(id: string) {
        loading.value = true
        try {
            data.value = await $fetch(`/api/offering/${id}`)
        } finally {
            loading.value = false
        }
    }

    return { data, loading, fetchOffering }
})
