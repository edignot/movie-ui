export const movies = (movies = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return [...movies, action.moviesPage]
    default:
      return movies
  }
}
