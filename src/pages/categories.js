import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class CategoriesPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const { group } = this.props.data.allMarkdownRemark

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
          Categories
        </h1>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <div>
        <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/categories/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
        </div>
      </Layout>
    )
  }
}

export default CategoriesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
  `
