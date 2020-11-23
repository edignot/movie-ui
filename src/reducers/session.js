const sessionTemplate = {
  currentPageNumber: 1,
  searchApplied: false,
  upVotedMovies: [],
  downVotedMovies: [],
  searchedMovies: [],
}

export const session = (session = sessionTemplate, action) => {
  switch (action.type) {
    case 'UP_VOTE_MOVIE':
      return {
        ...session,
        upVotedMovies: [...session.upVotedMovies, action.movie],
      }
    case 'DOWN_VOTE_MOVIE':
      return {
        ...session,
        downVotedMovies: [...session.downVotedMovies, action.movie],
      }
    case 'SET_CURRENT_PAGE_NUMBER':
      return {
        ...session,
        currentPageNumber: action.currentPageNumber,
      }
    case 'FETCH_MOVIES_BY_TITLE':
      return {
        ...session,
        searchApplied: true,
        searchedMovies: [action.moviesPage],
      }
    case 'CLEAR_SEARCH':
      return {
        ...session,
        searchApplied: false,
        currentPageNumber: 1,
      }
    default:
      return session
  }
}
