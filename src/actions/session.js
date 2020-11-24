import * as api from '../api'
import {
  SET_CURRENT_PAGE_NUMBER,
  CLEAR_SEARCH,
  CLEAR_SELECTED_MOVIE,
  FETCH_MOVIES_BY_TITLE,
  FETCH_SELECTED_MOVIE_DETAILS,
  CLEAR_VOTED,
  SELECT_VOTED,
} from '../utils/action-types'

export const setCurrentPageNumber = (currentPageNumber) => ({
  type: SET_CURRENT_PAGE_NUMBER,
  currentPageNumber,
})

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
})

export const selectVoted = () => ({
  type: SELECT_VOTED,
})

export const clearVoted = () => ({
  type: CLEAR_VOTED,
})

export const clearSelectedMovie = () => ({
  type: CLEAR_SELECTED_MOVIE,
})

export const searchMoviesByTitle = (searchValue, page) => async (dispatch) => {
  try {
    const { data } = await api.fetchMoviesByTitle(searchValue, page)
    dispatch({
      type: FETCH_MOVIES_BY_TITLE,
      moviesPage: data,
      searchValue,
      page,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getSelectedMovieDetails = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSelectedMovieDetails(id)
    dispatch({
      type: FETCH_SELECTED_MOVIE_DETAILS,
      selectedMovieDetails: data,
    })
  } catch (error) {
    console.log(error)
  }
}
