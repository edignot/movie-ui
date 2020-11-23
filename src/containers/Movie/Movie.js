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
    name,
    up_vote,
    down_vote,
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
    dispatch(upVoteOrDownVoteMovie(id, title || name, poster_path, vote))
  }

  return (
    <>
      <section className='movie-container'>
        <section className='up-vote-icon-wrapper'>
          <FaThumbsDown onClick={() => handleVote('down')} />
          <p className='vote-count'>{down_vote || 0}</p>
        </section>

        <section className='down-vote-icon-wrapper'>
          <FaThumbsUp onClick={() => handleVote('up')} />
          <p className='vote-count'>{up_vote || 0}</p>
        </section>

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

        <h2>{title}</h2>

        <section className='backdrop-container'>
          <section className='up-vote-icon-wrapper'>
            <FaThumbsDown onClick={() => handleVote('down')} />
            <p className='vote-count'>{down_vote || 0}</p>
          </section>

          <section className='down-vote-icon-wrapper'>
            <FaThumbsUp onClick={() => handleVote('up')} />
            <p className='vote-count'>{up_vote || 0}</p>
          </section>

          <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
        </section>

        <p>Release {release_date}</p>
      </Modal>
    </>
  )
}

export default Movie
