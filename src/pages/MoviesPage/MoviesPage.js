import React from 'react'
import Movies from '../../containers/Movies/Movies'
import Form from '../../containers/Form/Form'
import './MoviesPage.css'

const MoviesPage = () => {
  return (
    <section className='movies-page-container'>
      <Form />
      <Movies />
    </section>
  )
}

export default MoviesPage
