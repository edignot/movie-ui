import axios from 'axios'

const BASE_URL = 'https://mmoovviieess.herokuapp.com/api/movies'

export const fetchMovies = (page) => axios.get(`${BASE_URL}/trending/${page}`)
