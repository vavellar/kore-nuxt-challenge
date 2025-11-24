import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Offering } from './types/offering'
import { Summary, Terms } from './types/offering'

export const useOfferingStore = defineStore('offering', () => {
    const data = ref<Offering | null>(null)
    const loading = ref<boolean>(false)
    const error = ref<string>('')

    async function fetchOffering(id: string) {
        loading.value = true
        error.value = ''



        try {
            if (id !== '1' && id !== '2') {
                throw new Error('Invalid offering ID. Only "1" and "2" are supported.')
            }

            data.value = await $fetch(`/api/offering/${id}`)
        } catch (err: any) {
            console.error('error', err)
            error.value = err?.message || 'An error occurred while fetching the offering.'
        } finally {
            loading.value = false
        }
    }

    const summary = computed<Summary>(() => data.value?.summary ?? null)
    const terms = computed<Terms>(() => data.value?.terms ?? null)

    return {
        data,
        loading,
        error,
        fetchOffering,
        summary,
        terms,
    }
})
