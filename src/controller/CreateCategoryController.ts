import { Request, Response } from "express";
import { CreateCategorySerivce } from "../services/CreateCategoryService";

export class CreateCategoryController {
    async create(request: Request, response: Response) {
        const {name, description } = request.body;

        const service = new CreateCategorySerivce();

        const result = service.execute({ name, description });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}