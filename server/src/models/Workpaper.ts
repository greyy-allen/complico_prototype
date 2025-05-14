import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import sequelize from '../config/sequelize.js';
import User from './User.js';

const ALLOWED_WORKPAPER = [
  'compliance',
  'itr',
  'bas',
  'taxPlanning',
  'fbt',
] as const;

const ALLOWED_ENTITY = [
  'company',
  'individual',
  'partnership',
  'trust',
] as const;

class Workpaper extends Model<
  InferAttributes<Workpaper>,
  InferCreationAttributes<Workpaper>
> {}

Workpaper.init(
  {
    workpaperId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    createdAt:  { type: DataTypes.DATE },
    updatedAt:  { type: DataTypes.DATE },
    publishedAt:{ type: DataTypes.DATE },

    createdBy:  { type: DataTypes.INTEGER, allowNull: false },
    publishedBy:{ type: DataTypes.INTEGER },

    region: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },

    workpaperType: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      validate: {
        isWorkpaperTypeArray(value: unknown) {
          if (!value) return;
          const list = value as string[];
          for (const v of list) {
            if (!ALLOWED_WORKPAPER.includes(v as any)) {
              throw new Error(`Invalid workpaperType value: ${v}`);
            }
          }
        },
      },
    },

    entityType: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      validate: {
        isEntityTypeArray(value: unknown) {
          if (!value) return;
          const list = value as string[];
          for (const v of list) {
            if (!ALLOWED_ENTITY.includes(v as any)) {
              throw new Error(`Invalid entityType value: ${v}`);
            }
          }
        },
      },
    },
  },
  {
    sequelize,
    tableName: 'workpapers',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
);

Workpaper.belongsTo(User, { as: 'creator',   foreignKey: 'createdBy'   });
Workpaper.belongsTo(User, { as: 'publisher', foreignKey: 'publishedBy' });
User.hasMany(Workpaper,   { foreignKey: 'createdBy',   as: 'createdWorkpapers'  });
User.hasMany(Workpaper,   { foreignKey: 'publishedBy', as: 'publishedWorkpapers' });

export default Workpaper;