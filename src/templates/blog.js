import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import Constrain from "../components/constrain"
import Box from "../components/box"
import RightSideBarLayout from "../components/layouts/right-sidebar-layout"
import MainContent from "../components/layouts/main-content"
import SideBar from "../components/layouts/sidebar"
import ContentHeader from "../components/content-header"
import Adspot from "../components/adspot"
import Excerpt from "../components/excerpt"

class BlogTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const posts = this.props.data.allMarkdownRemark.edges

    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1
        ? "/blog"
        : `/blog/page/${(currentPage - 1).toString()}`
    const nextPage = `/blog/page/${(currentPage + 1).toString()}`

    return (
      <Layout location={this.props.location}>
        <SEO title={siteTitle} description={siteDescription} />
        <Constrain>
          <Box>
            <ContentHeader>
              <h1
                style={{
                  marginTop: rhythm(1),
                  marginBottom: 0,
                }}
              >
                Blog
              </h1>
            </ContentHeader>
            <RightSideBarLayout>
              <MainContent>
                {posts.map(({ node }) => {
                  return (
                    <Excerpt key={node.fields.slug} type="blog" node={node} />
                  )
                })}

                {!isFirst && (
                  <Link to={prevPage} rel="prev">
                    ← Previous Page
                  </Link>
                )}
                {!isLast && (
                  <Link to={nextPage} rel="next">
                    Next Page →
                  </Link>
                )}
              </MainContent>
              <SideBar>
                <Adspot slug="sidebar-unit" />
              </SideBar>
            </RightSideBarLayout>
          </Box>
        </Constrain>
      </Layout>
    )
  }
}

export default BlogTemplate

export const pageQuery = graphql`
  query Blogs($skip: Int!, $limit: Int!, $type: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: $type } } }
    ) {
      edges {
        node {
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
