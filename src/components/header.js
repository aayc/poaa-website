import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const LatestBlogLink = () => (
    <StaticQuery query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1
        ) {
          edges { node { frontmatter { title date_string path } } }
      }
      }`} render={data => (
        data.allMarkdownRemark.edges.map(edge => {
          return (<a key={edge.node.frontmatter.title}
                     className="header-link floating-outline ml-12"
                     href={edge.node.frontmatter.path}>blog</a>)
        })
      )}/>
)


const Header = ({ siteTitle }) => (
  <header
    style={{
      position: "sticky",
      top: "0",
      zIndex: "100",
      backgroundColor: "white",
    }}
  >
    <div
      className="flex m-auto lg:max-w-screen-lg xl:max-w-screen-xl pt-4 lg:pt-6"
      style={{justifyContent: "space-between"}}
    >
      <div className="flex">
        <a className="header-link floating-outline" href="/#howitworks">logo here</a>
      </div>
      <div className="float-right hidden lg:block">
        <a className="header-link floating-outline mr-4" href="/#about">About</a>
        <a className="header-link floating-outline mr-4" href="/#community">Community</a>
        <a className="header-link floating-outline mr-4" href="/#proposal">Proposal</a>
        <a className="header-link floating-outline"  href="/#contact">Contact</a>
        {/*<LatestBlogLink />*/}
      </div>
    </div>
      <ExpandableNav />
  </header>
)

function ExpandableNav() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div >
    <div className="absolute top-0 right-0 lg:hidden">
      <button className="flex items-center px-3 py-2 mt-2 text-gray-600 " onClick={() => setExpanded(!expanded) }>
        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    {expanded ?
    (<div className="absolute text-right" style={{ backgroundColor: "white", top: 48, right:10}}>
        <a className="header-link floating-outline" href="/#about">About</a>
        <br />
        <a className="header-link floating-outline" href="/#community">Community</a>
        <br />
        <a className="header-link floating-outline" href="/#proposal">Proposal</a>
        <br />
        <a className="header-link floating-outline" href="/#contact">Contact</a>
      </div>)
      : (<div/>)}
    </div>
  );
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
