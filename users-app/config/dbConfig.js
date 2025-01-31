import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
  HOST: 'localhost',
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  PORT: process.env.DB_PORT || 5432,
};
