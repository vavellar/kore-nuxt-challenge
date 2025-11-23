import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Offering } from '~/types/offering'
import {Summary, Terms} from "./types/offering";

export const useOfferingStore = defineStore('offering', () => {
    const data = ref<Offering | null>(null)
    const loading = ref<boolean>(false)

    async function fetchOffering(id: string) {
        loading.value = true
        try {
            data.value = await $fetch(`/api/offering/${id}`)
        } finally {
            loading.value = false
        }
    }


    const summary = computed<Summary>(() => data.value?.summary ?? null)

    const documents = computed(() => data.value?.documents ?? [])

    const terms = computed<Terms>(() => data.value?.terms ?? null)

    const team = computed(() => data.value?.team ?? [])


    return {
        data,
        loading,
        fetchOffering,
        summary,
        documents,
        terms,
        team,
    }
})
