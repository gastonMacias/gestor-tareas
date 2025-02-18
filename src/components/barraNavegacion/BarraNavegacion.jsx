
//componente barra de navegacion en principio va a tener solo una opcion (tarea nueva)
import { Link } from "react-router-dom";
import "./navbarStyles.css";


const BarraNavegacion = ({ setOpen }) => {


    //se utiliza el link para un buen uso de las rutas para la apertura en este caso del modal
    return (
        <nav className="navbar">
            <h1>GESTOR DE TAREAS</h1>
            <ul className="navbar_list">
                <li>
                    <span className="navbar_item" onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
                        NUEVA TAREA
                    </span>
                </li>
                <li>
                    <Link className="navbar_item" to="/historial">HISTORIAL DE TAREAS</Link>
                </li>
            </ul>
        </nav>
    )
}


export default BarraNavegacion;