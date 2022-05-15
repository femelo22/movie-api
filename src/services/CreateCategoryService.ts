import { getRepository } from "typeorm";
import { Category } from "../models/Category";

type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategorySerivce {
    async execute({ name, description }: CategoryRequest) : Promise<Category | Error> {
        const repo = getRepository(Category);

        
        if(await repo.findOne({ name })) {
            return new Error(`Category ${name} already exists`);
        }

        const category = repo.create({ 
            name,
            description
        });

        await repo.save(category);

        return category;
    }
}