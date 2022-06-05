import { Router } from "express";
import { CategoryController } from "./controllers/CategoryController";
import { VideoController } from "./controllers/VideoController";

const routes = Router();

routes.post("/categories", new CategoryController().create);
routes.get("/categories", new CategoryController().findAll);
routes.get("/categories/:id", new CategoryController().findById);
routes.delete("/categories/:id", new CategoryController().deleteById);
routes.put("/categories/:id", new CategoryController().update);


routes.post("/videos", new VideoController().create);
routes.get("/videos", new VideoController().findAll);


export { routes }