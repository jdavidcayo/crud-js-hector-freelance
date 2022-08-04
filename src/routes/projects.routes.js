import { Router } from 'express';
import { setProject, getProjects, updateProject, deleteProject, getProject } from '../controllers/projects.controllers.js';
const router = Router();

//ruta, handler
router.get('/projects', getProjects);
router.post('/projects', setProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
router.get('/projects/:id', getProject);

export default router;