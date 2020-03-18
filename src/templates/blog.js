import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ButtonLink from "../components/ui/button-link"
import About from "../components/content/about"

import Constrain from "../components/constrain"
import Box from "../components/box"
import RightSideBarLayout from "../components/layouts/right-sidebar-layout"
import MainContent from "../components/layouts/main-content"
import SideBar from "../components/layouts/sidebar"
import ContentHeader from "../components/content-header"
import Excerpt from "../components/excerpt"
import Pagination from "../components/ui/paginaton"

class BlogTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const posts = this.props.data.allMarkdownRemark.edges
    const url = this.props.location.href

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
        <SEO title={siteTitle} description={siteDescription} url={url} />
        <Constrain>
          <Box>
            <ContentHeader>
              <h1
                style={{
                  marginTop: 0,
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

                <Pagination>
                  {!isFirst && (
                    <ButtonLink
                      to={prevPage}
                      className="pagination-link"
                      rel="prev"
                    >
                      ← Newer Posts
                    </ButtonLink>
                  )}
                  {!isLast && (
                    <ButtonLink
                      to={nextPage}
                      className="pagination-link"
                      rel="next"
                    >
                      Older Posts →
                    </ButtonLink>
                  )}
                </Pagination>
              </MainContent>
              <SideBar>
                <About />
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
                fluid(maxWidth: 700, maxHeight: 465, cropFocus: CENTER) {
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
