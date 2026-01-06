import { Router } from "express";
import TaskController from "../controllers/taskController.js";

const router = Router();

router.get('/listar_task',TaskController.getTask)
router.post('/criar_task', TaskController.creatTask)
router.put('/editar_task/:id', TaskController.updateTask)
router.delete('/deletar_task/:id', TaskController.deleteTask)


export default router