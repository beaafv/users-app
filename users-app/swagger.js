import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User Authentication API',
      version: '1.0.0',
      description: 'API for user authentication and management',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [__dirname + '/users/routes/*.js'],
};

console.log(options);

const specs = swaggerJsdoc(options);

export default (app) => {
  app.use('/', swaggerUi.serve, swaggerUi.setup(specs));
}
