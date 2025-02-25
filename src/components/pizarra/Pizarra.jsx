//columna que estara en la TaskBoard que indicara que una tarea esta creada (pendiente) "revisar nombre"

import TaskCard from "../taskCard/TaskCard";

import { Box } from "@mui/material";

const Pizarra = ({ tareas, eliminarTarea, editarTarea }) => {
    console.log("Tareas en ColumnaInicio:", tareas); // ✅ Verificar que las tareas llegan aquí
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "flex-start", flexWrap:"wrap", justifyContent: "center", gap: 2 }}>
                {tareas.map((tarea) => (
                    <TaskCard
                        key={tarea.id}
                        id={tarea.id}
                        title={tarea.title}
                        description={tarea.description}
                        eliminarTarea={eliminarTarea}
                        editarTarea={editarTarea} />
                ))}
            </Box>
        </>
    )
}


export default Pizarra;


{/* <div className="columnaInicio">
                <div className="titulo_columna">
                    <h3>INICIO</h3>
                </div>
                <div className="ubicacion_cards">
                    {tareas.map((tarea) => (
                        <TaskCard
                            key={tarea.id}
                            id={tarea.id}
                            title={tarea.title}
                            description={tarea.description}
                            eliminarTarea={eliminarTarea}
                            editarTarea={editarTarea}
                        />
                    ))}
                </div>
            </div> */}