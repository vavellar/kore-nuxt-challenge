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
      },
      terms: {
        regulation: 'Regulation Crowdfunding (RegCF)',
        offeringType: 'Revenue Sharing Agreement',
        securityType: 'Debt',
        targetOffering: 250000,
        maxOffering: 2000000,
        minInvestment: 100,
        maxInvestment: 50000,
        holdPeriod: '36 months',
        closingDate: '2025-02-28T00:59:00-03:00'
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
      },
      terms: {
        regulation: 'Regulation A+ Tier 2',
        offeringType: 'Equity Offering',
        securityType: 'Common Shares',
        targetOffering: 500000,
        maxOffering: 5000000,
        minInvestment: 250,
        maxInvestment: 75000,
        holdPeriod: '12 months',
        closingDate: '2025-12-30T23:59:00-03:00'
      }
    }
  }

  return offerings[id] || {
    id,
    title: `Offering ${id}`,
    subtitle: 'Default fallback offering',
    summary: {
      raiseGoal: 0,
      raised: 0,
      minInvestment: 0,
      closeDate: '2025-03-20',
      durationMonths: 0
    },
    terms: {
      regulation: 'Regulation A+ Tier 2',
      offeringType: 'Equity Offering',
      securityType: 'Common Shares',
      targetOffering: 0,
      maxOffering: 0,
      minInvestment: 0,
      maxInvestment: 0,
      holdPeriod: '12 months',
      closingDate: '2025-12-30T23:59:00-03:00'
    }
  }
})
