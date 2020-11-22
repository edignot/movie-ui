import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../actions/movies'

const Movies = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = async () => {
      await dispatch(getMovies(1))
    }
    fetchMovies()
  }, [dispatch])

  return <div>Movies</div>
}

export default Movies
