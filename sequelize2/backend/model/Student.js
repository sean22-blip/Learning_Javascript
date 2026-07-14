import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConfig/dbConfig.js";
import department from "./Department.js";
class Student extends Model {
    getFullName(){
        return `${this.first_name} - ${this.last_name}`;
    }
}

Student.init({
    student_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    last_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    department_id: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
}, {
    sequelize,
    modelName: 'Student',
    tableName: 'students',
    underscored: true,
    timestamps: false
}

);

export default Student;