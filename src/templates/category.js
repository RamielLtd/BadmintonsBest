import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const { edges, totalCount } = this.props.data.allMarkdownRemark
    const categoryHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
      } category with "${category}"`

    return (
      <Layout location={this.props.location}>
        <SEO
          title={siteTitle}
          description={siteDescription}
        />
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: 0,
          }}
        >
          {categoryHeader}
        </h1>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <div>
          <ul>
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              return (
                <li key={slug}>
                  <Link to={slug}>{title}</Link>
                </li>
              )
            })}
          </ul>
          {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
          <Link to="/categories">All Categories</Link>
        </div>
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query BlogPostByCategory($category: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`