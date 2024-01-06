import { useContext, useEffect} from "react";
import ConceptContext from "../../context/conceptContext";
import { useParams } from "react-router-dom";
import Search from "../../components/search/search"
import Loader from "../../components/loader/loader";
import { Link } from "react-router-dom";



const SearchPage = () =>{

const {getConceptByTitle, concept_title, loading} = useContext(ConceptContext);   
const {q} =useParams()


useEffect(()=>{
    getConceptByTitle(q);
},[concept_title])

    return(
        <>
         <Search />
        <section className="concept-list container p-3">
            <div className="row">
                <div className="col-12 concept-list-container">
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            {concept_title.length > 0 ? (
                                concept_title.map(concept => (
                                    <article key={concept._id}>
                                        <p>{concept.title}</p>
                                        <Link to={`/concept/${concept._id}`}>
                                            <button className="concept-list-container-btn">Ver más</button>
                                        </Link>
                                    </article>
                                ))
                            ) : (
                                <p className="text-center mt-2 fs-3">Upps! Al parecer tu palabra no se encuentra en nuestra base ☹️, prueba con otra!!</p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
        </>
    );
}

export default SearchPage;