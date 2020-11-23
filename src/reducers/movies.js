import { FETCH_TRENDING_MOVIES } from '../utils/action-types'

export const movies = (movies = [], action) => {
  switch (action.type) {
    case FETCH_TRENDING_MOVIES:
      return [...movies, action.moviesPage]
    default:
      return movies
  }
}
