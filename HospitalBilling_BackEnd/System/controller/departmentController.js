import {hospitalBilling} from '../models/data.js'

import { departments } from "../models/data";
import express from 'express'
const app = express();
export const getAllDepartments = (req, res) =>{
    res.status(204).json();
}
export const getDepartmentById = (req, res) => {
    const id = Number(req.params.id);
    if(!id){
        return res.status(404).json({error: `id cannot be empty!`})
    }
    const getId = departments.find((d) => id === d.id);
    res.status(204).json(getId);
}
export const createDepartment = (req, res) => {
    const {name, head,floor, totalStaff} = req.body;
    if(!name || !head || !floor || !totalStaff){
        return res.status(404).json({error: `all field must be provided!`})
    }
    const newDepartment = {
        'id' : (departments.length) + 1,
        name: name,
        floor: floor,
        totalStaff: totalStaff
    }
    departments.push(newDepartment);
    res.status(204).json(`succesfully added to department!`)
}
export const updateDepartmentById = (req, res) => {
    const id = Number(req.params.id);
    if(!id){
        return res.status(404).json({error: `id is not provided!`})
    }
    if(Object.keys(req.body).length === 0){
        return res.status(404).json({error: `atleast one field must be provided!`})
    }
    const updateDepartment = categories.find((c) => id === c.id);
    Object.assign(updateDepartment, req.body);
    res.status(204).json(`successfully updated Department!`)
}
export const delDepartmentById = (req, res) => {
    const id = Number(req.params.id);
    if(!id){
        return res.status(404).json({error: `id must be provided!`})
    }
    const delDepartment = departments.findIndex((d) => id === d.id);
    if(delDepartment === -1){
        return res.stat(404).json({error: `cannot find department with this id!`})
    }
    departments.splice(delDepartment, 1);
    res.status(204).json(`succesfully deleted department`);
} 