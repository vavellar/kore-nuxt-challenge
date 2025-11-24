export function useDate() {
    function formatMonthYear(dateStr: string) {
        const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr)
        if (!match) return ''
        const year = Number(match[1])
        const month = Number(match[2])
        const day = Number(match[3])

        const date = new Date(Date.UTC(year, month - 1, day))

        return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date)
    }

    return { formatMonthYear }
}
