import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './users/routes/auth.route.js';
import userRoutes from './users/routes/routes.js';
import swaggerSetup from './swagger.js';
import initSequelize from './config/initSequelize.js';
import './config/dbConfig.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

// Setup Swagger
swaggerSetup(app);

console.log('Attempting to connect to database:', process.env.DB_NAME);
  console.log('Using user:', process.env.DB_USER);


initSequelize();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
