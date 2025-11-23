import { storeToRefs } from 'pinia'
import { useOfferingStore } from '../stores/offering'
export function useOffering() {
    const store = useOfferingStore()

    const {
        data,
        loading,
        summary,
        documents,
        terms,
        team,
   } = storeToRefs(store)

    const fetch = (id: string) => store.fetchOffering(id)

    return {
        data,
        loading,
        summary,
        documents,
        terms,
        team,
        fetch
    }
}
