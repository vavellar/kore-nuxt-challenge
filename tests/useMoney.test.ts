import { describe, it, expect } from 'vitest'
import { useMoney } from '../composables/useMoney'

describe('useMoney', () => {
    const { format } = useMoney()

    it('formats number to USD by default', () => {
        expect(format(1234.56)).toBe('$1,234.56')
        expect(format(0)).toBe('$0.00')
    })

    it('formats number to different currency and locale', () => {
        expect(format(1234.56, 'de-DE', 'EUR')).toBe('1.234,56 €')
    })

    it('returns empty string for non-number input', () => {
        expect(format('abc')).toBe('')
        expect(format(null)).toBe('')
        expect(format(undefined)).toBe('')
    })

    it('respects minimum and maximum fraction digits', () => {
        expect(format(1234)).toBe('$1,234.00')
        expect(format(1234.567)).toBe('$1,234.57')
    })
})
