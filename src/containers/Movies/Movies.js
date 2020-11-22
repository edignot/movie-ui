import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../actions/movies'
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
    const fetchMovies = async () => {
      setLoading(true)
      await dispatch(getMovies(1))
      setLoading(false)
    }
    fetchMovies()
  }, [dispatch])

  const paginateHandler = (pageNumber) => {
    dispatch(setCurrentPageNumber(pageNumber))
  }

  // filters movies when search is applied
  const filteredMovies = null

  const moviesToDisplay = movies

  const totalMoviesToDisplay = moviesToDisplay.length
    ? moviesToDisplay[0].total_results
    : 0

  const mappedMovies = []

  return (
    <section className='movies-pagination-container'>
      <section className='restaurants-container'>
        {mappedMovies.length ? (
          mappedMovies
        ) : (
          <p>No movies matching search result found...</p>
        )}
      </section>

      {/* <Pagination /> */}
      {loading && <LoadingSpinner asOverlay />}
      {/* update pagination values */}
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={totalMoviesToDisplay}
        paginate={paginateHandler}
      />
    </section>
  )
}

export default Movies
