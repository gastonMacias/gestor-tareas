// card que sera parte de las columnas al crear una tarea se crea la card en la columna inicio del taskBoard

import "./taskCardStyles.css";

const TaskCard = () => {
    return (
    <>
        <div className="card">
            <div className="titulo_card">
                <h4>Titulo</h4>
            </div>
            <div className="descripcion_card">
                <p>Descripcion</p>
            </div>
        </div>
    </>
    )
}

export default TaskCard;