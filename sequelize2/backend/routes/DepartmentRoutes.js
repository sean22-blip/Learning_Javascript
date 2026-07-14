import department from "../model/Department.js";
import express from 'express'
import { CreateNewDepartment, DelDepartment, UpdateDepartment, getDepartmentById, getAllDepartment, DepNameWithDescById } from "../controller/deparmentController.js";
export const departmentRoutes = express.Router();

departmentRoutes.post(['/create', '/creates'], CreateNewDepartment);
departmentRoutes.delete('/:id', DelDepartment);
departmentRoutes.put('/:id', UpdateDepartment);
departmentRoutes.get('/:id', getDepartmentById);
departmentRoutes.get('/', getAllDepartment);
departmentRoutes.get('/all/:id', DepNameWithDescById);