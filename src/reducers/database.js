export const database = (votedMovies = [], action) => {
  switch (action.type) {
    case 'UP_VOTE_OR_DOWN_VOTE_MOVIE':
      const otherMovies = votedMovies.filter(
        (movie) => movie.id !== action.movie.id,
      )
      return [...otherMovies, action.movie]

    default:
      return votedMovies
  }
}
