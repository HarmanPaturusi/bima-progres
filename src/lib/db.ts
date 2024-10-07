import mysql, { PoolOptions } from "mysql2/promise";

const dbPool: PoolOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const db = mysql.createPool(dbPool);
