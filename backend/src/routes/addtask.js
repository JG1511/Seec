import { prisma } from "../db"
//Module exporte define o que o arquivo irá entregar
module.exports = async (req, res) => {
    try {
        const { titulo, concluido } = req.body;

        const new_task = await prisma.tarefas.create({
            data: {
                titulo: titulo,
                concluido: concluido
            }
        })

        res.status(201).json(new_task)

    } catch (error) {
        res.status(400)
    }
}