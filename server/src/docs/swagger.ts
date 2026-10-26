import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

// OpenAPI document served at /api/docs. Add your paths and schemas here as you build endpoints.
const openApiDocument = {
  openapi: '3.0.3',
  info: {
    title: 'Event Ticketing API',
    version: '0.1.0',
  },
  servers: [{ url: '/api' }],
  paths: {
    '/health': {
      get: {
        summary: 'Health check',
        responses: { '200': { description: 'API is running' } },
      },
    },
  },
};

const docsRouter = Router();
docsRouter.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocument));

export default docsRouter;
