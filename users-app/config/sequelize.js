import { Sequelize } from 'sequelize';
import { dbConfig } from '../config/dbConfig.js';


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'postgres',
  port: dbConfig.PORT,
});

export default sequelize;
