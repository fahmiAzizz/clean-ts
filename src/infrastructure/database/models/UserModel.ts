import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../sequelize'; // Sesuaikan path jika berbeda

interface UserAttributes {
    userId: number;
    username: string;
    email: string;
    password: string;
    token: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'userId'> { }

class UserModel extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public userId!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public token!: string;
}

UserModel.init({
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'User',
});

export default UserModel;
