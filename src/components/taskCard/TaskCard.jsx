// card que sera parte de las columnas al crear una tarea se crea la card en la columna inicio del taskBoard

import { Box, Button, Card, CardContent, Typography, CardActions, Paper } from "@mui/material";

const TaskCard = ({ title, description, eliminarTarea, id, editarTarea, prioridad, tarea }) => {
    return (

        <Card sx={(theme) => ({
            maxWidth: 345,
            textAlign: "center",
            width: 230,
            backgroundColor: theme.palette.background.default,
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            border: "8px solid",
            borderColor: tarea.prioridad === "alta" ? "red" :
                tarea.prioridad === "media" ? "yellow" : "green",
        })}>
            <CardContent>
                <Box sx={(theme) => ({
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: "6px",
                    padding: "6px",
                    marginBottom: "8px",
                    color: theme.palette.mode.main,
                })}>
                    <Typography
                        gutterBottom
                        variant="h6"
                        sx={(theme) => ({
                            color: theme.palette.primary.main,
                            fontWeight: "bold"
                        })}
                    >
                        {title}
                    </Typography>
                </Box>
                <Typography variant="body2" sx={(theme) => ({
                    color: theme.palette.text.primary
                })}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: "flex",
                justifyContent: "space-around",
                paddingBottom: "10px"
            }}>
                <Button size="small" variant="contained" color="primary" onClick={() => editarTarea({ id, title, description, prioridad })} >Editar</Button>
                <Button size="small" variant="contained" color="secondary" onClick={() => eliminarTarea(id)} >Eliminar</Button>
            </CardActions>
        </Card>
    )
}

export default TaskCard;


