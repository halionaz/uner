import { DataSource } from "typeorm";
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type:'mysql',
  host:process.env.DB_HOST,
  port:Number(process.env.DB_PORT),
  username:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_DB_NAME,
  synchronize:true,
  logging:true,
  entities:['src/schemas/*.ts']
});