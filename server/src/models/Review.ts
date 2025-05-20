import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  ForeignKey,
  CreationOptional,
} from "sequelize";
import sequelize from "../config/sequelize.js";
import User from "./User.js";
import Workpaper from "./Workpaper.js";

class Review extends Model<
  InferAttributes<Review>,
  InferCreationAttributes<Review>
> {
  declare reviewId: CreationOptional<number>;
  declare rating: number;
  declare comment: string | null;

  declare userId: ForeignKey<User['userId']>;
  declare workpaperId: ForeignKey<Workpaper['workpaperId']>;
  declare createdAt: CreationOptional<Date>;
}

Review.init(
  {
    reviewId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 },
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    workpaperId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "reviews",
    timestamps: false,
  }
);

/* Associations */
User.hasMany(Review, { foreignKey: "userId", as: "reviews" });
Review.belongsTo(User, { foreignKey: "userId" });

Workpaper.hasMany(Review, { foreignKey: "workpaperId", as: "reviews" });
Review.belongsTo(Workpaper, { foreignKey: "workpaperId" });

export default Review;
