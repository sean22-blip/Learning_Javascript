import Grade from "../model/Grade.js"
import sequelize from "../dbConfig/dbConfig.js";
export const StudentGrades = async (req, res) => {
    try {
        const passed = await Grade.findAll();
        return res.status(201).json(passed.get)

    } catch (error) {
        console.log({error: error})
    }
}