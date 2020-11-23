const sessionTemplate = {
  currentPageNumber: 1,
  searchApplied: false,
  searchValue: '',
  selectedMovie: {},
  searchedMovies: [],
}

export const session = (session = sessionTemplate, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE_NUMBER':
      return {
        ...session,
        currentPageNumber: action.currentPageNumber,
      }
    case 'FETCH_MOVIES_BY_TITLE':
      return {
        ...session,
        searchApplied: true,
        searchValue: action.searchValue,
        currentPageNumber: action.page,
        searchedMovies: [action.moviesPage],
      }
    case 'FETCH_SELECTED_MOVIE_DETAILS':
      return {
        ...session,
        selectedMovie: action.selectedMovieDetails,
      }
    case 'CLEAR_SELECTED_MOVIE':
      return {
        ...session,
        selectedMovie: {},
      }
    case 'CLEAR_SEARCH':
      return {
        ...session,
        searchApplied: false,
        searchValue: '',
        currentPageNumber: 1,
        searchedMovies: [],
      }
    default:
      return session
  }
}
