import express from 'express';
import { getProfile, createOrUpdateProfile } from '../controllers/profileController';

const router = express.Router();

router.get('/', getProfile);
router.post('/', createOrUpdateProfile);

export default router;