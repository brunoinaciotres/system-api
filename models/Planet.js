import {DataTypes} from "sequelize"
import sequelize from "../config/sequelize.js";

const Planet = sequelize.define("planets", {
    name: DataTypes.STRING,
    position: DataTypes.INTEGER
})

export default Planet;