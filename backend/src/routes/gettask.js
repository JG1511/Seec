import { prisma } from "../db"

module.exports = async (req, res) => {
    const task = await prisma.tarefas.findMany();
    res.json(task);
}