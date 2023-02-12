import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Categories {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    created_at: Date;
}
