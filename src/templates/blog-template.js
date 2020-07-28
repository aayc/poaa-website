import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { graphql } from "gatsby"

const PostLinkList = ({posts, title, category}) => {
  return (<><h5 className="text-gray-700 mb-4">{title}</h5>
          {posts.edges.filter(edge => edge.node.frontmatter.category === category).map(edge => {
            return (
              <div className="my-1" key={edge.node.frontmatter.title}>
                <a href={edge.node.frontmatter.path} className="text-gray-600">
                  <p className="text-sm font-semibold floating-outline">{edge.node.frontmatter.title}</p>
                </a>
              </div>)
          })}</>)
}

export default function Template({
  data,
}) {
  const { markdown, posts } = data
  const { frontmatter, html } = markdown
  const fmtHtml = html.replace(/<\/p>/g, "</p><br />").replace(/<\/pre>/g, "</pre><br />")
  const fmtHtml2 = fmtHtml.replace(/<ul/g, "<ul className='list-disc'").replace(/<h3/g, "<br /><h3")
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="absolute pt-16 hidden lg:block" style={{maxWidth: 150}}>
        <PostLinkList title={"Latest Posts"} category={"all"} posts={posts}/>
      </div>
      <div className="min-h-screen flex justify-center">

        <div className="pt-16 w-4xl">
        <div className="block lg:hidden">
          <PostLinkList title={"Latest Posts"} category={"all"} posts={posts}/>
          <br />
    </div>
          <h1 className="text-5xl">{frontmatter.title}</h1>
          <h3 className="text-xl mt-4">{frontmatter.date_string}</h3>
          <div className="max-w-2xl">
            <br />
            <div
              className="pb-16"
              dangerouslySetInnerHTML={{ __html: fmtHtml2 }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdown: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        date_string
        path
        title
        category
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            path
            category
            title
          }
        }
      }
    }
  }
`
