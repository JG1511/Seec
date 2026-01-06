import express from "express"
import cors from 'cors'
import router from "./routes/taskRoutes.js"



// a const app recebe todas as funções que o express disponibiliza
const app = express()

// aqui a gente fala para nossa aplicação receber json
app.use(express.json())

// este caba aqui, ele serve para aceitar que outras "portas" façam as requisições no servidor
app.use(cors({
    origin: ["http://localhost:5173"]
}))

// o app utiliza as rotas que foram estabelecidas no taskRoutes.js
app.use(router)

// aqui a gente pode para ele "escutar está porta "
app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
})

