import { Sequelize } from "sequelize";

const sequelize = new Sequelize("company", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

export default sequelize;