import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearSearch,
  clearVoted,
  selectVoted,
  searchMoviesByTitle,
} from '../../actions/session'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { IoIosClose } from 'react-icons/io'
import './Form.css'

const Form = () => {
  const dispatch = useDispatch()
  const session = useSelector((store) => store.session)
  const database = useSelector((store) => store.database)

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    searchValue === '' && dispatch(clearSearch())
  }, [searchValue])

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    e.key === 'Enter' && searchHandler()
  }

  const searchHandler = () => {
    dispatch(clearVoted())
    dispatch(searchMoviesByTitle(searchValue, 1))
  }

  const clearSearchHandler = () => {
    dispatch(clearSearch())
    setSearchValue('')
  }

  const votedHandler = () => {
    dispatch(clearSearch())
    dispatch(selectVoted())
    setSearchValue('')
  }

  return (
    <>
      <section className='search-input-voted-wrapper'>
        <section className='search-input-wrapper'>
          <label for='search-by-movie-title' className='label'>Search by movie title</label>
          <input
            name='Search by Movie Title'
            id='search-by-movie-title'
            type='text'
            placeholder='Search by Movie Title'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={searchValue}
            className='search-input'
            data-testid='search-input'
          />
          <button onClick={searchHandler} className='search-button'>
            <p className='search-button-text'>Search</p>
            <BiSearch />
          </button>
        </section>
        <section className='search-input-wrapper'>
          <button onClick={votedHandler} className='search-button'>
            <FaThumbsDown /> Voted Movies <FaThumbsUp />
          </button>
        </section>
      </section>

      <section className='search-value-container'>
        <p className='search-value'>
          {session.searchApplied
            ? `${session.searchValue.toLowerCase()} | ${
                session.searchedMovies[0].total_results
              } movies | ${session.searchedMovies[0].total_pages} ${
                session.searchedMovies[0].total_pages > 1 ? 'pages' : 'page'
              }`
            : session.votedApplied
            ? `voted movies | ${database.length} movies | ${Math.ceil(
                database.length / 20,
              )} ${Math.ceil(database.length / 20) > 1 ? 'pages' : 'page'}`
            : `trending movies`}
        </p>
        {session.searchApplied && (
          <section className='search-value-button-wrapper'>
            <IoIosClose
              className='search-value-button'
              onClick={clearSearchHandler}
            />
          </section>
        )}
      </section>
    </>
  )
}

export default Form
