import express from 'express';
import { getAllcategory, getCategoryById, createCategory, updateCategoryById, delById } from '../controller/categoryController';
const categoryRoutes = express.Router();
categoryRoutes.get('/', getAllcategory);
categoryRoutes.get('/:id', getCategoryById);
categoryRoutes.get('/', createCategory);
categoryRoutes.get('/:id', updateCategoryById);
categoryRoutes.get('/:id', delById);

export default categoryRoutes;