import * as api from '../api'

export const setCurrentPageNumber = (currentPageNumber) => ({
  type: 'SET_CURRENT_PAGE_NUMBER',
  currentPageNumber,
})

export const clearSearch = () => ({
  type: 'CLEAR_SEARCH',
})

export const clearSelectedMovie = () => ({
  type: 'CLEAR_SELECTED_MOVIE',
})

export const searchMoviesByTitle = (searchValue, page) => async (dispatch) => {
  try {
    const { data } = await api.fetchMoviesByTitle(searchValue, page)
    dispatch({
      type: 'FETCH_MOVIES_BY_TITLE',
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
      type: 'FETCH_SELECTED_MOVIE_DETAILS',
      selectedMovieDetails: data,
    })
  } catch (error) {
    console.log(error)
  }
}
