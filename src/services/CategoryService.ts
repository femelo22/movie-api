import { getRepository } from "typeorm";
import { Category } from "../models/Category";

type CategoryRequest = {
  id?: string;
  name: string;
  description: string;
}

export class CategoryService {

  private repo = getRepository(Category);

  async create({ name, description }: CategoryRequest): Promise<Category | Error> {

    if (await this.repo.findOne({ name })) {
      return new Error(`Category ${name} already exists`)
    }

    const category = this.repo.create({
      name,
      description
    })

    await this.repo.save(category);

    return category;
  }

  async findById(id: any): Promise<Category | Error> {

    const category = await this.repo.findOne(id);

    if (!category) return new Error("Category does not exists");

    return category;
  }

  async findAll(): Promise<Category[]> {

    const categories = await this.repo.find();

    return categories;
  }

  async update({ id, name, description }: CategoryRequest): Promise<Category | Error> {

    const category = await this.repo.findOne(id);

    if (!category) {
      return new Error("Category does not exists");
    }

    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await this.repo.save(category);

    return category;
  }

  async deleteById(id: string): Promise<void | Error> {

    if (!await this.repo.findOne(id)) {
      return new Error("Category does not exists");
    }

    await this.repo.delete(id);
  }

}