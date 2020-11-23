import React, { useState } from 'react'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import Modal from '../../components/Modal/Modal'
import './Movie.css'

const Movie = ({ movie }) => {
  const { id, title, poster_path, backdrop_path } = movie

  const [displayMovieInfo, setDisplayMovieInfo] = useState(false)

  const handleDisplayMovieInfo = () => {
    setDisplayMovieInfo(true)
  }

  return (
    <>
      <section className='movie-container'>
        <FaThumbsDown className='up-vote-icon' />
        <FaThumbsUp className='down-vote-icon' />

        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className='movie-image'
          alt={title}
          onClick={handleDisplayMovieInfo}
        />
      </section>
      <Modal show={displayMovieInfo}>
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
        <p>{title}</p>
      </Modal>
    </>
  )
}

export default Movie
