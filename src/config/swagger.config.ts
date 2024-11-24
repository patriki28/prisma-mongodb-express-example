import path from 'path';

export const swaggerConfig = {
  info: {
    version: '1.0.0',
    title: 'REST API with Prisma, MongoDB, Express, and Swagger',
    description: 'A Simple CRUD REST API.'
  },
  baseDir: path.join(__dirname, '../'),
  filesPattern: './**/*.ts',
  swaggerUIPath: '/api-docs'
};
