import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import sequelize from '../config/sequelize.js';
import User from './User.js';
import Firm from './Firm.js';

const ALLOWED_WORKPAPER = [
  'compliance',
  'itr',
  'bas',
  'taxPlanning',
  'fbt',
  'gst',
  'corporationTax',
  'payroll',
] as const;

const ALLOWED_ENTITY = [
  'company',
  'individual',
  'partnership',
  'trust',
] as const;

const ALLOWED_REGIONS = [
  'australia',
  'newZealand',
  'unitedKingdom',
  'republicOfIreland',
] as const;

class Content extends Model<
  InferAttributes<Content>,
  InferCreationAttributes<Content>
> {
  declare contentId: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare created: CreationOptional<Date | null>;

  declare createdBy: ForeignKey<User['userId']>;
  declare firmId: ForeignKey<Firm['firmId']>;

  declare region: string[];
  declare name: string;
  declare description: string | null;
  declare tags: string[] | null;

  declare workpaperType: string[] | null;
  declare entityType: string[] | null;
}

Content.init(
  {
    contentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    created:   { type: DataTypes.DATE },

    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    firmId: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    region: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: {
        isRegionArray(value: unknown) {
          if (!value) return;
          const list = value as string[];
          for (const v of list) {
            if (typeof v !== 'string') {
              throw new Error(`Region must be a string: ${v}`);
            }
            if (!ALLOWED_REGIONS.includes(v as any)) {
              console.warn(`Non-standard region detected: ${v}`);
            }
          }
        },
      },
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
    tableName: 'content',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
);

// Associations
Content.belongsTo(User, { as: 'creator', foreignKey: 'createdBy' });
Content.belongsTo(Firm, { as: 'firm', foreignKey: 'firmId' });

User.hasMany(Content, { foreignKey: 'createdBy', as: 'createdContent' });
Firm.hasMany(Content, { foreignKey: 'firmId', as: 'firmContent' });

export default Content;
