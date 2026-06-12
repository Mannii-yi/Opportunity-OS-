import { Request, Response } from 'express';
import Profile from '../models/Profile';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOne({ userId: (req as any).userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const profileData = { ...req.body, userId };

    const profile = await Profile.findOneAndUpdate(
      { userId },
      profileData,
      { new: true, upsert: true }
    );

    res.json(profile);
  } catch (error) {
    console.error('Create/update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
