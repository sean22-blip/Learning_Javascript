// import bodyParser from "body-parser";
import { categories } from "../models/data.js";


export const getallCategory = (req, res) => {
    res.status(200).json(categories);
}
export const getCategoryById = (req, res) => {
    const getId = Number(req.params.id);
    if(!getId){
        return res.status(404).json({error: `id must be provided!`})
    }
    const category = categories.find((category) => getId === category.id)
    res.status(200).json(category);
}
export const createNewCategory = (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({error: `name must be provided!`})
    }
    const newCategory = {
        id: (categories.length) + 1,
        name: name
    }
    categories.push(newCategory)
    res.status(201).json(newCategory)
}
export const updateCategoryById = (req, res) => {
    const id = Number(req.params.id);
    if(!id){
        return res.status(404).json({error: `id must be provided!`})
    }
    if(!Object.keys(req.body).length === 0){
        return res.status(404).json({error: `name must be provided!`})
    }
    const category = categories.find((c) => id === c.id);
    if(!category){
        return res.status(404).json({error: `cannot find category with this id!`})
    }
    Object.assign(category, req.body);
    res.status(200).json('succesfully update category' + category);
}
export const deleteCategory = (req, res) => {
    const id = Number(req.params.id);
    if(!id){
        return req.status(404).json({error: `id cannot be empty!`})
    }
    if (id === -1){
        return res.status(404).json({error: `cannot find the matching id!`})
    }
    const delByIndex = categories.findIndex((i) => id === i.id);
    categories.splice(delByIndex, 1);
    res.status(204).json();
}