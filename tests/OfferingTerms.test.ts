import { mount } from '@vue/test-utils'
import OfferingTerms from '../components/MainContent/components/OfferingTerms.vue'

vi.mock('@/composables/useOffering.js', () => ({
    useOffering: () => ({
        terms: {
            value: {
                regulation: 'RegCF',
                offeringType: 'Revenue Share',
                securityType: 'Token',
                targetOffering: 250000,
                maxOffering: 500000,
                minInvestment: 100,
                maxInvestment: 50000,
                holdPeriod: '12 months',
                closingDate: '2025-02-10'
            }
        }
    })
}))

vi.mock('@/composables/useMoney.js', () => ({
    useMoney: () => ({
        format: (v) => `$${v.toLocaleString()}`
    })
}))

vi.mock('@/composables/useDate.js', () => ({
    useDate: () => ({
        formatMonthYear: () => 'Feb 2025'
    })
}))

describe('OfferingTerms', () => {
    it('render all terms correctly', () => {
        const wrapper = mount(OfferingTerms)

        const html = wrapper.text()

        expect(html).toContain('Regulation')
        expect(html).toContain('RegCF')

        expect(html).toContain('Offering Type')
        expect(html).toContain('Revenue Share')

        expect(html).toContain('Target Offering')
        expect(html).toContain('$250,000')

        expect(html).toContain('Closing Date')
        expect(html).toContain('Feb 2025')
    })
})
