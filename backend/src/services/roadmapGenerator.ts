import type { IProfile } from '../models/Profile'

export const generateRoadmap = async (profile: IProfile, goal: string) => {
  const steps = [
    {
      title: 'Strengthen Core Skills',
      description: `Build foundational skills required for ${goal}`,
      type: 'skill',
      deadline: '4 weeks',
      completed: false,
    },
    {
      title: 'Build a Portfolio Project',
      description: 'Create a real project that demonstrates your skills to recruiters',
      type: 'project',
      deadline: '6 weeks',
      completed: false,
    },
    {
      title: 'Update Resume & LinkedIn',
      description: 'Tailor your resume to highlight relevant skills and projects',
      type: 'achievement',
      deadline: '1 week',
      completed: false,
    },
    {
      title: 'Apply to Matched Opportunities',
      description: 'Use OpportunityOS matches to find and apply to the best-fit roles',
      type: 'apply',
      deadline: '2 weeks',
      completed: false,
    },
  ]

  return { goal, steps, generatedAt: new Date() }
}