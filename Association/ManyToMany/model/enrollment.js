import { DataTypes } from 'sequelize'
import sequelize from '../config.js'

const enrollment = sequelize.define(('Enrollment'), {
    grade: {
    type: DataTypes.STRING,
    enrollAt: DataTypes.DATE
    }
})
export default enrollment;