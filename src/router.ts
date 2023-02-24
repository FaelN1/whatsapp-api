import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { sendText } from './app/useCases/sendText';
import { sendImage } from './app/useCases/sendImage';
import { sendList } from './app/useCases/sendList';
import { sendLocation } from './app/useCases/sendLocation';

export const router = Router();



// Send Images
router.post('/sendImage', sendImage);

// Send List
router.post('/sendList', sendList);

// Send Geolocation
router.post('/sendLocation', sendLocation);

// send Simple Text
router.post('/sendText', sendText);
