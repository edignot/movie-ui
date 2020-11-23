import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../containers/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      <section className='layout-children-container'>{children}</section>
      <Footer />
    </section>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
