import { ConnectionOptions } from "typeorm";
import * as path from 'path';

export const ormconfig: ConnectionOptions = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'docker',
  password: 'docker',
  database: 'simple_app',
  synchronize: false,
  logging: false,
  entities: [
    path.resolve(__dirname, '../../**/*{.ts,.js}'),
],
  migrations: ["src/migration/**/*.js"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};