import bcrypt from "bcrypt";
import { DataTypes, Model } from "sequelize";
import { database } from "../database";
import { List } from "./list";

class User extends Model {
  public id!: string;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
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
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      async set(value: string) {
        this.setDataValue("password", bcrypt.hashSync(value, 10));
      },
    },
  },
  {
    sequelize: database,
    modelName: "User",
    tableName: "user",
    createdAt: false,
    updatedAt: false,
  }
);
User.hasMany(List, {
  foreignKey: "userId",
  as: "list",
});
export { User };
