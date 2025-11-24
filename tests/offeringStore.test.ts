import { setActivePinia, createPinia } from 'pinia'
import { useOfferingStore } from '../stores/offering'

describe('useOfferingStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('initial state is correct', () => {
        const store = useOfferingStore()

        expect(store.data).toBeNull()
        expect(store.loading).toBe(false)
        expect(store.error).toBe('')
    })

    it('returns an error for an invalid ID', async () => {
        const store = useOfferingStore()

        await store.fetchOffering('999')

        expect(store.loading).toBe(false)
        expect(store.data).toBeNull()
        expect(store.error).toBe('Invalid offering ID. Only "1" and "2" are supported.')
    })

    it('loads data successfully with a valid ID', async () => {
        const store = useOfferingStore()

        globalThis.$fetch = vi.fn().mockResolvedValue({
            summary: { raiseGoal: 100 },
            terms: { regulation: 'RegCF' }
        })

        await store.fetchOffering('1')

        expect(store.error).toBe('')
        expect(store.loading).toBe(false)
        expect(store.data).not.toBeNull()
        expect(store.data?.summary.raiseGoal).toBe(100)
        expect(store.terms.regulation).toBe('RegCF')
    })
})
