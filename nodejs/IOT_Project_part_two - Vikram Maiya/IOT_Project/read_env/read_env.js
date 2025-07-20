//npm install dotenv
require('dotenv').config();
const databaseUrl = process.env.DATABASE_URL;
const port = process.env.PORT;
const apiKey = process.env.API_KEY;
const nodeEnv = process.env.NODE_ENV;
