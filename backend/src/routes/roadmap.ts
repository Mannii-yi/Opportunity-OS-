import express from 'express';
import { generateRoadmap, calculateSkillUnlocks } from '../controllers/roadmapController';

const router = express.Router();

router.post('/generate', generateRoadmap);
router.post('/skill-unlocks', calculateSkillUnlocks);

export default router;
