import type { IProfile } from '../models/Profile'

const commonSkillsByGoal: Record<string, string[]> = {
  'software engineer': ['React', 'Node.js', 'TypeScript', 'DSA', 'System Design'],
  'data scientist': ['Python', 'Machine Learning', 'SQL', 'Statistics', 'TensorFlow'],
  'product manager': ['Figma', 'Analytics', 'Communication', 'Roadmapping', 'SQL'],
  default: ['Communication', 'Problem Solving', 'Git', 'Python', 'JavaScript'],
}

export const analyzeGaps = async (profile: IProfile) => {
  const goal = profile.goals[0]?.toLowerCase() || 'default'

  const targetSkills = commonSkillsByGoal[goal] ?? commonSkillsByGoal.default ?? []

  const profileSkills = profile.skills.map((s: string) => s.toLowerCase())

  const gaps = targetSkills.map((skill) => ({
    skill,
    have: profileSkills.includes(skill.toLowerCase()),
    priority: profileSkills.includes(skill.toLowerCase()) ? 'done' : 'missing',
  }))

  const score = Math.round(
    (gaps.filter((g) => g.have).length / gaps.length) * 100
  )

  return { gaps, opportunityScore: score, goal }
}