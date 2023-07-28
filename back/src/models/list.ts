import { DataTypes } from "sequelize";
import { database } from "../database";
import { User } from "./User";

export const List = database.define(
  "List",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    product: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    
    },
  },
  { tableName: "list", createdAt: true, updatedAt: true }
);
