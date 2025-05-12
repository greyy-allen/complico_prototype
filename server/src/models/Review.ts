import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";
import sequelize from "../config/sequelize.js";
import User from "./User.js";

class Review extends Model<
    InferAttributes<Review>,
    InferCreationAttributes<Review>
> {}

Review.init(
    {
        reviewId:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        rating:    { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
        comment:   { type: DataTypes.TEXT },
        productId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
        sequelize,
        tableName: "reviews"
    }
);

/* Associations */
User.hasMany(Review, { foreignKey: "user_id" });
Review.belongsTo(User, { foreignKey: "user_id" });

export default Review;
