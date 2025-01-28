
//componente barra de navegacion en principio va a tener solo una opcion (tarea nueva)

import "./navbarStyles.css";


const BarraNavegacion = () => {
    return (
        <nav className="navbar">
            <h1>GESTOR DE TAREAS</h1>
            <ul className="navbar_list">
                <li className="navbar_item">NUEVA TAREA</li>
                <li className="navbar_item">HISTORIAL DE TAREAS</li>
            </ul>
        </nav>
    )
}


export default BarraNavegacion;