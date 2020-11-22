const sessionTemplate = {
  currentPageNumber: 1,
  upVotedMovies: [],
  downVotedMovies: [],
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
    default:
      return session
  }
}
