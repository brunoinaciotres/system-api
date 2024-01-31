import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Order = sequelize.define("orders", {
    name: DataTypes.STRING,
    days: DataTypes.STRING,
    frequency: DataTypes.INTEGER
})

export default Order