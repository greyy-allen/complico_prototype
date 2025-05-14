import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import sequelize from '../config/sequelize.js';

class Firm extends Model<
  InferAttributes<Firm>,
  InferCreationAttributes<Firm>
> {}

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
