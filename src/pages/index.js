import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "../components/box"
import Excerpt from "../components/excerpt"
import Adspot from "../components/adspot"
import RightSideBarLayout from "../components/layouts/right-sidebar-layout"
import MainContent from "../components/layouts/main-content"
import SideBar from "../components/layouts/sidebar"

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
        <Box theme="hero">
          <h1>{siteMetadata.title}</h1>
          <p>{siteMetadata.description}</p>
        </Box>
        <Box>
          <RightSideBarLayout>
            <MainContent>
              {posts.map(({ node }) => {
                return (
                  <Excerpt key={node.fields.slug} type="blog" node={node} />
                )
              })}
            </MainContent>
            <SideBar>
              <Adspot slug="sidebar-unit" />
            </SideBar>
          </RightSideBarLayout>
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
