import { api } from "../../services/api"
import { useParams } from "react-router-dom"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function EditTaskPage() {

    //esse caba pega as coisas da url
    const { id } = useParams();
    const navigate = useNavigate()

    const titulo = useRef<HTMLInputElement | any>(null);

    async function editTask(id: string | undefined) {
        await api.put(`/editar_task/${id}`, {
            titulo: titulo.current.value,
            concluido: true
        })
        navigate('/new');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-600 to-emerald-400 ">
            <div className="bg-white shadow-lg rounded-3xl pt-16" >
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Editar Tarefa: </h1>
                <div className="mb-4">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="titulo" ref={titulo} placeholder="Nova tarefa" className="grow px-3 py-2 border rounded-l-lg focus: outline-none" />
                        <button type="button" onClick={() => editTask(id)} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Confirmar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default EditTaskPage