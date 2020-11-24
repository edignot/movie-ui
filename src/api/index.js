import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export const fetchTrendingMovies = (page) =>
  axios.get(`${BASE_URL}/trending/${page}`)

export const fetchMoviesByTitle = (searchValue, page) =>
  axios.get(`${BASE_URL}/${searchValue}/${page}`)

export const fetchSelectedMovieDetails = (id) => axios.get(`${BASE_URL}/${id}`)

export const postUpVoteOrDownVoteMovie = (
  id,
  title,
  posterPath,
  vote,
  backdropPath,
  releaseDate,
  originalLanguage,
  overview,
  mediaType,
  name,
) =>
  axios.post(`${BASE_URL}/${id}`, {
    title,
    posterPath,
    vote,
    backdropPath,
    releaseDate,
    originalLanguage,
    overview,
    mediaType,
    name,
  })

export const fetchAllVotedMovies = () => axios.get(`${BASE_URL}/voted`)
