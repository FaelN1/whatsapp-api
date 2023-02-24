import { Router } from 'express';

import { sendText } from './app/useCases/sendText';

export const router = Router();

// send Simple Text
router.post('/sendText', sendText);