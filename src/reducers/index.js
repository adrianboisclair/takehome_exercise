import {
  SEARCH_GIPHY_BY_TERM,
  SEARCH_GIPHY_BY_TERM_COMPLETE,
  SET_IS_LOADING_STATUS,
  SET_SEARCH_TERM,
} from "../actionTypes";

const DEFAULT_STATE = {
  result: [],
  routes: [
    '/',
    'about',
  ]
};

export default (state = DEFAULT_STATE, action) => {
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

    case SET_IS_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state
  }
}
