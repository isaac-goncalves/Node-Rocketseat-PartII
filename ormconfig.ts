import { DataSource } from "typeorm";

import { Categories } from "./src/entities/Categories";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "rentx",
    port: 5432,
    migrations: ["src/database/migrations/**/*{.ts,.js}'"],
    entities: [Categories],
    subscribers: ["src/database/subscriber/**/*{.ts,.js}"],
});
