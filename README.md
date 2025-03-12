# Gestor de Tareas

## 📌 Descripción
Este es un gestor de tareas inspirado en sistemas como Trello, diseñado para organizar tareas de manera visual en una pizarra interactiva. La primera versión está enfocada en la administración de tareas sin backend, con la posibilidad de expandir funcionalidades en el futuro.

## 🚀 Características
- Creación, edición y eliminación de tareas.
- Diseño responsivo con **Material UI**.
- Distribución flexible de tareas en una "pizarra" estilo post-it.
- Persistencia temporal de datos en **useState**.
- Navegación con **React Router DOM v7**.

## 🎨 Tecnologías Utilizadas
- **React Vite** ⚡
- **Material UI** para estilos.
- **React Router DOM** para manejo de rutas.
- **JavaScript (ES6+)** para la lógica de la aplicación.

## 📂 Estructura del Proyecto
```
📦 gestor-tareas
├── 📂 src
│   ├── 📂 assets
│   │   ├── 📂 Styles
│   │       ├── 📜 theme.jsx           # Configuración de tema con breakpoints
│   ├── 📂 components
│   │   ├── 📂 barraNavegacion
│   │   │   ├── 📜 barraNavegacion.jsx   # Navbar
│   │   ├── 📂 pizarra
│   │   │   ├── 📜 pizarra.jsx           # Pizarra
│   │   ├── 📂 taskCard
│   │   │   ├── 📜 TaskCard.jsx          # Tarjetas individuales de tareas
│   │   ├── 📂 taskEditor
│   │   │   ├── 📜 TaskEditor.jsx        # Formulario para crear/editar tareas
│   │   ├── 📂 switchMode
│   │   │   ├── 📜 switchMode.jsx        # Componente switch del modo light/dark
│   │   ├── 📂 taskBoard
│   │   │   ├── 📜 TaskBoard.jsx     # Página principal con la pizarra
│   ├── 📜 App.jsx             # Punto de entrada de la app
│   ├── 📜 main.jsx            # Renderizado principal con ReactDOM
├── 📜 package.json            # Dependencias del proyecto
├── 📜 vite.config.js          # Configuración de Vite
└── 📜 README.md               # Documentación del proyecto
```

## 📖 Instalación y Uso
1. Clona este repositorio:
   ```bash
   git clone https://github.com/gastonMacias/gestor-tareas.git
   ```
2. Entra en la carpeta del proyecto:
   ```bash
   cd gestor-tareas
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre en tu navegador: `http://localhost:5173`

## 📌 Próximas Mejoras
- Implementación de **Drag and Drop** para mover tareas.
- Persistencia de datos con **localStorage** o **backend**.
- Mejoras en la UI con animaciones y transiciones.
- Sistema de autenticación para usuarios.

## 📜 Licencia
Este proyecto está bajo la licencia **Gaston Ezequiel Macias** pero se aceptan cambios y consejos ya que estamos aprendiendo ¡¡Muchas Gracias!!.

---
💡 _Si tienes sugerencias o encuentras errores, no dudes en abrir un issue o hacer un pull request._

