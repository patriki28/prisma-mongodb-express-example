import cors from 'cors';
import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import router from './modules';
import { json } from 'body-parser';

import { swaggerConfig } from './config/swagger.config';
import { APP_BASE_URL, APP_PORT } from './config/env.config';

import 'express-async-errors';
import { errorHandler } from './middlwares/error-handler.middleware';
import NotFoundError from './utils/errors/not-found-error';

const app = express();

expressJSDocSwagger(app)(swaggerConfig);

app.use(express.json());
app.use(json());
app.use(cors());

app.use('/api', router);

app.use(errorHandler);
app.use('*', (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError({ message: `Path ${req.originalUrl} not found` }));
});

app.listen(APP_PORT, () =>
  console.log(`Server is running on ${APP_BASE_URL}${APP_PORT}`)
);

export default app;
