import { prisma } from "../db"

module.exports = async (req, res) => {
    const task = await prisma.tarefas.findMany();
    res.status(200).json(task);
}