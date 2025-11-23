export default defineEventHandler((event) => {
  const id = event.context.params?.id || '1'

  const offerings: Record<string, any> = {
    '1': {
      id: '1',
      title: 'Kore — Offering 1',
      subtitle: 'Revenue share opportunity',
      summary: {
        raiseGoal: 100000,
        raised: 90000,
        minInvestment: 100,
        closeDate: '2025-02-10',
        durationMonths: 36
      }
    },
    '2': {
      id: '2',
      title: 'Kore — Offering 2',
      subtitle: 'Premium growth opportunity',
      summary: {
        raiseGoal: 300000,
        raised: 150000,
        minInvestment: 250,
        closeDate: '2025-03-20',
        durationMonths: 48
      }
    }
  }

  return offerings[id] || {
    id,
    title: `Offering ${id}`,
    subtitle: 'Default fallback offering'
  }
})
