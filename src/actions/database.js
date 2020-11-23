import * as api from '../api'

export const upVoteOrDownVoteMovie = (id, title, posterPath, vote) => async (
  dispatch,
) => {
  try {
    const { data } = await api.postUpVoteOrDownVoteMovie(
      id,
      title,
      posterPath,
      vote,
    )
    dispatch({
      type: 'UP_VOTE_OR_DOWN_VOTE_MOVIE',
      movie: data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getAllVotedMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllVotedMovies()
    dispatch({
      type: 'FETCH_ALL_VOTED_MOVIES',
      votedMovies: data,
    })
  } catch (error) {
    console.log(error)
  }
}
