/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextFunction, Request, Response } from 'express';
import { CustomError } from '@/utils/errors/custom-error';
import { ZodError } from 'zod';
import logger from '@/lib/logger';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof CustomError) {
    const { statusCode, errors, logging } = err;

    if (logging) {
      logger.error(
        JSON.stringify(
          {
            code: statusCode,
            errors
          },
          null,
          2
        )
      );
    }

    res.status(statusCode).json({ errors });
    return;
  }

  if (err instanceof ZodError) {
    logger.error(
      JSON.stringify(
        {
          code: 400,
          errors: err.errors
        },
        null,
        2
      )
    );
    res.status(400).json({
      errors: err.errors
    });
    return;
  }

  logger.error(JSON.stringify(err, null, 2));
  res.status(500).json({
    errors: [{ message: 'Something went wrong. Please try again later.' }]
  });
};
