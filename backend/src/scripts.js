import { prisma } from "./db.js"



// o await é utilizado para esperar a "consulta" com o BD
export async function getTarefas(){
    const tarefa = await prisma.tarefas.findMany()
    console.log(tarefa)

}

getTarefas()