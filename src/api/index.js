import axios from 'axios'

const BASE_URL = 'https://mmoovviieess.herokuapp.com/api/movies'

export const fetchTrendingMovies = (page) =>
  axios.get(`${BASE_URL}/trending/${page}`)

export const fetchMoviesByTitle = (searchValue, page) =>
  axios.get(`${BASE_URL}/${searchValue}/${page}`)

export const fetchSelectedMovieDetails = (id) => axios.get(`${BASE_URL}/${id}`)
