//tablero principal de la aplicacion en ella estaran las 3 columnas iniciada, en proceso y finalizada


import { useState } from "react";

import BarraNavegacion from "../barraNavegacion/BarraNavegacion";
import TaskEditor from "../taskEditor/TaskEditor";
import ColumnaInicio from "../columnaInicio/ColumnaInicio";

import { Container, Box, Grid2, Paper } from "@mui/material";


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
            
            <Container maxWidth="lg">
            <BarraNavegacion setOpen={setOpen} />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mt: 4
                    }}
                >
                    {/* Contenedor con Material UI */}
                    <Paper
                        elevation={3}
                        sx={{
                            width: "100%",
                            p: 3,
                            backgroundColor: (theme) => theme.palette.background.paper
                        }}
                    >
                        <Grid2 container spacing={2}>
                            <Grid2 item="true" xs={12} md={4}>
                                <ColumnaInicio
                                    tareas={tareas}
                                    eliminarTarea={eliminarTarea}
                                    editarTarea={editarTarea}
                                />
                            </Grid2>
                        </Grid2>
                    </Paper>
                </Box>
            </Container>
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





