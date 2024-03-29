import { getRepository, Repository } from "typeorm";
import { Category } from "../../../database/entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

import { AppDataSource } from "../../../data-source"

class CategoriesRepository implements ICategoriesRepository {
    private repository = Repository<any>

    // private categories: Category[] = [];
    constructor() {
        this.repository = AppDataSource.getRepository(Category);
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
        console.log(this.categories);
    }
    list(): Category[] {
        return this.categories;
    }
    findByName(name: string): Category {
        const category = this.categories.find(
            (category) => category.name === name
        );
        return category;
    }
}

export { CategoriesRepository };
