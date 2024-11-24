import 'dotenv/config';

const { PORT, BASE_URL } = process.env;

const APP_PORT = PORT || 3000;
const APP_BASE_URL = BASE_URL || 'http://localhost:';

export { APP_PORT, APP_BASE_URL };
