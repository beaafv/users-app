import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const userId = '12345'; // Replace with the actual user ID
const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: 86400 }); // 24 hours

console.log('Generated Token:', token);
