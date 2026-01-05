import TaskRepository from "../repository/taskRepository.js";


class TaskService {
     async listar_task() {
        const linhas =  TaskRepository.findAll();
        return linhas;
    }
}

export default new TaskService()