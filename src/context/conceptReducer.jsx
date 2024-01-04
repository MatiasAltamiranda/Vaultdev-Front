import { GET_CONCEPTS,GET_CONCEPT } from "../types";

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

      case GET_CONCEPT:
      return {
        ...state,
        concepts: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
        loading: false,
      };

    default:
      return state;
  }
};

export default conceptReducer;
