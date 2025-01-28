//tablero principal de la aplicacion en ella estaran las 3 columnas iniciada, en proceso y finalizada


import ColumnaEnProceso from "../columnaEnProceso/ColumnaEnProceso";
import ColumnaFinalizada from "../columnaFinalizada/ColumnaFinalizada";
import ColumnaInicio from "../columnaInicio/ColumnaInicio";
import "./taskBoardStyles.css";

const TaskBoard = () => {
    return (
        <>
        <div className="taskBoard">
            <ColumnaInicio />
            <ColumnaEnProceso />
            <ColumnaFinalizada />
        </div>
        </>
    )
}

export default TaskBoard;