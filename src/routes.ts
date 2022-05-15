import { Router } from 'express';
import { CreateCategoryController } from './controller/CreateCategoryController';

const routes = Router();

routes.post("/categories", new CreateCategoryController().create); //passa o req e res do express de forma automática para a função create()

export { routes }
