export function useDate() {

    function formatMonthYear(dateStr: string) {
        const date = new Date(dateStr)
        if (isNaN(date.getTime())) return ''
        return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date)
    }

    return { formatMonthYear }
}
