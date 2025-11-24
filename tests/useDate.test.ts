import { describe, it, expect } from 'vitest'
import { useDate } from '../composables/useDate'

describe('useDate', () => {
    const { formatMonthYear } = useDate()

    it('formats a valid date string to "MMM YYYY"', () => {
        expect(formatMonthYear('2000-01-01')).toBe('Jan 2000')
        expect(formatMonthYear('2025-02-10')).toBe('Feb 2025')
    })

    it('returns empty string for invalid date strings', () => {
        expect(formatMonthYear('')).toBe('')
        expect(formatMonthYear('invalid')).toBe('')
    })
})
