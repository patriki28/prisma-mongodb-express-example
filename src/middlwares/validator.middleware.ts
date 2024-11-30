import type { NextFunction, Request, Response } from 'express';
import type { AnyZodObject } from 'zod';

export const validator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        params: req.params,
        query: req.query,
        body: req.body
      });

      next();
    } catch (e) {
      next(e);
    }
  };
