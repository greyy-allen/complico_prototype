import sequelize from "../config/sequelize.js";
import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";

import Firm from './Firm.js';

class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
> {
  declare userId: CreationOptional<string>;
  declare firstName: string;
  declare lastName: string;
  declare username: string;
  declare email: string;
  declare password: string;
  declare firmId: ForeignKey<Firm['firmId']>;
  declare createdAt: CreationOptional<Date>;
}

User.init(
    {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    firmId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: false
  }
)

User.belongsTo(Firm, { foreignKey: 'firmId' });
Firm.hasMany(User, { foreignKey: 'firmId' });

export default User;