import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import sequelize from '../config/sequelize.js';

/** Firm entity */
class Firm extends Model<
  InferAttributes<Firm>,
  InferCreationAttributes<Firm>
> {}

Firm.init(
  {
    firmId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    timestamps: true
  }
);

export default Firm;
