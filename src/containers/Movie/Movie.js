import React, { useState } from 'react'
import PropTypes from 'prop-types'
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
import { DEFAULT_MOVIE_POSTER } from '../../utils/constants'

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
        <li key={company.id} className='company-item'>
          {company.name}
        </li>
      ))
    : []

  const mappedProductionCountries = production_countries
    ? production_countries.map((country) => (
        <li key={country.iso_3166_1} className='country-item'>
          {country.name}
        </li>
      ))
    : []

  const duration = runtime > 0 ? convertMinutes(runtime) : null

  const handleDisplayMovieInfo = async () => {
    await dispatch(getSelectedMovieDetails(id))
    setDisplayMovieInfo(true)
  }

  const handleCloseMovieInfo = () => {
    dispatch(clearSelectedMovie())
    setDisplayMovieInfo(false)
  }

  const handleVote = (vote) => {
    dispatch(
      upVoteOrDownVoteMovie(
        id,
        title,
        poster_path,
        vote,
        backdrop_path,
        release_date,
        original_language,
        overview,
        media_type,
        name,
      ),
    )
  }

  const addDefaultImageSrc = (e) => {
    e.target.src = DEFAULT_MOVIE_POSTER
  }

  return (
    <>
      <section className='movie-container'>
        <section
          className='up-vote-icon-wrapper'
          onClick={() => handleVote('down')}
        >
          <FaThumbsDown />
          <p className='vote-count'>{down_vote || 0}</p>
        </section>

        <section
          className='down-vote-icon-wrapper'
          onClick={() => handleVote('up')}
        >
          <FaThumbsUp />
          <p className='vote-count'>{up_vote || 0}</p>
        </section>

        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          onError={addDefaultImageSrc}
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
        <section className='movie-details-container'>
          {(title || name) && <h2>{title || name}</h2>}

          <section className='movie-duration-language-type-wrapper'>
            {duration && <p>{duration}</p>}
            {duration && original_language && <p>|</p>}
            {original_language && <p>{original_language}</p>}
            {original_language && media_type && <p>|</p>}
            <p>{media_type && media_type}</p>
          </section>

          <section className='backdrop-container'>
            <section
              className='up-vote-icon-wrapper'
              onClick={() => handleVote('down')}
            >
              <FaThumbsDown />
              <p className='vote-count'>{down_vote || 0}</p>
            </section>
            <section
              className='down-vote-icon-wrapper'
              onClick={() => handleVote('up')}
            >
              <FaThumbsUp />
              <p className='vote-count'>{up_vote || 0}</p>
            </section>
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              onError={addDefaultImageSrc}
              className='backdrop-image'
            />
          </section>

          <section className='release-date-website-wrapper'>
            {release_date && <p>release date {release_date}</p>}
            {homepage && <a href={homepage}>Visit Official Website</a>}
          </section>

          {overview && <p className='movie-description'>{overview}</p>}

          {mappedProductionCompanies.length ? (
            <section className='companies-countries-wrapper'>
              <p>Production Companies:</p>
              <ul className='companies-list'>{mappedProductionCompanies}</ul>
            </section>
          ) : null}
          {mappedProductionCompanies.length ? (
            <section className='companies-countries-wrapper'>
              <p>Production Countries:</p>
              <ul className='countries-list'>{mappedProductionCountries}</ul>
            </section>
          ) : null}
        </section>
      </Modal>
    </>
  )
}

export default Movie

Movie.propTypes = {
  movie: PropTypes.object,
}
