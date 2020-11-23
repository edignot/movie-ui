import {
  FETCH_ALL_VOTED_MOVIES,
  UP_VOTE_OR_DOWN_VOTE_MOVIE,
} from '../utils/action-types'

export const database = (votedMovies = [], action) => {
  switch (action.type) {
    case FETCH_ALL_VOTED_MOVIES:
      return action.votedMovies
    case UP_VOTE_OR_DOWN_VOTE_MOVIE:
      const otherMovies = votedMovies.filter(
        (movie) => movie.id !== action.movie.id,
      )
      return [...otherMovies, action.movie]

    default:
      return votedMovies
  }
}
