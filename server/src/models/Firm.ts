import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from 'sequelize';
import sequelize from '../config/sequelize.js';

class Firm extends Model<
  InferAttributes<Firm>,
  InferCreationAttributes<Firm>
> {
  declare firmId: CreationOptional<string>;
  declare shortId: string;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
}

Firm.init(
  {
    firmId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    shortId: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    tableName: 'firms',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: false
  }
);

export default Firm;
