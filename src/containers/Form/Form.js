import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiSearch } from 'react-icons/bi'
import './Form.css'

const Form = () => {
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')

  // useEffect(() => {
  //   searchValue === '' && dispatch(clearSearch())
  // }, [searchValue])

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    e.key === 'Enter' && searchHandler()
  }

  const searchHandler = () => {
    alert('handle change')
  }

  return (
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
  )
}

export default Form
