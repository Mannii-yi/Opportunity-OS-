import type { IProfile } from '../models/Profile'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export const callAI = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 1000,
      }),
    })
    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error('AI Service Error:', error)
    throw new Error('AI service failed')
  }
}

export const buildProfilePrompt = (profile: IProfile, task: string): string => {
  return `
    Student Profile:
    - Skills: ${profile.skills.join(', ')}
    - Interests: ${profile.interests.join(', ')}
    - Goals: ${profile.goals.join(', ')}
    - CGPA: ${profile.cgpa}
    - Year: ${profile.year}
    - Branch: ${profile.branch}

    Task: ${task}

    Respond in JSON format only.
  `
}