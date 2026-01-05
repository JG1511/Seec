import TaskService from "../services/taskService.js";

class TaskController {
    async getTask(req, res) {

        const tasks = await TaskService.listar_task();
        res.status(200).json(tasks)
    }
}

export default new TaskController()