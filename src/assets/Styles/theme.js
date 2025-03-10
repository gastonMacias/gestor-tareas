

import { createTheme } from "@mui/material/styles";

// Tema oscuro
const darkTheme = createTheme({
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
            color: "#E5E7EB",
          },
          "& .MuiInputLabel-root": {
            color: "#94A3B8",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#94A3B8",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FACC15",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FACC15",
          },
        },
      },
    },
  },
});

// Tema claro
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007BFF", // Azul vibrante
    },
    secondary: {
      main: "#6C757D", // Gris neutro
    },
    text: {
      primary: "#212529", // Negro suave
      secondary: "#495057", // Gris oscuro
    },
    background: {
      default: "#F8F9FA", // Gris muy claro
      paper: "#FFFFFF", // Blanco puro
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
            color: "#212529",
          },
          "& .MuiInputLabel-root": {
            color: "#6C757D",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6C757D",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#007BFF",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#007BFF",
          },
        },
      },
    },
  },
});


// Función para obtener el tema dinámicamente
export const getTheme = (mode) => (mode === "dark" ? darkTheme : lightTheme);

export default darkTheme;

