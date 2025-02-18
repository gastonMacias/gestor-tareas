// card que sera parte de las columnas al crear una tarea se crea la card en la columna inicio del taskBoard

import { Box, Button, Card, CardContent, Typography, CardActions } from "@mui/material";
import "./taskCardStyles.css";

const TaskCard = ({ title, description, eliminarTarea, id, editarTarea }) => {
    return (

        <Card sx={{
            maxWidth: 345,
            textAlign: "center",
            width: 230,
            backgroundColor: "#1E293B",
            color: "#E5E7EB",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
        }}>
            <CardContent>
                <Box sx={{
                    backgroundColor: "#FACC15",
                    borderRadius: "6px",
                    padding: "6px",
                    marginBottom: "8px"
                }}>
                    <Typography
                        gutterBottom
                        variant="h6"
                        sx={{ color: "#1E293B", fontWeight: "bold" }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#E5E7EB" }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: "flex",
                justifyContent: "space-around",
                paddingBottom: "10px"
            }}>
                <Button size="small" variant="contained" color="primary" onClick={() => editarTarea({ id, title, description })} >Editar</Button>
                <Button size="small" variant="contained" color="secondary" onClick={() => eliminarTarea(id)} >Eliminar</Button>
            </CardActions>
        </Card>
    )
}

export default TaskCard;


{/* <div className="card">
                    <div className="titulo_card">
                        <h4>{title}</h4>
                    </div>
                    <div className="descripcion_card">
                        <p>{description}</p>
                    </div>
                </div > */}