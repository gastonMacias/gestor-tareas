
//componente barra de navegacion en principio va a tener solo una opcion "NUEVA TAREA"


import { Box, Button, Typography } from "@mui/material";


const BarraNavegacion = ({ setOpen }) => {
    return (
        <Box
            width="100%"
            height={60}
            sx={{
                backgroundColor: (theme) => theme.palette.background.default,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 3,
            }}
        >
            <Typography
                color="white"
                fontSize={25}
                fontWeight="bold"
            >
                GESTOR DE TAREAS
            </Typography>

            <Button
                variant="contained"
                sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.primary.contrastText,
                    fontSize: 14,
                    fontWeight: "bold",
                    "&:hover": {
                        backgroundColor: (theme) => theme.palette.primary.dark
                    }
                }}
                onClick={() => setOpen(true)}
            >
                NUEVA TAREA
            </Button>
        </Box>
    );
};

export default BarraNavegacion;

