import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let connectionPromise: Promise<mysql2.Connection> | null = null;

const mysqlConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
};

export const connect = async () => {
  if (connectionPromise) return connectionPromise;

  connectionPromise = mysql2.createConnection(mysqlConfig);
  return connectionPromise;
};

export const getConnect = () => {
  if (!connectionPromise) throw new Error('DB 연결이 활성화되지 않았습니다 !');
  return connectionPromise;
};
