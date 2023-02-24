import { Request, Response } from 'express';
import { user } from '../../app';

export async function sendText(req: Request, res: Response) {
  const { phoneNumber, message } = req.body;

  if (!message) {
    console.error('No message provided!');
    return res.sendStatus(400);
  }

  try {
    await user.sendText(phoneNumber, message);
    console.log('Text message sent successfully!');
    res.sendStatus(200);
  } catch (error) {
    console.error(`Error sending text message: ${error}`);
    res.sendStatus(500);
  }
}
