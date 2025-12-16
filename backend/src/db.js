import "dotenv/config";
import {PrismaPg} from '@prisma/adapter-pg'
import {PrismaClient} from "./generated/prisma/index.js"

import { Pool } from "pg";
// import { PrismaClient } from "./generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({connectionString})


//exportar diretamente, mas o pq?
const prisma = new PrismaClient({ adapter })

export {prisma}