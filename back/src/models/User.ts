import { DataTypes } from "sequelize";
import { database } from "../database";
import { List } from "./list";
import bcrypt from "bcrypt"

export const User = database.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      async set(value: string) {
          this.setDataValue('password', bcrypt.hashSync(value, 10));
      }
  } ,
    lists: {
      type: DataTypes.ARRAY(DataTypes.JSONB), 
      defaultValue: [], 
    }
    
    
  }
,
  { tableName: "user", createdAt: false, updatedAt: false }
);

User.hasMany(List, {
  foreignKey: 'userId',
  as: 'userLists', 
});

List.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});