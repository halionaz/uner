import { DataSource } from 'typeorm';

import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [path.join(__dirname, 'entities/**/*.entity.ts')],
  synchronize: false,
  logging: true,
});
