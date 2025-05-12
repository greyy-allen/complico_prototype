import sequelize from "../config/sequelize.js";
import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";

class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
> {}

User.init(
    { 
        userId:   { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        username: { type: DataTypes.STRING(50),  allowNull: false },
        email:    { type: DataTypes.STRING(100), allowNull: false, unique: true,
        validate: { isEmail: true } },
        password: { type: DataTypes.STRING(255), allowNull: false },
    },
    {
        sequelize,
        tableName: "users"
    }
)

export default User;