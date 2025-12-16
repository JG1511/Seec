import express from "express"
// import { getTarefas } from "./scripts.js"
import { prisma } from "./db.js"
import cors from 'cors'



// a const app recebe todas as funções que o express disponibiliza
const app = express()
// aqui a gente fala para nossa aplicação receber json
app.use(express.json())

// este caba aqui, ele serve para aceitar que outras "portas" façam as requisições no servidor
app.use(cors({
    origin: ["http://localhost:5173"]
}))

// estás funções geralmente recebe dois parâmetros, uma string (geralmente o nome da rota) e outro de callback( que vai ter dois parametros, req e res) 
app.get('/', async (req, res) => {
    const tarefa = getTarefas()
    res.json({ message: "Servidor está rodando", tarefa })
})

app.get('/listar_task', async (req, res) => {
    // res.json('rota para listar ')

    // const lista_task = []
    const tasks = await prisma.tarefas.findMany()

    // lista_task.push(tasks)

    if (!tasks) {
        res.json('error')
        return
    }

    res.json(tasks)

})

app.post('/criar_task', async (req, res) => {
    // res.json('rota para criar tarefas')

    const { titulo, concluido } = req.body;

    const new_task = await prisma.tarefas.create({
        data: {
            titulo: titulo,
            concluido: concluido
        }
    })
    res.json(new_task)
})

app.put('/editar_task/:id', async (req, res) => {
    // res.json('rota para editar tarefas')

    // aqui este caba recebe o id que é passado pela url
    const { id } = req.params
    const { titulo, concluido } = req.body

    const task = await prisma.tarefas.update({
        where: { id: id },
        data: {
            titulo: titulo,
            concluido: concluido
        }
    })

    console.log(task)
    res.json(task)
})

app.delete('/deletar_task/:id', async (req, res) => {
    // res.json('rota para deletar tarefas')]

    const { id } = req.params

    await prisma.tarefas.delete({
        where: { id: id }
    })
    res.json({ mesagem: "tarefa excluida com sucesso" })
})

// aqui a gente pode para ele "escutar está porta "
app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
})

