import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearSearch } from '../../actions/session'
import ScrollHide from '../../components/ScrollHide/ScrollHide'
import { FcFilmReel } from 'react-icons/fc'
import './Header.css'

const Header = () => {
  const dispatch = useDispatch()

  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const MINIMUM_SCROLL = 80
  const TIMEOUT_DELAY = 400

  ScrollHide((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowShadow(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const shadowStyle = shouldShowShadow ? 'shadow' : ''
  const hiddenStyle = shouldHideHeader ? 'hidden' : ''

  return (
    <header className={`header ${shadowStyle} ${hiddenStyle}`}>
      <section className='header-logo-wrapper'>
        <FcFilmReel className='logo-icon-left' />
        <h1
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            dispatch(clearSearch())
          }}
        >
          Movie Search Engine
        </h1>
        <FcFilmReel className='logo-icon-right' />
      </section>
    </header>
  )
}

export default Header
