//componente que contendra el formulario para la creacion de las tareas 
import "./taskEditorStyles.css";

import { Button, Modal, Box, Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";

const TaskEditor = ({ open, onClose, agregarTarea, tareaEditada }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    //para editar la card
    useEffect(() => {
        if (tareaEditada) {
            setTitle(tareaEditada.title);
            setDescription(tareaEditada.description);
        } else {
            setTitle("");
            setDescription("");
        }
    }, [tareaEditada]);


    //manejar el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nueva Tarea:", { title, description });

        //genera una nueva tarea
        const nuevaTarea = {
            id: tareaEditada ? tareaEditada.id : Date.now(),
            title,
            description,
        };

        agregarTarea(nuevaTarea); // Llama a la función de TaskBoard

        // Limpia el formulario
        setTitle("");
        setDescription("");
        onClose();
    };


    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Crear Nueva Tarea
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Título"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{ mb: 2 }}
                        required
                    />
                    <TextField
                        label="Descripción"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{ mb: 2 }}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Guardar Tarea
                    </Button>
                </form>
                <Button onClick={onClose} sx={{ mt: 2 }} color="secondary" variant="contained" fullWidth>
                    Cancelar
                </Button>
            </Box>
        </Modal>
    )
}

// Estilos del modal
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

export default TaskEditor;

