export const database = (votedMovies = [], action) => {
  switch (action.type) {
    case 'UP_VOTE_OR_DOWN_VOTE_MOVIE':
      return [...votedMovies, action.movie]
    // const isAlreadySaved = votedMovies.find(
    //   (movie) => movie.id === action.movie.id,
    // )
    // if (isAlreadySaved) {
    //   return votedMovies.forEach((movie) => {
    //     movie.id === action.movie.id && (movie = action.movie)
    //   })
    // } else {
    //   return [...votedMovies, action.movie]
    // }

    default:
      return votedMovies
  }
}
