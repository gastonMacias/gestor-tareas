import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FACC15", // Amarillo
    },
    secondary: {
      main: "#94A3B8", // Gris más oscuro
    },
    text: {
      primary: "#E5E7EB", // Gris claro
      secondary: "#94A3B8", // Gris más oscuro
    },
    background: {
      default: "#0F172A", // Azul oscuro
      paper: "#1E293B", // Azul más claro
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#E5E7EB", // Color del texto ingresado
          },
          "& .MuiInputLabel-root": {
            color: "#94A3B8", // Color del label (Título, Descripción)
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#94A3B8", // Borde del input
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FACC15", // Borde al pasar el mouse
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FACC15", // Borde cuando está enfocado
          },
        },
      },
    },
  },
});

export default theme;
