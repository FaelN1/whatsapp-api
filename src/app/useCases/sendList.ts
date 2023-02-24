import { Request, Response } from 'express';
import { user } from '../../app';

// export let sections = [
//     {
//       title: "Section 1",
//       rows: [
//         {
//           rowId: "1",
//           title: "Element 1",
//           description: "Description 1",
//         },
//         {
//           rowId: "2",
//           title: "Element 2",
//           description: "Description 2",
//         },
//       ]
//     },
//     {
//       title: "Section 2",
//       rows: [
//         {
//           rowId: "3",
//           title: "Element 3",
//           description: "Description 3",
//         },
//         {
//           rowId: "4",
//           title: "Element 4",
//           description: "Description 4",
//         },
//       ]
//     },
//     ];

export async function sendList(req: Request, res: Response) {
  const { phoneNumber, title, description, chose, sections } = req.body;

  if (!sections) {
    console.error('No list provided!');
    return res.sendStatus(400);
  }


  try {
    await user.sendList(phoneNumber, title, description, chose, sections);
    console.log('List sent successfully!');
    res.sendStatus(201);
  } catch (error) {
    console.error(`Error sending list: ${error}`);
    res.sendStatus(500);
  }
}
