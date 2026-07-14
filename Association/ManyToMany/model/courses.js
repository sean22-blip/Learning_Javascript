import { DataTypes } from "sequelize";
import sequelize from "../config.js";

const Courses = sequelize.define('Courses', {
    title:{
        type: DataTypes.STRING
    },
    credits:{
        type:DataTypes.INTEGER
    }
}, {
    tableName: 'Courses',
    freezeTableName: true,
    underscored: false
})
export default Courses