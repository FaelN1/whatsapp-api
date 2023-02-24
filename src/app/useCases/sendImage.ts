import { Request, Response } from "express";
import { user } from "../../app";

export async function sendImage(req: Request, res: Response) {
  const { phoneNumber, imageName, imageURL, imageText } = req.body;

  try {
    await user
      .sendImage(phoneNumber, imageURL, imageName, imageText)
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
