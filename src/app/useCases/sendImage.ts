import { Request, Response } from 'express';
import { user } from '../../app';

export async function sendImage(req: Request, res: Response) {
  const { phoneNumber, imageUrl, imageName, imageText } = req.body;

  if (!imageUrl) {
    console.error('No ImageUrl provided!');
    return res.sendStatus(400);
  }

  try {
    await user.sendImage(phoneNumber, imageUrl, imageName, imageText);
    console.log('Image sent successfully!');
    res.sendStatus(200);
  } catch (error) {
    console.error(`Error sending image: ${error}`);
    res.sendStatus(500);
  }
}
