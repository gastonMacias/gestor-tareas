//tablero principal de la aplicacion en ella estaran las 3 columnas iniciada, en proceso y finalizada


import { useState } from "react";
import ColumnaEnProceso from "../columnaEnProceso/ColumnaEnProceso";
import ColumnaFinalizada from "../columnaFinalizada/ColumnaFinalizada";
import ColumnaInicio from "../columnaInicio/ColumnaInicio";
import TaskEditor from "../taskEditor/TaskEditor";
import "./taskBoardStyles.css";
import BarraNavegacion from "../barraNavegacion/BarraNavegacion";


const TaskBoard = () => {

    const [tareas, setTareas] = useState([])

    // useState para abrir el modal taskEditor
    const [open, setOpen] = useState(false);

    //necesario para boton de la card editar
    const [tareaEditada, setTareaEditada] = useState(null)

    const editarTarea = (tarea) => {
        setTareaEditada(tarea);
        setOpen(true)
    }

    const agregarTarea = (nuevaTarea) => {
        setTareas((prevTareas) => {
            // Si existe una tarea con el mismo ID, la reemplazamos
            const tareaExistente = prevTareas.find((t) => t.id === nuevaTarea.id);
    
            if (tareaExistente) {
                return prevTareas.map((t) =>
                    t.id === nuevaTarea.id ? nuevaTarea : t
                );
            }
    
            // Si no existe, agregamos una nueva
            return [...prevTareas, nuevaTarea];
        });
    
        setTareaEditada(null); // Limpiamos el estado de edición
        setOpen(false); // Cerramos el modal
    };
    

    const eliminarTarea = (id) => {
        console.log("ID a eliminar:", id); // 📌 Verificar el ID recibido
        setTareas((prevTareas) => {
            const nuevasTareas = prevTareas.filter((tarea) => tarea.id !== id);
            console.log("Nuevas tareas después de eliminar:", nuevasTareas); // 📌 Verificar que la tarea desaparece
            return nuevasTareas;
        });
    };

    return (
        <>
            <BarraNavegacion setOpen={setOpen} />
            <div className="taskBoard">

                <ColumnaInicio
                    tareas={tareas}
                    eliminarTarea={eliminarTarea}
                    editarTarea={editarTarea} />
                <ColumnaEnProceso tareas={[]} />
                <ColumnaFinalizada tareas={[]} />
            </div>

            {/* TaskEditor recibe la función para agregar tareas */}
            <TaskEditor
                agregarTarea={agregarTarea}
                tareaEditada={tareaEditada}
                open={open}
                onClose={() => setOpen(false)} />
        </>
    )
}

export default TaskBoard;