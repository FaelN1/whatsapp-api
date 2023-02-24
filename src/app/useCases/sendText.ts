import { Request, Response } from "express";
import { user } from "../../app";

export async function sendText(req: Request, res: Response) {
  const { phoneNumber, message } = req.body;

  try {
    await user
      .sendText(phoneNumber, message)
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
