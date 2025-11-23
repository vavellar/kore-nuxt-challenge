export interface Summary {
    raiseGoal: number
    raised: number
    minInvestment: number
    closeDate: string
    durationMonths: number
}

export interface Terms {
    regulation: string
    offeringType: string
    securityType: string
    targetOffering: number
    maxOffering: number
    minInvestment: number
    maxInvestment: number
    holdPeriod: string
    closingDate: string
}

export interface DocumentItem {
    name: string
    url: string
}

export interface TeamMember {
    name: string
    role: string
    img: string
}

export interface Offering {
    id: string
    title: string
    subtitle: string
    video: string
    summary: Summary
    terms: Terms
    documents: DocumentItem[]
    team: TeamMember[]
}
