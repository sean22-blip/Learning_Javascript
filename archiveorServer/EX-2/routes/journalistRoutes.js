import express from 'express';
import { getAlljournalist, getJournalistById, createNewJournalist, updateJournalistById, delJournalistById } from "../controllers/journalistController.js";
const journalistRoutes= express.Router();

journalistRoutes.get('/', getAlljournalist);
journalistRoutes.get('/:id', getJournalistById);
journalistRoutes.post('/', createNewJournalist);
journalistRoutes.put('/:id', updateJournalistById);
journalistRoutes.delete('/:id', delJournalistById);

export default journalistRoutes;
