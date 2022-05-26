import { NextFunction, Request, Response } from 'express';

export function validateTitleTask(req: Request, res: Response, next: NextFunction) {
  const { titleTask } = req.body;

  if (!titleTask) {
    return res.status(400).json({ error: 'titleTask is required' });
  }

  if (typeof (titleTask) !== 'string') {
    return res.status(422).json({ error: 'titleTask must be a string' });
  }

  if (titleTask.length <= 2) {
    return res.status(422).json({ error: 'titleTask must be longer than 2 characters' });
  }

  next();
}

export function validateNameTask(req: Request, res: Response, next: NextFunction) {
  const { nameTask } = req.body;

  if (!nameTask) {
    return res.status(400).json({ error: 'nameTask is required' });
  }

  if (typeof (nameTask) !== 'string') {
    return res.status(422).json({ error: 'nameTask must be a string' });
  }

  if (nameTask.length < 3) {
    return res.status(422).json({ error: 'nameTask must be longer than 3 characters' });
  }

  next();
}

// export function validateDataTask(req: Request, res: Response, next: NextFunction) {
//   const { dataTask } = req.body;

//   if (!dataTask) {
//     return res.status(400).json({ error: 'dataTask is required' });
//   }

//   if (typeof (dataTask) !== 'string') {
//     return res.status(422).json({ error: 'dataTask must be a string' });
//   }
//   const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
//   if (regexDate.test(dataTask)) {
//     return res.status(422).json({ error: 'O campo "dataTask" deve ter o formato "dd/mm/aaaa' });
//   }

//   next();
// }

// export function validateHourTask(req: Request, res: Response, next: NextFunction) {
//   const { hourTask } = req.body;

//   if (!hourTask) {
//     return res.status(400).json({ error: 'hourTask is required' });
//   }

//   if (typeof (hourTask) !== 'string') {
//     return res.status(422).json({ error: 'hourTask must be a string' });
//   }
  
//   const regexHour = /^(?:0?\d|1[012]):[0-5]\d$/;
//   if (regexHour.test(hourTask)) {
//     return res.status(422).json({ error: 'O campo "hourTask" deve ter o formato "19:00' });
//   }

//   next();
// }




