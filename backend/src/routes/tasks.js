import { Router } from "express";
import { deletTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from "../controllers/tasks";

const router = Router();

router.get('/tasks', getTasks)
router.get('/tasks/count', getTaskCount)
router.get('/tasks/:id', getTask)
router.post('/tasks', saveTask)
router.delete('/tasks/:id', deletTask)
router.put('/tasks/:id', updateTask)

export default router;

