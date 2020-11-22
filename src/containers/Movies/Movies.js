import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../actions/movies'
import Movie from '../Movie/Movie'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import Pagination from '../Pagination/Pagination'
import './Movies.css'

const Movies = () => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      await dispatch(getMovies(1))
      setLoading(false)
    }
    fetchMovies()
  }, [dispatch])

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
        moviesPerPage={20}
        totalMovies={70}
        // paginate={paginateHandler}
      />
    </section>
  )
}

export default Movies
