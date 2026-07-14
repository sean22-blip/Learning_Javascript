import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConfig/dbConfig.js";
class Payment extends Model {
    getStudentPaymentMethod() {

    }
}
Payment.init(
    {
        payment_id: {
            type: DataTypes.SMALLINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        student_id: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
        },
        method:{
            type: DataTypes.ENUM('Card', 'Cash'),
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
        payment_date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Payment',
        underscored: true,
        timestamps: false,
    }
);
export default Payment;