import type { Request, Response } from 'express';
import express from 'express';
import expressJSDocSwagger from 'express-jsdoc-swagger';

import { swaggerConfig } from './config/swagger.config';
import { APP_BASE_URL, APP_PORT } from './config/env.config';

const app = express();

expressJSDocSwagger(app)(swaggerConfig);

app.use(express.json());

/**
 * GET /swagger-test
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
app.get('/swagger-test', (req: Request, res: Response) => {
  res.json({ message: 'testing...' });
});

app.listen(APP_PORT, () =>
  console.log(`Server is running on ${APP_BASE_URL}${APP_PORT}`)
);
