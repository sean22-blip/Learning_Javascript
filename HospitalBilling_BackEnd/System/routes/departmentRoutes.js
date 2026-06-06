import { Router } from "express";
import { getAllDepartments, getDepartmentById, createDepartment, updateDepartmentById, delDepartmentById } from "../controller/departmentController";

const departmentRoutes = Router();
departmentRoutes.get('/', getAllDepartments)
departmentRoutes.get('/:id', getDepartmentById)
departmentRoutes.post('/', createDepartment)
departmentRoutes.put('/:id', updateDepartmentById)
departmentRoutes.delete('/:id', delDepartmentById)

export default departmentRoutes;