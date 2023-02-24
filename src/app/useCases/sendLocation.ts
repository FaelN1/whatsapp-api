import { Request, Response } from "express";
import { user } from "../../app";

export async function sendLocation(req: Request, res: Response) {
  const { phoneNumber, location, locationText } = req.body;

  try {
    await user
      .sendLocation(phoneNumber, location.x, location.y, locationText)
      .then((result) => {
        console.log("Result: ", result); //return object success
      })
      .catch((erro) => {
        console.error("Error when sending: ", erro); //return object error
      });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
