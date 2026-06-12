import Opportunity from '../models/Opportunity'
import type { IProfile } from '../models/Profile'

export const matchOpportunities = async (profile: IProfile) => {
  const opportunities = await (Opportunity as any).find({ isActive: true } as any)

  const scored = opportunities.map((opp: any) => {
    let score = 0
    const profileSkills = profile.skills.map((s: string) => s.toLowerCase())
    const requiredSkills = opp.requiredSkills.map((s: string) => s.toLowerCase())

    // Skill match — 70% weightage
    const matched = requiredSkills.filter((s: string) => profileSkills.includes(s))
    score += (matched.length / Math.max(requiredSkills.length, 1)) * 70

    // Interest match — 30% weightage
    const interestMatch = profile.interests.some((i: string) =>
      opp.description.toLowerCase().includes(i.toLowerCase())
    )
    if (interestMatch) score += 30

    return { opportunity: opp, matchScore: Math.round(score) }
  })

  return scored
    .filter((s: any) => s.matchScore > 20)
    .sort((a: any, b: any) => b.matchScore - a.matchScore)
    .slice(0, 10)
}