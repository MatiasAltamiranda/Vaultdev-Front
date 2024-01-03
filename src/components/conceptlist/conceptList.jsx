import "./conceptList.css";
import { useContext, useEffect, useState } from "react";
import ConceptContext from "../../context/conceptContext";
import Loader from "../loader/loader";


const ConceptList = () => {
    const { getConcepts, concepts, loading } = useContext(ConceptContext);
    const [conceptsAPI, setconCeptsAPI] = useState([]);

    useEffect(() => {
        getConcepts();
    }, []);

    useEffect(() => {
        if (concepts && concepts.length > 0) {
            const order = [...concepts].sort((a, b) => a.title.localeCompare(b.title));
            setconCeptsAPI(order);
        }
    }, [concepts]);

    return (
        <>
            <section className="concept-list container">
                <div className="row">
                    <div className="col-12 concept-list-container">
                        {loading ? (
                            <Loader/>
                        ) : (
                            conceptsAPI.map(concept => (
                                <article key={concept._id}>
                                    <p>{concept.title}</p>
                                    <button className="concept-list-container-btn">Ver más</button>
                                </article>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConceptList;
