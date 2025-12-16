import axios from "axios";



// Aqui a gente define a conexão com a API e exportamos ela para não ficar "hard code"
const api = axios.create({
    // baseURL : `${process.env.DATABASE_URL}`
    baseURL: "http://localhost:8080"
})

export {api}

