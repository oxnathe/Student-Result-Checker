import { sequelize } from "../config/db.js"
import { DataTypes } from "sequelize";



const User = sequelize.define('User', {

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }, password: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    role: {
        type: DataTypes.ENUM('user', 'therapist', 'admin'),
        defaultValue: 'user'
    },
    isAnonymous: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }


}, {
    timestamps: true
}
);

export default User;