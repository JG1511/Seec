// Este aquivo tem a finalidade exclusiva de apenas fazer consultas no BD
import { prisma } from "../db.js"

class TaskRepository {
    //CRUD de tasks

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
    async update(id, titulo, concluido) {


        const update_task = await prisma.tarefas.update({
            where: { id: id },
            data: {
                titulo: titulo,
                concluido: concluido
            }
        })
        return update_task
    }
    async delete(id) {
        await prisma.tarefas.delete({
            where: { id: id }
        })
    }
}

export default new TaskRepository()


