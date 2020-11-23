import * as api from '../api'

export const setCurrentPageNumber = (currentPageNumber) => ({
  type: 'SET_CURRENT_PAGE_NUMBER',
  currentPageNumber,
})

export const clearSearch = () => ({
  type: 'CLEAR_SEARCH',
})

export const searchMoviesByTitle = (searchValue, page) => async (dispatch) => {
  try {
    const { data } = await api.fetchMoviesByTitle(searchValue, page)
    console.log(data)
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
