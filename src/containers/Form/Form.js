import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearSearch, searchMoviesByTitle } from '../../actions/session'
import { BiSearch } from 'react-icons/bi'
import { IoIosClose } from 'react-icons/io'
import './Form.css'

const Form = () => {
  const dispatch = useDispatch()
  const session = useSelector((store) => store.session)

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
    dispatch(searchMoviesByTitle(searchValue, 1))
  }

  const clearSearchHandler = () => {
    dispatch(clearSearch())
    setSearchValue('')
  }

  return (
    <>
      <section className='search-input-wrapper'>
        <input
          name='Search by Movie Title'
          type='text'
          placeholder='Search by Movie Title'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={searchValue}
          className='search-input'
          data-testid='search-input'
        />
        <button onClick={searchHandler} className='search-button'>
          <BiSearch />
        </button>
      </section>
      <section className='search-value-container'>
        <p className='search-value'>
          {session.searchApplied
            ? `${session.searchValue.toLowerCase()} | ${
                session.searchedMovies[0].total_results
              } movies | ${session.searchedMovies[0].total_pages} pages`
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
