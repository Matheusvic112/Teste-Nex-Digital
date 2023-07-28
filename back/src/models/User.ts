import { DataTypes } from "sequelize";
import { database } from "../database";
import { List } from "./list";

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
      allowNull: true,

    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull: true,
    },
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