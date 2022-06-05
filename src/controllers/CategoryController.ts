import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";

export class CategoryController {

  async create(request: Request, response: Response) {
    const { name, description } = request.body
    
    const service = new CategoryService();

    const result = await service.create({ name, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    console.log(id)

    const service = new CategoryService();

    const result = await service.findById(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  async findAll(request: Request, response: Response) {
    const service = new CategoryService();

    const result = await service.findAll();

    return response.json(result);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params
    const { name, description } = request.body

    const service = new CategoryService();

    const result = await service.update({ id, name, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return result;
  }

  async deleteById(request: Request, response: Response) {
    const { id } = request.params;
    
    const service = new CategoryService();

    const result = await service.deleteById(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }


}