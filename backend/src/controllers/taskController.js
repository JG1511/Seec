import TaskService from "../services/taskService.js";

class TaskController {
    async getTask(req, res) {

        const tasks = await TaskService.listar_task();
        res.status(200).json(tasks)
    }

    async creatTask(req, res) {
        const { titulo, concluido } = req.body;
        const new_task = await TaskService.criar_task(titulo, concluido)
        res.status(201).json(new_task)
    }
}

export default new TaskController()