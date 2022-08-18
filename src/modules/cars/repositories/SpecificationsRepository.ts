import { Specification } from "../../../model/Specifications";
import { ICreateCategoryDTO } from "./ICategoriesRepository";
import { ISpecificationsRepository } from "./ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const specifications = new Specification();

        Object.assign(specifications, {
            description,
            name,
            created_at: new Date(),
        });

        this.specifications.push(specifications);
        console.log(specifications);
    }
    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );
        return specification;
    }
}

export { SpecificationRepository };
