import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
