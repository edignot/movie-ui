import React from 'react'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import './Movie.css'

const Movie = ({ movie }) => {
  const { id, title, poster_path } = movie
  return (
    <section className='movie-container'>
      <FaThumbsDown className='up-vote-icon' />
      <FaThumbsUp className='down-vote-icon' />

      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        className='movie-image'
        alt={title}
      />
    </section>
  )
}

export default Movie
