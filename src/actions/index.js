import axios from "axios";
import {GIPHY_API_ENDPOINT, IS_LOADING_FALSE, IS_LOADING_TRUE} from '../constants';
import {SEARCH_GIPHY_BY_TERM, SET_IS_LOADING_STATUS, SET_SEARCH_TERM, SEARCH_ERROR} from "../actionTypes";

const fetchImages = (searchTerm) => axios.get(`${GIPHY_API_ENDPOINT}&q=${searchTerm}&limit=5`);

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm,
});

export const searchGiphyByTerm = searchTerm => {
  return dispatch => {
    dispatch({type: SET_IS_LOADING_STATUS, payload: IS_LOADING_TRUE});
    return fetchImages(searchTerm)
      .then(result => {
        dispatch({type: SEARCH_GIPHY_BY_TERM, payload: result.data}, error => dispatch({type: SEARCH_ERROR, error}))
        dispatch({type: SET_IS_LOADING_STATUS, payload: IS_LOADING_FALSE})
      });
  }
};
