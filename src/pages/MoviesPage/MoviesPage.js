import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearSearch } from '../../actions/session'
import Movies from '../../containers/Movies/Movies'
import Form from '../../containers/Form/Form'
import { IoIosClose } from 'react-icons/io'
import './MoviesPage.css'

const MoviesPage = () => {
  const dispatch = useDispatch()
  const session = useSelector((store) => store.session)

  return (
    <section className='movies-page-container'>
      <Form />
      {session.searchApplied && (
        <section className='search-value-container'>
          <p className='search-value'>{session.searchValue}</p>
          <section className='search-value-button-wrapper'>
            <IoIosClose
              className='search-value-button'
              onClick={() => dispatch(clearSearch())}
            />
          </section>
        </section>
      )}
      {!session.searchApplied && <p>Trending movies</p>}
      <Movies />
    </section>
  )
}

export default MoviesPage
