import * as api from '../api'

export const getMovies = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchMovies(page)

    dispatch({
      type: 'FETCH_MOVIES',
      moviesPage: data,
    })
  } catch (error) {
    console.log(error)
  }
}
