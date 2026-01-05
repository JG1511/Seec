import { prisma } from "../db.js"

class TaskRepository {
    async findAll() {
        const result = await prisma.tarefas.findMany()
        return result
    }
    async create(titulo, concluido) {
        const new_task = await prisma.tarefas.create({
            data: {
                titulo: titulo,
                concluido: concluido
            }
        })

        return new_task
    }
    update() { }
    findId() { }
    delete() { }
}

export default new TaskRepository()


