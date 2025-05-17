import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import sequelize from '../config/sequelize.js';

import Firm from './Firm';
import User from './User';
import Workpaper from './Workpaper';

class Subscription extends Model<
  InferAttributes<Subscription>,
  InferCreationAttributes<Subscription>
> {
  declare firmId: ForeignKey<Firm['firmId']>;
  declare workpaperId: ForeignKey<Workpaper['workpaperId']>;
  declare subscriberId: ForeignKey<User['userId']>;
  declare status: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
}

Subscription.init(
  {
    firmId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    workpaperId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    subscriberId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'active',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'subscriptions',
    timestamps: false,
  }
);

Subscription.belongsTo(Firm, {
  foreignKey: 'firmId',
});

Subscription.belongsTo(Workpaper, {
  foreignKey: 'workpaperId',
});

Subscription.belongsTo(User, {
  foreignKey: 'subscriberId',
  as: 'subscriber',
});

Firm.hasMany(Subscription, { foreignKey: 'firmId' });
Workpaper.hasMany(Subscription, { foreignKey: 'workpaperId' });
User.hasMany(Subscription, { foreignKey: 'subscriberId', as: 'subscriptions' });

export default Subscription;
