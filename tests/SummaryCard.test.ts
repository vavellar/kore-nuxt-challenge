import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import OfferingSummary from '../components/Thumb/components/SummaryCard.vue'

vi.mock('@/composables/useOffering', () => ({
    useOffering: () => ({
        summary: {
            raiseGoal: 250000,
            raised: 300000,
            minInvestment: 100,
            closeDate: '2025-02-10',
            durationMonths: 36
        }
    })
}))

vi.mock('@/composables/useMoney', () => ({
    useMoney: () => ({
        format: (n: number) => `$${n.toLocaleString()}`
    })
}))

vi.mock('@/composables/useDate', () => ({
    useDate: () => ({
        formatMonthYear: () => 'Feb 2025'
    })
}))

describe('OfferingSummary.vue', () => {

    it('renders formatted funding goal', () => {
        const wrapper = mount(OfferingSummary)

        expect(wrapper.text()).toContain('$250,000')
    })

    it('renders formatted raised amount', () => {
        const wrapper = mount(OfferingSummary)

        expect(wrapper.text()).toContain('$300,000')
    })

    it('renders minimum investment', () => {
        const wrapper = mount(OfferingSummary)

        expect(wrapper.text()).toContain('$100')
        expect(wrapper.text()).toContain('Minimum Investment')
    })

    it('renders formatted deadline date', () => {
        const wrapper = mount(OfferingSummary)

        expect(wrapper.text()).toContain('Feb 2025')
    })

    it('renders duration months', () => {
        const wrapper = mount(OfferingSummary)

        expect(wrapper.text()).toContain('36')
    })

    it('renders the button "Invest Now"', () => {
        const wrapper = mount(OfferingSummary)

        const btn = wrapper.find('button')
        expect(btn.exists()).toBe(true)
        expect(btn.text()).toBe('Invest Now')
    })

    it('renders the offering circular link', () => {
        const wrapper = mount(OfferingSummary)

        const link = wrapper.find('a')
        expect(link.exists()).toBe(true)
        expect(link.text()).toContain('View Offering Circular')
    })

})
