import { Specification } from "../../../database/entities/Specifications";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
