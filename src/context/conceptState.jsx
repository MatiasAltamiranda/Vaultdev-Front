import { useReducer } from "react";
import ConceptContext from "./conceptContext";
import conceptReducer from "./conceptReducer";
import clientAxios from "../config/axios";

import { GET_CONCEPTS,GET_CONCEPT_ID,GET_CONCEPT_TITLE } from "../types";

const ConceptState = (prop) => {
  const { children } = prop;

  const initialState = {
    concepts: [],
    concept_id : [],
    concept_title:[],
    loading: true,
  };

  const [state, dispatch] = useReducer(conceptReducer, initialState);

  const getConcepts = async () => {
    try {
      const response = await clientAxios.get("/api/v1/concepts");
      dispatch({ type: GET_CONCEPTS, payload: response.data.concepts });
    } catch (error) {
      console.log(error);
    }
  };


  const getConcept = async (id) => {
    try {
      const response = await clientAxios.get(`/api/v1/concepts/${id}`);
      dispatch({ type: GET_CONCEPT_ID, payload: response.data.concept});
    } catch (error) {
      console.log(error);
    }
  };

  const getConceptByTitle = async (title) => {
    try {
      const response = await clientAxios.get(`/api/v1/concepts/search?q=${title}`);
      dispatch({ type: GET_CONCEPT_TITLE, payload: response.data.concepts}); 
    } catch (error) {
      console.log(error);
    }
  };


  return <ConceptContext.Provider value={{...state,getConcepts,getConcept,getConceptByTitle}}>{children}</ConceptContext.Provider>;
};

export default ConceptState;
