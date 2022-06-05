import { getRepository } from "typeorm";
import { Category } from "../models/Category";
import { Video } from "../models/Video";

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class VideoService {
  private repo = getRepository(Video);
  private repoCategory = getRepository(Category);

  async create({ name, description, duration, category_id }: VideoRequest): Promise<Video | Error> {
    
    if (!(await this.repoCategory.findOne(category_id))) {
      return new Error("Category does not exists");
    }
    
    const video = this.repo.create({
         name,
         description,
         duration,
         category_id,
       });

    try {
      await this.repo.save(video);
    } catch (error) {
      return new Error("A video with name already exists");
    }
      
    return video;
  }

  async findAll(): Promise<Video[]> {
    const videos = await this.repo.find({
      relations: ["category"]
    });

    return videos;
  }
}
