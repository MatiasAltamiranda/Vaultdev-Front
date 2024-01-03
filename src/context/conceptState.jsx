import { useReducer } from "react";
import ConceptContext from "./conceptContext";
import conceptReducer from "./conceptReducer";
import clientAxios from "../config/axios";

import { GET_CONCEPTS } from "../types";

const ConceptState = (prop) => {
  const { children } = prop;

  const initialState = {
    concepts: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(conceptReducer, initialState);

  const getConcepts = async () => {
    try {
      const response = await clientAxios.get("/api/v1/concepts");
      console.log(response.data.concepts)
      dispatch({ type: GET_CONCEPTS, payload: response.data.concepts });
    } catch (error) {
      console.log(error);
    }
  };


  return <ConceptContext.Provider value={{...state,getConcepts}}>{children}</ConceptContext.Provider>;
};

export default ConceptState;
