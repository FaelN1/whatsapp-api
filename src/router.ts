import { Router } from 'express';

import { sendImage } from './app/useCases/sendImage';
import { sendList } from './app/useCases/sendList';
import { sendLocation } from './app/useCases/sendLocation';
import { sendText } from './app/useCases/sendText';

export const router = Router();

// Send Simple Text
router.post('/sendText', sendText);

// Send Simple List
router.post('/sendList', sendList);

// Send Location
router.post('/sendLocation', sendLocation);

// Send Image
router.post('/sendImage', sendImage);