import { Request, Response } from "express";
import { Video } from "../models/Video";
import { VideoService } from "../services/VideoService";

export class VideoController {


  async create(request: Request, response: Response) {
    const { name, description, duration, category_id } = request.body;

    const service = new VideoService();

    const result = await service.create({
      name, description, duration, category_id
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }



  async findAll(request: Request, response: Response) {
    const service = new VideoService();

    const result = await service.findAll();

    return response.json(result);
  }
}