import { DataTypes } from "sequelize";
import sequelize from '../config.js';

const Student = sequelize.define('Student', {
    name:{
        type: DataTypes.STRING,
    },
    age:{
        type: DataTypes.INTEGER
    },
    group:{
        type: DataTypes.INTEGER
    }
},
{
    tableName: 'students',
    freezeTableName: true,
    underscored: false
})
export default Student