// este arquivo trabalha com as solicitação (req) e as respostas (res)
import TaskService from "../services/taskService.js";

class TaskController {
    async getTask(req, res) {

        const tasks = await TaskService.listar_task();
        res.status(200).json(tasks);
    }

    async creatTask(req, res) {
        const { titulo, concluido } = req.body;
        const new_task = await TaskService.criar_task(titulo, concluido);
        res.status(201).json(new_task);
    }

    async updateTask(req,res) {
        const {id} = req.params;
        const { titulo, concluido } = req.body;

        const updateTask = await TaskService.editar_task(id,titulo,concluido);
        res.status(200).json(updateTask);
    }

    async deleteTask(req,res){
       const {id} = req.params;
       await TaskService.deletar_task(id);

       res.status(200).json({ mesagem: "tarefa excluida com sucesso"});
    }
}

export default new TaskController();