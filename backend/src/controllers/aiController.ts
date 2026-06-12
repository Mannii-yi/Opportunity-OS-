import { Request, Response } from 'express';

export const getAIRecommendations = async (req: Request, res: Response) => {
  try {
    const { profile } = req.body;
    const recommendations = [
      {
        type: 'skill',
        title: 'Focus on Machine Learning',
        description: 'Based on your interests in AI, learning Machine Learning will unlock the most opportunities.',
      },
      {
        type: 'opportunity',
        title: 'Apply for Hackathons',
        description: 'Hackathons are a great way to build practical experience and network.',
      },
    ];
    res.json({ recommendations });
  } catch (error) {
    console.error('AI recommendations error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
