import { Request, Response } from "express";
import { user } from "../../app";

export async function sendList(req: Request, res: Response) {
  const { phoneNumber, title, description, sections, chose } = req.body;

  try {
    await user
      .sendList(phoneNumber, title, description, chose, sections)
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
