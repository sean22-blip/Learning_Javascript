import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConfig/dbConfig.js";
class department extends Model{
    DepNameWithDesc(){
        return `${this.department_name} - ${this.description}`;
    }
}
department.init({
    department_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    department_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'department',
    underscored: true,
    timestamps: false
})


export default department;