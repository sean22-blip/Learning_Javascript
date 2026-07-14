import Student from "./Student.js";
import sequelize from "../dbConfig/dbConfig.js";
import { DataTypes } from "sequelize";
const Grade = sequelize.define( 'Grade',
    {
        grade_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        score: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
        letter_grade: {
            type: DataTypes.STRING(2),
            allowNull: false,
        }
    },
    {
        // sequelize,
        // modelName: `Grade`,
        underscored: true,
        timestamps: false
    }
);

export default Grade;