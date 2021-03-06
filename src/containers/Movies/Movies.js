import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVotedMovies } from '../../actions/database'
import { getTrendingMovies } from '../../actions/movies'
import {
  setCurrentPageNumber,
  searchMoviesByTitle,
} from '../../actions/session'
import Movie from '../Movie/Movie'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import Pagination from '../Pagination/Pagination'
import './Movies.css'

const Movies = () => {
  const dispatch = useDispatch()

  const movies = useSelector((store) => store.movies)
  const session = useSelector((store) => store.session)
  const database = useSelector((store) => store.database)

  const [loading, setLoading] = useState(false)
  const [moviesPerPage] = useState(20)

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true)
      !database.length && (await dispatch(getAllVotedMovies()))
      !movies.length && (await dispatch(getTrendingMovies(1)))
      setLoading(false)
    }
    fetchTrendingMovies()
  }, [])

  const searchedMovies = session.searchedMovies

  let moviesToDisplay

  if (session.votedApplied) {
    let paginatedVotedMovies = []
    let votedMoviesPages = Math.ceil(database.length / 20)
    const votedMovies = [...database]
    const votedSortedMovies = votedMovies.sort((a, b) => {
      return a.id - b.id
    })

    for (let i = 1; i <= votedMoviesPages; i++) {
      paginatedVotedMovies.push({
        page: i,
        results: votedSortedMovies.slice(0, 20),
        total_pages: votedMoviesPages,
        total_results: votedSortedMovies.length,
      })
      votedSortedMovies.splice(0, 20)
    }
    moviesToDisplay = paginatedVotedMovies
  } else if (searchedMovies.length) {
    moviesToDisplay = searchedMovies
  } else {
    moviesToDisplay = movies
  }

  const totalMoviesToDisplay = moviesToDisplay.length
    ? moviesToDisplay[0].total_results
    : 0

  const moviesToDisplayCurrentPage = moviesToDisplay.find(
    (moviesPage) => moviesPage.page === session.currentPageNumber,
  )

  let mappedMovies

  if (moviesToDisplayCurrentPage) {
    moviesToDisplayCurrentPage.results.forEach((movie) => {
      database.forEach((data) => {
        if (data.id === movie.id) {
          movie.up_vote = data.up_vote
          movie.down_vote = data.down_vote
        }
      })
    })
    mappedMovies = moviesToDisplayCurrentPage.results.map((movie) => (
      <Movie key={movie.id} movie={movie} />
    ))
  }

  const paginateHandler = async (pageNumber) => {
    dispatch(setCurrentPageNumber(pageNumber))

    const moviesToDisplayUpdatedPage = moviesToDisplay.find(
      (moviesPage) => moviesPage.page === pageNumber,
    )

    if (!moviesToDisplayUpdatedPage && !session.searchApplied) {
      setLoading(true)
      await dispatch(getTrendingMovies(pageNumber))
      setLoading(false)
    }

    if (!moviesToDisplayUpdatedPage && session.searchApplied) {
      setLoading(true)
      await dispatch(searchMoviesByTitle(session.searchValue, pageNumber))
      setLoading(false)
    }
  }

  return (
    <section>
      {(!mappedMovies || !mappedMovies.length) && (
        <section className='not-found-message-wrapper'>
          <p>No movies found...</p>
        </section>
      )}

      <section className='movies-container'>
        {mappedMovies && mappedMovies.length ? mappedMovies : null}
      </section>

      {loading && <LoadingSpinner asOverlay />}

      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={totalMoviesToDisplay}
        paginate={paginateHandler}
      />
    </section>
  )
}

export default Movies
