import express from 'express';
import { getAIRecommendations } from '../controllers/aiController';

const router = express.Router();

router.post('/recommendations', getAIRecommendations);

export default router;
