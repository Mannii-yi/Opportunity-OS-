import { Request, Response } from 'express';
import Opportunity from '../models/Opportunity';

const normalize = (value: string) => value.trim().toLowerCase();
const unique = (items: string[]) => [...new Set(items)];

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

export const generateRoadmap = async (req: Request, res: Response) => {
  try {
    const { profile, targetOpportunityId } = req.body;
    const opportunities = await Opportunity.find();
    const currentAnalysis = opportunities.map(opp => analyzeOpportunity(profile, opp));
    
    let roadmap = [];
    
    if (targetOpportunityId) {
      const targetOpp = opportunities.find(opp => opp._id.toString() === targetOpportunityId);
      if (targetOpp) {
        const analyzedTarget = analyzeOpportunity(profile, targetOpp);
        const missingSkills = analyzedTarget.missingSkills;
        
        roadmap = missingSkills.map((skill: string, index: number) => ({
          step: index + 1,
          title: `Learn ${skill}`,
          description: `Master the fundamentals of ${skill} to unlock more opportunities.`,
        }));
      }
    }

    res.json({ roadmap });
  } catch (error) {
    console.error('Generate roadmap error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const calculateSkillUnlocks = async (req: Request, res: Response) => {
  try {
    const profile = req.body;
    const opportunities = await Opportunity.find();
    const currentAnalysis = opportunities.map(opp => analyzeOpportunity(profile, opp));
    
    const currentEligibleIds = new Set(
      currentAnalysis
        .filter((opportunity) => opportunity.status === "Eligible")
        .map((opportunity) => opportunity._id.toString())
    );

    const missingSkills = unique(
      currentAnalysis.flatMap((opportunity) => opportunity.missingSkills)
    );

    const skillUnlocks = missingSkills
      .map((skill) => {
        const upgradedProfile = {
          ...profile,
          skills: unique([...(profile.skills || []), skill])
        };

        const upgradedAnalysis = opportunities.map(opp => analyzeOpportunity(upgradedProfile, opp));
        const unlockedOpportunities = upgradedAnalysis.filter(
          (opportunity) =>
            opportunity.status === "Eligible" && !currentEligibleIds.has(opportunity._id.toString())
        );

        return {
          skill,
          unlockedCount: unlockedOpportunities.length,
          newEligibleTotal: upgradedAnalysis.filter(
            (opportunity) => opportunity.status === "Eligible"
          ).length,
          unlockedOpportunities,
        };
      })
      .filter((unlock) => unlock.unlockedCount > 0)
      .sort((a, b) => {
        if (b.unlockedCount !== a.unlockedCount) {
          return b.unlockedCount - a.unlockedCount;
        }
        return a.skill.localeCompare(b.skill);
      });

    res.json(skillUnlocks);
  } catch (error) {
    console.error('Calculate skill unlocks error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
