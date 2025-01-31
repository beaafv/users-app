import sequelize from './sequelize.js';

const initSequelize = async () => {
  try {
    console.log('Attempting to connect to database:', process.env.DB_NAME);
  console.log('Using user:', process.env.DB_USER);
    await sequelize.sync();
    console.log('Database synced');
  } catch (err) {
    console.error('Unable to sync database:', err);
  }
};

export default initSequelize;
