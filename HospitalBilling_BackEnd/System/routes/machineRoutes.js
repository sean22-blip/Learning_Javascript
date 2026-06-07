import { Router } from "express";
import { getAllMachine, getMachineById,addNewMachine, updateMachineById, delMachineById } from "../controller/machineController";
const machineRoutes = Router();

machineRoutes.get('/', getAllMachine);
machineRoutes.get('/:id', getMachineById);
machineRoutes.post('/', addNewMachine);
machineRoutes.put('/:id', updateMachineById);
machineRoutes.delete('/:id', delMachineById);

export default machineRoutes;