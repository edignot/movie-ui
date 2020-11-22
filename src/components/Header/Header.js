import React, { useState } from 'react'
import ScrollHide from '../../components/ScrollHide/ScrollHide'
import './Header.css'

const Header = () => {
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
      <h1>Movie Search Engine</h1>
    </header>
  )
}

export default Header
