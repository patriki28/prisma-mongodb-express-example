# Prisma + MongoDB + Express

##### A simple REST API CRUD using these tech stacks:

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

| Tool       | Description                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| TypeScript | Adds static typing to JavaScript, reducing bugs and improving maintainability. |
| Prisma     | Type-safe ORM for easy database modeling and interaction.                      |
| MongoDB    | NoSQL database for flexible, scalable data storage.                            |
| Express.js | Lightweight framework for building RESTful APIs.                               |
| Zod        | Runtime schema validation for TypeScript.                                      |
| Swagger    | Generates interactive API documentation for easy testing and exploration.      |
| Node.js    | Server-side JavaScript runtime for scalable applications.                      |
| ESLint     | Linter for maintaining code quality and consistency.                           |
| Prettier   | Code formatter for consistent and clean codestyle.                             |
| Jest       | Testing framework to ensure code reliability and catch regressions.            |

### Features

✅ Prisma integrated

✅ Swagger for api documentation

✅ Linting and formatting with eslint and prettier

✅ Testing with jest and supertest

✅ Commit hooks with husky

✅ Automates building, linting, formatting, and testing using GitHub Actions.

✅ Preconfigured error handlers

✅ Ensures consistent file naming convention

### Swagger API Documentation

Access the interactive Swagger UI for exploring and testing the API endpoints.

**Endpoint:**
`GET /api-docs`

![Endpoints Overview](./img/swagger-endpoints.png)![Schema Documentation](./img/swagger-schema.png)

### Scripts

Following are the list of predefined scripts available in the app

| Script Name     | Description                                                  | Command                 |
| --------------- | ------------------------------------------------------------ | ----------------------- |
| build           | Builds the app with tsc to dist folder.                      | npm run build           |
| dev             | Runs the app in watch mode with TypeScript paths registered. | npm run dev             |
| test            | Runs tests.                                                  | npm run test            |
| lint            | Lints the files with eslint.                                 | npm run lint            |
| lint:fix        | Lints and fixes files with eslint.                           | npm run lint:fix        |
| prettier        | Check the format of files with prettier.                     | npm run prettier        |
| prettier:fix    | Format files with prettier.                                  | npm run prettier:fix    |
| format          | Format files with prettier and eslint.                       | npm run format          |
| prisma:generate | Generates prisma client types.                               | npm run prisma:generate |
| prisma:dbpush   | Pushes Prisma schema changes to the database.                | npm run prisma:dbpush   |
| commit          | Opens commitizen.                                            | npm run commit          |
