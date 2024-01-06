import Search from "../../components/search/search";
import {  useNavigate, useParams } from "react-router-dom";
import "./conceptDetails.css";
import { useContext, useEffect } from "react";
import ConceptContext from "../../context/conceptContext";
import Loader from "../../components/loader/loader";

const ConceptDetails = () => {
  const { getConcept, concept_id, loading } = useContext(ConceptContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getConcept(id);
  }, []);

  const backClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Search />
      <div className="container concept-details">
        <div className="row">
          {loading ? (
            <Loader />
          ) : (
            <div className="col-12">
              <p className="concept-details-back" onClick={backClick}>
                ← Volver
              </p>
              <h2 className="text-center concept-details-title">
                {concept_id &&
                  concept_id.length > 0 &&
                  `< ${concept_id[0].title} />`}
              </h2>
              <p className="text-center concept-details-paragraph">
                {concept_id &&
                  concept_id.length > 0 &&
                  `< ${concept_id[0].description} />`}
              </p>
              <div className="examples-use">
                <h3>{"< Ejemplos de uso />"}</h3>
                <div className="list-examples">
                  <ul>
                    {concept_id &&
                      concept_id.length > 0 &&
                      concept_id[0].examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                  </ul>
                </div>
                <div className="examples-tags">
                  <b>Etiquetas:</b>
                  {concept_id &&
                    concept_id.length > 0 &&
                    concept_id[0].tags.map((example, i) => (
                      <p key={i}>{example} </p>
                    ))}
                </div>
              </div>
              <div className="mb-5">
                <p className="concept-details-back" onClick={backClick}>
                  ← Volver
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ConceptDetails;
