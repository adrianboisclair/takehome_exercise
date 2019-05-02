import axios from "axios";
import {GIPHY_API_ENDPOINT} from '../constants';
import {SEARCH_GIPHY_BY_TERM, SET_SEARCH_TERM} from "../actionTypes";


export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm,
});

const fetchImages = (searchTerm) => {
  const url = `${GIPHY_API_ENDPOINT}&q=${searchTerm}`;

  return axios.get(url)
};

export const searchGiphyByTerm = searchTerm => {
  return dispatch => {
    return fetchImages(searchTerm)
      .then(
        result => dispatch({ type: SEARCH_GIPHY_BY_TERM, payload: result.data},
        error => dispatch({ type: 'SEARCH_ERROR', error})
      )
    );
  }
};
