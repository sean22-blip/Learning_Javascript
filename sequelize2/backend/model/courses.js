import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbConfig.js";

const Course = sequelize.define('Course', {
    title:{
        type: DataTypes.TEXT,
    },
    credit:{
        type: DataTypes.INTEGER
    }
},
{
    timestamps:false,
    underscored: true
})
export default Course;