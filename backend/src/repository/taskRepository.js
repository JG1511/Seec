import { prisma } from "../db.js"

class TaskRepository{
    findAll(){
        // new Promise((resolve,reject) =>{
        //     const resultado = prisma.tarefas.findMany();   
        //     return resolve(resultado)
        // })

        const result = prisma.tarefas.findMany()
        return result
    }
    create(){}
    update(){}
    findId(){}
    delete(){}
}

export default  new TaskRepository()


 