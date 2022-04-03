import { Router } from 'express';
import { example_details } from '../controllers/example';
import { exampleMiddleware } from '../middlewares/example';

export const exampleRouter = Router();
exampleRouter.use(exampleMiddleware)
exampleRouter.get('/example/:id', example_details)