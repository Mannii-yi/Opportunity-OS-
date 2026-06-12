import express from 'express';
import { getAllOpportunities, getOpportunityById, analyzeOpportunities, createOpportunity } from '../controllers/opportunityController';

const router = express.Router();

router.get('/', getAllOpportunities);
router.get('/:id', getOpportunityById);
router.post('/analyze', analyzeOpportunities);
router.post('/', createOpportunity);

export default router;