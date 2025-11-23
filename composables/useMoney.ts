export function useMoney() {
    function format(value: number, locale = 'en-US', currency = 'USD') {
        if (typeof value !== 'number') return ''
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value)
    }

    return { format }
}
