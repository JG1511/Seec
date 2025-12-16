-- CreateTable
CREATE TABLE "Tarefas" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "concluido" BOOLEAN NOT NULL,

    CONSTRAINT "Tarefas_pkey" PRIMARY KEY ("id")
);
