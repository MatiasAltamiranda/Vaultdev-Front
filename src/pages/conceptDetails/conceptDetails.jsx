import Search from "../../components/search/search";
import { Link } from "react-router-dom";
import "./conceptDetails.css"

const ConceptDetails = () =>{


    return(
        <>
        <Search/>
        <div className="container concept-details">
            <div className="row">
                <div className="col-12">
                    <Link to="/">← Volver</Link>
                    <h2 className="text-center concept-details-title">{"< Algoritmo />"}</h2>
                    <p className="text-center concept-details-paragraph">Un algoritmo es un conjunto de instrucciones para resolver un problema o realizar una tarea especifica</p>
                    <div className="examples-use">
                        <h3>{"< Ejemplos de uso />"}</h3>
                        <div className="list-examples">
                            <ul>
                                <li>Ordenamiento de una lista de  numeros</li>
                                <li>Busqueda binaria</li>
                            </ul>
                        </div>
                        <div className="examples-tags">
                        <b>Etiquetas:</b><p> Algoritmo, logica </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ConceptDetails;