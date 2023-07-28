import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DB_DATABASE || !process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_DIALECT) {
  throw new Error('DB_DATABASE, DB_USERNAME e DB_PASSWORD precisam ser definidas');
}
export const database = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  dialect: "postgres",
  logging: false, 
});