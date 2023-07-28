import { DataTypes, Model } from "sequelize";
import { database } from "../database";

class List extends Model {
  public id!: string;
  public product!: string;
  public amount!: number;
  public userId!: string;
  static associate: (models: any) => void;
}

List.init(
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
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "List",
    tableName: "list",
    createdAt: true,
    updatedAt: true,
  }
);

List.associate = (models) => {
  List.belongsTo(models.User, {
    foreignKey: "userId",
    as: "user",
  });
};

export { List };
