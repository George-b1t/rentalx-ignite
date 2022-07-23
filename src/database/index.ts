import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "database",
  username: "docker",
  password: "rentalx_pass_db",
  database: "rentalx",
  port: 5432,
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
});

dataSource.initialize();
