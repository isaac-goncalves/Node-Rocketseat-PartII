/* eslint-disable prettier/prettier */
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "rentx",
  port: 5432,
  migrations:   [`${__dirname}/**/database/migrations/*.{ts,js}`],
  entities:   [`${__dirname}/**/database/entities/*.{ts,js}`],
});
