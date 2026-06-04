import express from 'express';
// import '../controllers/ariticalController';
import { getAllArticles, getAriticleById, createArticle, updateByID, delById } from '../controllers/ariticalController.js';
const articleRouter = express.Router();

articleRouter.get('/', getAllArticles);
articleRouter.get('/:id', getAriticleById);
articleRouter.post('/', createArticle);
articleRouter.put('/:id', updateByID);
articleRouter.delete('/:id', delById);

export default articleRouter;