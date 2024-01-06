import { GET_CONCEPTS,GET_CONCEPT_ID,GET_CONCEPT_TITLE } from "../types";

const conceptReducer = (state, action) => {
  switch (action.type) {
    case GET_CONCEPTS:
      return {
        ...state,
        concepts: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
        loading: false,
      };

      case GET_CONCEPT_ID:
      return {
        ...state,
        concept_id: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
        loading: false,
      };

      case GET_CONCEPT_TITLE:
        return {
          ...state,
          concept_title: Array.isArray(action.payload)
            ? action.payload
            : [action.payload],
          loading: false,
        };

    default:
      return state;
  }
};

export default conceptReducer;
