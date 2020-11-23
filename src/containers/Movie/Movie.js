import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSelectedMovieDetails,
  clearSelectedMovie,
} from '../../actions/session'
import { upVoteOrDownVoteMovie } from '../../actions/database'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import Modal from '../../components/Modal/Modal'
import './Movie.css'

const Movie = ({ movie }) => {
  const dispatch = useDispatch()
  const session = useSelector((store) => store.session)

  const {
    id,
    title,
    poster_path,
    backdrop_path,
    release_date,
    original_language,
    adult,
    overview,
    media_type,
  } = movie

  const {
    genres,
    homepage,
    production_companies,
    production_countries,
    runtime,
  } = session.selectedMovie

  const [displayMovieInfo, setDisplayMovieInfo] = useState(false)

  const handleDisplayMovieInfo = () => {
    dispatch(getSelectedMovieDetails(id))
    setDisplayMovieInfo(true)
  }

  const handleCloseMovieInfo = () => {
    dispatch(clearSelectedMovie())
    setDisplayMovieInfo(false)
  }

  const handleVote = (vote) => {
    dispatch(upVoteOrDownVoteMovie(id, title, poster_path, vote))
  }

  return (
    <>
      <section className='movie-container'>
        <FaThumbsDown
          className='up-vote-icon'
          onClick={() => handleVote('down')}
        />
        <FaThumbsUp
          className='down-vote-icon'
          onClick={() => handleVote('up')}
        />

        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className='movie-image'
          alt={title}
          onClick={handleDisplayMovieInfo}
        />
      </section>
      <Modal show={displayMovieInfo}>
        <IoIosClose
          className='close-modal-icon'
          onClick={handleCloseMovieInfo}
        />
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
        <p>{title}</p>
        <p>{id}</p>
        <FaThumbsDown
          className='up-vote-icon-modal'
          onClick={() => handleVote('down')}
        />
        <FaThumbsUp
          className='down-vote-icon-modal'
          onClick={() => handleVote('up')}
        />
      </Modal>
    </>
  )
}

export default Movie
