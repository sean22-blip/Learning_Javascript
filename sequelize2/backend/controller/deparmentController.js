import sequeulize from '../dbConfig/dbConfig.js'
import department from '../model/Department.js';

export const CreateNewDepartment = async (req, res,) => {

}
export const DelDepartment = async (req, res,) => {
    const department_id = req.params.id;
    if (!department_id) {
        return res.status(404).json({ Error: `department id must be provided` })
    }
    try {

        const findDelDepartment = await department.destroy({
            where: {
                department_id: department_id
            }
        });
        if (!findDelDepartment) {
            return res.status(404).json({ Error: `cannot find the matching departmentId!` })
        }
        res.status(200).json({ message: `Successfully deleted department ${department_id}` });
    } catch (error) {
        console.log({ error: `There is an error in deleting department!` })
        return res.status(500).json({ error: `There is an error in deleting department!` })
    }
}
export const DepNameWithDescById = async (req, res) => {
    try {
        const department_id = req.params.id;
         if (!department_id) {
            return res.status(404).json(`department id must be provided!`)
        }
        const allDep = await department.findByPk(department_id);
          if (!allDep) {
            return res.status(404).json(`cannot find department with this id!`)
        }
        res.status(201).json(allDep.DepNameWithDesc())
    } catch (error) {
         console.log(error)
        return res.status(500).json({ error: error })
    }
}
export const UpdateDepartment = async (req, res,) => {

}
export const getDepartmentById = async (req, res) => {
    try {
        const department_id = req.params.id;
        if (!department_id) {
            return res.status(404).json(`department id must be provided!`)
        }
        const findDepartment = await department.findByPk(department_id)
        if (!findDepartment) {
            return res.status(404).json(`cannot find department with this id!`)
        }
        res.status(201).json(findDepartment)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.status })

    }
}
export const getAllDepartment = async (req, res) => {
    try {
        const allDep = await department.findAll();
        res.json(allDep);
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}
