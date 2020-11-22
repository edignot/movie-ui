export const movies = (movies = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return action.movies
    default:
      return movies
  }
}
