import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

// documentar    
type TaskType = {
  titulo: string
  id: string
  concluido: boolean
}

function App() {

  // let task: any[] = []

  // Esse cara aqui ele faz alterações e motra os dados no front end
  const [task, setTask] = useState<TaskType[]>([])

  // esse caba aqui vai servir para pegar o input do usuário
  const inputTitulo = useRef<HTMLInputElement | any >(null);

  async function getTask() {
    // Aqui criamos uma variavel  para pegar os "dados" e armazenar no arry de tarefas
    const taskFromApi = await api.get('/listar_task');
    setTask(taskFromApi.data);

  }

  async function createTask() {
    await api.post('/criar_task', {
      titulo: inputTitulo.current.value,
      concluido: false
    });

    getTask();
  }

  async function deleteTask(id: string) {
    await api.delete(`/deletar_task/${id}`);

    getTask();
  }

  // Esse caba aqui vai servir para gente navegar entre as págninas
  const navigate = useNavigate();

  function editPageClick(id: string) {
    let teste = id ?? 0
    console.log(`/edit_task/${teste}`)
    navigate(`/edit_task/${teste}`)
  }

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-600 to-emerald-400 ">
      <div className="bg-white shadow-lg rounded-3xl py-10 px-4" >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Cadastrar Tarefas ✅</h2>
        <div className="mb-4 flex">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            {/* <label htmlFor="">Titulo:</label> */}
            <input type="text" name="titulo" ref={inputTitulo} placeholder="Nova tarefa" className="grow px-3 py-2 border rounded-l-lg focus: outline-none " />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg" type="button" onClick={createTask}>Cadastrar</button>
          </form>
        </div>

        {task.map((task) => (
          <div key={task.id} className="rounded-2xl space-y-2 my-2 flex items-center p-3 bg-slate-100 border border-gray-200 justify-between">
            <p>Titulo: {task.titulo}</p>
            <div className="flex gap-2">
              <button className="bg-red-600 rounded-full text-white p-2 transition-all cursor-pointer hover:bg-red-800" onClick={() => deleteTask(task.id)}>Deletar</button>
              <button className="bg-blue-600 rounded-full text-white p-2 cursor-pointer hover:bg-blue-800" onClick={() => editPageClick(task.id)}>Editar</button>
            </div>

          </div>
        ))}
      </div>
    </div>



  )
}

export default App
