
//componente barra de navegacion en principio va a tener solo una opcion "NUEVA TAREA"


import { Box, Button, Typography } from "@mui/material";
import SwitchMode from "../switchMode/SwitchMode";




const BarraNavegacion = ({ setOpen, toggleTheme }) => {

    return (
        <Box
            width="100%"
            height={60}
            sx={(theme) => ({
                width: "100%",
                height: 60,
                backgroundColor: theme.palette.background.default,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 3,

                //[theme.breakpoints.down("sm")] dar el responsive en aparatos menores a 600px
                [theme.breakpoints.down("sm")]: {
                    flexDirection: "column",
                    height: "auto",
                    padding: 2,
                    gap: 2,
                    textAlign: "center"
                },
            })}
        >
            <Typography
                sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontSize: 25,
                    fontWeight: "bold"
                }}
            >
                PIZARRA DE TAREAS
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
            <SwitchMode onClick={toggleTheme} />
        </Box>
    );
};

export default BarraNavegacion;

