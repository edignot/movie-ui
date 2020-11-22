import React, { useEffect } from 'react'
import { getMovies } from './actions/movies'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = async () => {
      await dispatch(getMovies(1))
    }
    fetchMovies()
  }, [dispatch])

  return <div>Hi</div>
}

export default App
