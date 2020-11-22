import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import {
  BiChevronLeft,
  BiChevronsLeft,
  BiChevronRight,
  BiChevronsRight,
} from 'react-icons/bi'
import './Pagination.css'

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
  const session = useSelector((store) => store.session)

  const currentPageNumber = session.currentPageNumber

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i)
  }

  // const currentPageNumberIndex = pageNumbers.indexOf(currentPageNumber)

  // const pagesDisplayStartIndex =
  //   currentPageNumberIndex > 1
  //     ? currentPageNumberIndex - 2
  //     : currentPageNumberIndex > 0
  //     ? currentPageNumberIndex - 1
  //     : 0

  // const pagesDisplayEndIndex =
  //   currentPageNumberIndex < pageNumbers.length + 1
  //     ? currentPageNumberIndex + 2
  //     : currentPageNumberIndex < pageNumbers.length
  //     ? currentPageNumberIndex + 1
  //     : pageNumbers.length - 1

  // const pageNumbersToDisplay = pageNumbers.slice(
  //   pagesDisplayStartIndex,
  //   pagesDisplayEndIndex,
  // )

  const pageNumberHandler = (number) => {
    paginate(number)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ul className='pages-wrapper'>
      <li
        className='page-item-icon'
        onClick={() => pageNumberHandler(pageNumbers[0])}
      >
        <BiChevronsLeft />
      </li>
      <li
        className='page-item-icon'
        onClick={() =>
          pageNumberHandler(currentPageNumber > 1 ? currentPageNumber - 1 : 1)
        }
      >
        <BiChevronLeft />
      </li>

      {/* {pageNumbersToDisplay.map((number) => (
        <li
          key={number}
          className='page-item'
          onClick={() => pageNumberHandler(number)}
        >
          <p>{number}</p>
        </li>
      ))} */}

      <li
        key={currentPageNumber}
        className='page-item'
        onClick={() => pageNumberHandler(currentPageNumber)}
      >
        <p>{currentPageNumber}</p>
      </li>

      <li
        className='page-item-icon'
        onClick={() =>
          pageNumberHandler(
            pageNumbers.length > currentPageNumber
              ? currentPageNumber + 1
              : pageNumbers[pageNumbers.length - 1],
          )
        }
      >
        <BiChevronRight />
      </li>
      <li
        className='page-item-icon'
        onClick={() => pageNumberHandler(pageNumbers[pageNumbers.length - 1])}
      >
        <BiChevronsRight />
      </li>
    </ul>
  )
}

export default Pagination

Pagination.propTypes = {
  restaurantsPerPage: PropTypes.number,
  totalRestaurants: PropTypes.number,
  paginate: PropTypes.func,
}
