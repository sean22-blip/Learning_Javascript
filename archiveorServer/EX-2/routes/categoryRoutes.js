import express from 'express';
import { getallCategory, getCategoryById, createNewCategory, updateCategoryById, deleteCategory } from '../controllers/categoryController.js';

const categoriesRoutes = express.Router();

categoriesRoutes.get('/', getallCategory);
categoriesRoutes.get('/:id', getCategoryById);
categoriesRoutes.post('/', createNewCategory);
categoriesRoutes.put('/:id', updateCategoryById);
categoriesRoutes.delete('/:id', deleteCategory);

export default categoriesRoutes;