import React from "react"
import PropTypes from "prop-types"
// import { graphql } from "gatsby"
import Helmet from 'react-helmet'

import Header from "../components/header"
import Menu from "../components/menu"

import "./layout.css"

const Layout = ({ children, data }) => (
  <div>
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
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <Menu />
      <main>{children}</main>
      <footer></footer>
    </div>
  </div>)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// export const pageQuery = graphql`
//   query LayoutQuery {
//     allWordpressWpApiMenusMenusItems {
//       edges {
//         node {
//           id
//           name
//           items {
//             title
//             object_slug
//             order
//           }
//         }
//       }
//     }
//   }
// `
