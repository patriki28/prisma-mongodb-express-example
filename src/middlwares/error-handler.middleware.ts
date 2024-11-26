/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextFunction, Request, Response } from 'express';
import { CustomError } from '@/utils/errors/custom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    const { statusCode, errors, logging } = err;
    if (logging) {
      console.error(
        JSON.stringify(
          {
            code: err.statusCode,
            errors: err.errors,
            stack: err.stack
          },
          null,
          2
        )
      );
    }

    res.status(statusCode).send({ errors });
  }
  console.error(JSON.stringify(err, null, 2));
  res.status(500).send({ errors: [{ message: 'Something went wrong' }] });
};
