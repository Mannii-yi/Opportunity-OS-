import { Request, Response } from 'express';
import Opportunity from '../models/Opportunity';

const normalize = (value: string) => value.trim().toLowerCase();

const hasSkill = (profileSkills: string[], requiredSkill: string) =>
  profileSkills.some((skill) => normalize(skill) === normalize(requiredSkill));

const analyzeOpportunity = (profile: any, opportunity: any) => {
  const profileSkills = profile.skills || [];
  const missingSkills = opportunity.requiredSkills.filter(
    (skill: string) => !hasSkill(profileSkills, skill)
  );

  const cgpaGap = Math.max(0, opportunity.minimumCgpa - Number(profile.cgpa || 0));
  const missingYearRequirement = !opportunity.eligibleYears.includes(
    Number(profile.year)
  );

  let status = "Not Eligible";

  if (missingSkills.length === 0 && cgpaGap === 0 && !missingYearRequirement) {
    status = "Eligible";
  } else if (
    !missingYearRequirement &&
    cgpaGap <= 0.5 &&
    missingSkills.length <= 2
  ) {
    status = "Near Eligible";
  }

  return {
    ...opportunity.toObject(),
    status,
    missingSkills,
    missingCgpa: Number(cgpaGap.toFixed(1)),
    missingYearRequirement,
  };
};

export const getAllOpportunities = async (req: Request, res: Response) => {
  try {
    const opportunities = await Opportunity.find();
    res.json(opportunities);
  } catch (error) {
    console.error('Get opportunities error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getOpportunityById = async (req: Request, res: Response) => {
  try {
    const opportunity = await Opportunity.findById(req.params.id);
    if (!opportunity) {
      return res.status(404).json({ message: 'Opportunity not found' });
    }
    res.json(opportunity);
  } catch (error) {
    console.error('Get opportunity error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const analyzeOpportunities = async (req: Request, res: Response) => {
  try {
    const profile = req.body;
    const opportunities = await Opportunity.find();
    const analyzed = opportunities.map(opp => analyzeOpportunity(profile, opp));
    
    const statusCounts = analyzed.reduce(
      (counts, opportunity) => ({
        ...counts,
        [opportunity.status]: (counts[opportunity.status as keyof typeof counts] || 0) + 1
      }),
      {
        Eligible: 0,
        "Near Eligible": 0,
        "Not Eligible": 0
      }
    );

    res.json({
      opportunities: analyzed,
      counts: statusCounts,
    });
  } catch (error) {
    console.error('Analyze opportunities error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createOpportunity = async (req: Request, res: Response) => {
  try {
    const opportunity = new Opportunity(req.body);
    await opportunity.save();
    res.status(201).json(opportunity);
  } catch (error) {
    console.error('Create opportunity error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
