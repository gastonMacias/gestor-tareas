//componente que contendra el formulario para la creacion de las tareas 

import { Button, Modal, Box, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useState, useEffect } from "react";

const TaskEditor = ({ open, onClose, agregarTarea, tareaEditada, handleClose }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [prioridad, setPrioridad] = useState("media"); // Valor por defecto


    //para editar la card
    useEffect(() => {
        if (tareaEditada) {
            setTitle(tareaEditada.title);
            setDescription(tareaEditada.description);
            setPrioridad(tareaEditada.prioridad);
        } else {
            setTitle("");
            setDescription("");
            setPrioridad("media");
        }
    }, [tareaEditada]);


    //manejar el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nueva Tarea:", { title, description, prioridad });
        
        if (!prioridad) {
            alert("Por favor, selecciona una prioridad.");
            return;
          }
        //genera una nueva tarea
        const nuevaTarea = {
            id: tareaEditada ? tareaEditada.id : Date.now(),
            title,
            description,
            prioridad,
        };

        agregarTarea(nuevaTarea); // Llama a la función de TaskBoard

        // Limpia el formulario
        setTitle("");
        setDescription("");
        setPrioridad("media");
        onClose();
    };


    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box 
                sx={style}
                key={open} >
                <Typography id="modal-modal-title" variant="h6" component="h2" color="primary">
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

                    <FormControl sx={{ display: "flex", alignItems: "center", mb: 2 }} >
                        <FormLabel
                            required
                            id="demo-radio-buttons-group-label"
                            sx={(theme) => ({
                                color: theme.palette.primary.main,
                                fontWeight: "bold",
                                m: 1
                            })}
                        >Prioridad</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"

                            name="radio-buttons-group"
                            onChange={(e) => setPrioridad(e.target.value)}
                            sx={{ display: "flex" }}
                        >
                            <FormControlLabel
                                value="alta"
                                control={<Radio sx={{ color: "#E53935", '&.Mui-checked': { color: "#E53935" } }} />}
                                label="Alta"
                            />
                            <FormControlLabel
                                value="media"
                                control={<Radio sx={{ color: "#FFB300", '&.Mui-checked': { color: "#FFB300" } }} />}
                                label="Media"
                            />
                            <FormControlLabel
                                value="baja"
                                control={<Radio sx={{ color: "#43A047", '&.Mui-checked': { color: "#43A047" } }} />}
                                label="Baja"
                            />
                        </RadioGroup>
                    </FormControl>

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
    p: 5,
    borderRadius: 2,
};

export default TaskEditor;

