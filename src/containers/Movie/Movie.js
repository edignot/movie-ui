import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSelectedMovieDetails,
  clearSelectedMovie,
} from '../../actions/session'
import { upVoteOrDownVoteMovie } from '../../actions/database'
import { convertMinutes } from '../../utils/conversions'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import Modal from '../../components/Modal/Modal'
import './Movie.css'

const Movie = ({ movie }) => {
  const dispatch = useDispatch()
  const session = useSelector((store) => store.session)

  const [displayMovieInfo, setDisplayMovieInfo] = useState(false)

  const {
    id,
    title,
    poster_path,
    backdrop_path,
    release_date,
    original_language,
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

  const mappedProductionCompanies = production_companies
    ? production_companies.map((company) => (
        <li key={company.id}>{company.name}</li>
      ))
    : []

  const mappedProductionCountries = production_countries
    ? production_countries.map((country) => (
        <li key={country.iso_3166_1}>{country.name}</li>
      ))
    : []

  const duration = convertMinutes(runtime)

  const handleDisplayMovieInfo = async () => {
    await dispatch(getSelectedMovieDetails(id))
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

        <h2>{title || name}</h2>
        <p>{runtime && duration}</p>
        <p>{original_language}</p>
        <p>{media_type}</p>

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

        <p>{overview}</p>

        {homepage && <a href={homepage}>Visit Official Website</a>}

        {mappedProductionCompanies.length && (
          <section>
            <p>Production Companies:</p>
            <ul>{mappedProductionCompanies}</ul>
          </section>
        )}

        {mappedProductionCompanies.length && (
          <section>
            <p>Production Countries:</p>
            <ul>{mappedProductionCountries}</ul>
          </section>
        )}
      </Modal>
    </>
  )
}

export default Movie
