import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingMovies } from '../../actions/movies'
import Movie from '../Movie/Movie'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import Pagination from '../Pagination/Pagination'
import './Movies.css'
import {
  setCurrentPageNumber,
  searchMoviesByTitle,
} from '../../actions/session'

const Movies = () => {
  const dispatch = useDispatch()

  const movies = useSelector((store) => store.movies)
  const session = useSelector((store) => store.session)

  const [loading, setLoading] = useState(false)
  const [moviesPerPage] = useState(20)

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true)
      // check if already exists don't fetch
      !movies.length && (await dispatch(getTrendingMovies(1)))
      setLoading(false)
    }
    fetchTrendingMovies()
  }, [])

  const searchedMovies = session.searchedMovies

  const moviesToDisplay = searchedMovies.length ? searchedMovies : movies

  const totalMoviesToDisplay = moviesToDisplay.length
    ? moviesToDisplay[0].total_results
    : 0

  const moviesToDisplayCurrentPage = moviesToDisplay.find(
    (moviesPage) => moviesPage.page === session.currentPageNumber,
  )

  const mappedMovies =
    moviesToDisplayCurrentPage &&
    moviesToDisplayCurrentPage.results.map((movie) => (
      <Movie key={movie.id} movie={movie} />
    ))

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
    <>
      <section>
        {(!mappedMovies || !mappedMovies.length) && <p>No movies found...</p>}
      </section>

      <section className='movies-container'>
        {mappedMovies && mappedMovies.length && mappedMovies}
      </section>

      {loading && <LoadingSpinner asOverlay />}

      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={totalMoviesToDisplay}
        paginate={paginateHandler}
      />
    </>
  )
}

export default Movies
