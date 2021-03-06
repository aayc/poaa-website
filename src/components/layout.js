/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        {/*<div className="space-background w-screen" style={{height: "100vh"}}></div>*/}
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </div>

      <footer className="pb-4">
        <center>
        <a className="header-link" style={{fontSize: 12}}>Per Origami Ad Astra © {new Date().getFullYear()}</a>
        </center>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
