import { Router } from "express";
import express from 'express'
import {CreateNewStudent,DelStudent, UpdateStudent,  getStudentById, getAllStudent } from "../controller/studentController.js";

export const StudentRoutes = express.Router();

StudentRoutes.post(['/create', '/creates'], CreateNewStudent);
StudentRoutes.delete('/:id', DelStudent);
StudentRoutes.put('/:id', UpdateStudent);
StudentRoutes.get('/:id', getStudentById);
StudentRoutes.get('/', getAllStudent);