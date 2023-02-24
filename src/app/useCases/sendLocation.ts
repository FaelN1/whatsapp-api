import { Request, Response } from "express";
import { user } from "../../app";

export async function sendLocation(req: Request, res: Response) {
  const { phoneNumber, location, locationText } = req.body;

  if (!location) {
    console.error('No location provided!');
    return res.sendStatus(400);
  }

  try {
    await user.sendLocation(phoneNumber, location.x, location.y, locationText);
    console.log("Location sent successfully!");
    res.sendStatus(200);
  } catch (error) {
    console.error(`Error sending location: ${error}`);
    res.sendStatus(500);
  }
}
