import TaskRepository from "../repository/taskRepository.js";


class TaskService {
     async listar_task() {
        const linhas =  TaskRepository.findAll();
        return linhas;
    }

    async criar_task(titulo,concluido){
        const linha = TaskRepository.create(titulo,concluido);
        return linha;
    }
}

export default new TaskService()