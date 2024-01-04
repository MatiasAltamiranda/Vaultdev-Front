import Search from "../../components/search/search";
import { Link, useParams } from "react-router-dom";
import "./conceptDetails.css";
import { useContext, useEffect } from "react";
import ConceptContext from "../../context/conceptContext";
import Loader from "../../components/loader/loader"

const ConceptDetails = () => {
  const { getConcept, concepts, loading } = useContext(ConceptContext);
  const { id } = useParams();

console.log(concepts[0])

  useEffect(() => {
    getConcept(id);
  }, []);



  return (
    <>
      <Search />
      <div className="container concept-details">
        <div className="row">
          {loading? <Loader/> :
          
          <div className="col-12">
            
            <Link className="concept-details-back" to="/">
              ← Volver
            </Link>
            <h2 className="text-center concept-details-title">{`< ${concepts[0].title} />`}</h2>
            <p className="text-center concept-details-paragraph">
             {concepts[0].description}
            </p>
            <div className="examples-use">
              <h3>{"< Ejemplos de uso />"}</h3>
              <div className="list-examples">
                <ul>
                 {concepts[0].examples.map((example,i) => 
                  <li key={i}>{example}</li>
                  )}
                </ul>
              </div>
              <div className="examples-tags">
                <b>Etiquetas:</b>
                {concepts[0].tags.map((example,i) => 
                  <p key={i}>{example} </p>
                  )}
              </div>
            </div>
            <div className="mb-5">
              <Link className="concept-details-back" to="/">
                ← Volver
              </Link>
            </div>
          </div>
          
          }
          
        </div>
      </div>
    </>
  );
};

export default ConceptDetails;
