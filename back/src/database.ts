import { Sequelize } from "sequelize";

export const database = new Sequelize('postgresql://matheus:1234@localhost:5432/dbtestenex?schema=public');