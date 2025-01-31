import dotenv from 'dotenv';
dotenv.config();

export default {
  JWT_AUTH_TOKEN: process.env.JWT_SECRET,
}
