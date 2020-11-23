import * as api from '../api'

export const getTrendingMovies = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchTrendingMovies(page)

    dispatch({
      type: 'FETCH_TRENDING_MOVIES',
      moviesPage: data,
    })
  } catch (error) {
    console.log(error)
  }
}
