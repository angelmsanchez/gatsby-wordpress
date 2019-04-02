import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'

import Header from "./header"
import Footer from "./footer"

import "./layout.scss"

const Layout = ({ children, data }) => (
  <div id="tokiota-web">
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        overflowY: `auto`,
        padding: `3rem`,
        marginTop: '75px',
        height: '100%'
      }}
    >
      <main>{children}</main>
    </div>
    <Footer></Footer>
  </div>)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
