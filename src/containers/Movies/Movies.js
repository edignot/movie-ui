import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingMovies } from '../../actions/movies'
import Movie from '../Movie/Movie'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import Pagination from '../Pagination/Pagination'
import './Movies.css'
import { setCurrentPageNumber } from '../../actions/session'

const Movies = () => {
  const dispatch = useDispatch()

  const movies = useSelector((store) => store.movies)
  const session = useSelector((store) => store.session)

  const [loading, setLoading] = useState(false)
  const [moviesPerPage] = useState(20)

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true)
      !movies.length && (await dispatch(getTrendingMovies(1)))
      setLoading(false)
    }
    fetchTrendingMovies()
  }, [dispatch])

  const paginateHandler = (pageNumber) => {
    dispatch(setCurrentPageNumber(pageNumber))
  }

  // 1 ADD SEARCH FUNCTIONALITY
  const searchedMovies = null

  const moviesToDisplay = searchedMovies || movies
  console.log('MOVIES TO DISPLAY', moviesToDisplay)

  const totalMoviesToDisplay = moviesToDisplay.length
    ? moviesToDisplay[0].total_results
    : 0
  console.log('TOTAL MOVIES TO DISPLAY', totalMoviesToDisplay)

  const moviesToDisplayCurrentPage = moviesToDisplay.find(
    (moviesPage) => moviesPage.page === session.currentPageNumber,
  )
  console.log('MOVIES TO DISPLAY CURRENT PAGE', moviesToDisplayCurrentPage)

  const mappedMovies =
    moviesToDisplayCurrentPage &&
    moviesToDisplayCurrentPage.results.map((movie) => (
      <Movie key={movie.id} movie={movie} />
    ))

  return (
    <section className='movies-pagination-container'>
      <section className='restaurants-container'>
        {mappedMovies && mappedMovies.length ? (
          mappedMovies
        ) : (
          <p>No movies matching search result found...</p>
        )}
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
