//columna que estara en la TaskBoard que indicara que una tarea esta creada (pendiente) "revisar nombre"


import TaskCard from "../taskCard/TaskCard";
import "./columnaInicioStyles.css";


const ColumnaInicio = () => {
    return (
        <>
            <div className="columnaInicio">
                <div className="titulo_columna">
                    <h3>INICIO</h3>
                </div>
                <div className="ubicacion_cards">
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </div>
            </div>
        </>
    )
}


export default ColumnaInicio;