import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Movies from '../../containers/Movies/Movies'
import Form from '../../containers/Form/Form'
import './MoviesPage.css'

const MoviesPage = () => {
  const dispatch = useDispatch()
  const session = useSelector((store) => store.session)

  return (
    <section className='movies-page-container'>
      <Form />
      <Movies />
    </section>
  )
}

export default MoviesPage
