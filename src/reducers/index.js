import {
  SEARCH_GIPHY_BY_TERM,
  SEARCH_GIPHY_BY_TERM_COMPLETE,
  SET_SEARCH_TERM
} from "../actionTypes";

export default (state = {result: []}, action) => {
  switch (action.type) {

    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };

    case SEARCH_GIPHY_BY_TERM:
      return {
        ...state,
        result: action.payload.data,
      };

    case SEARCH_GIPHY_BY_TERM_COMPLETE:
      return {
        ...state,
        result: action.payload.data,
      };

    default:
      return state
  }
}
