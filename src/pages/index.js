import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "../components/box"
import Excerpt from "../components/excerpt"

class BlogIndex extends React.Component {
  render() {
    const {
      data,
      data: {
        site: { siteMetadata },
      },
    } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
        <SEO title={`${siteMetadata.description}`} />
        <Box>Howdy</Box>
        <Box>
          {posts.map(({ node }) => {
            return <Excerpt key={node.fields.slug} type="blog" node={node} />
          })}
        </Box>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featured {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
