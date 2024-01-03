import "./conceptList.css";
import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import ConceptContext from "../../context/conceptContext";
import Loader from "../loader/loader";


const ConceptList = () => {
    const { getConcepts, concepts, loading } = useContext(ConceptContext);
    const [conceptsAPI, setconCeptsAPI] = useState([]);
    const [countLis, setCountList] = useState(7)

    useEffect(() => {
        getConcepts();
    }, []);

    useEffect(() => {
        if (concepts && concepts.length > 0) {
            const order = [...concepts].sort((a, b) => a.title.localeCompare(b.title));
            setconCeptsAPI(order);
        }
    }, [concepts]);

    const handleClicShowMore = () =>{
        setCountList(countLis + 7)
    };

    const handleClicShowLess = () =>{
        setCountList(countLis - 7)
    };

    return (
        <>
            <section className="concept-list container">
                <div className="row">
                    <div className="col-12 concept-list-container">
                        {loading ? (
                            <Loader />
                        ) : (
                            conceptsAPI.slice(0, countLis).map(concept => (
                                <article key={concept._id}>
                                    <p>{concept.title}</p>
                                    <Link to={`/concept/${concept._id}`}>
                                    <button className="concept-list-container-btn">Ver más</button>
                                    </Link>
                                </article>
                            ))
                        )}
                        <div className="section-btn-show">
                            {countLis < concepts.length && <button className="concept-list-container-btn" onClick={handleClicShowMore}>Mostrar más</button>}
                            {countLis > 7 && <button className="concept-list-container-btn" onClick={handleClicShowLess}>Mostrar menos</button>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConceptList;
