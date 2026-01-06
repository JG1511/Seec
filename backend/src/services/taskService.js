//Arquivo resposável pela regra de negócio, ele é responsável por acessar o repository 
import TaskRepository from "../repository/taskRepository.js";


class TaskService {
    async listar_task() {
        const linhas = TaskRepository.findAll();
        return linhas;
    }

    async criar_task(titulo, concluido) {
        const linha = TaskRepository.create(titulo, concluido);
        return linha;
    }

    async editar_task(id, titulo, concluido) {
        const linha = TaskRepository.update(id, titulo, concluido)
        return linha
    }

    async deletar_task(id) {
        const linha = TaskRepository.delete(id)
    }
}

export default new TaskService()