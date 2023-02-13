import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class Category {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    created_at: Date;
}
