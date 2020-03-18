import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "../components/content/about"

import Constrain from "../components/constrain"
import Box from "../components/box"
import RightSideBarLayout from "../components/layouts/right-sidebar-layout"
import MainContent from "../components/layouts/main-content"
import SideBar from "../components/layouts/sidebar"
import ContentHeader from "../components/content-header"
import Excerpt from "../components/excerpt"

class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const url = this.props.location.href
    const { edges, totalCount } = this.props.data.allMarkdownRemark
    const categoryHeader = `${totalCount} Post${
      totalCount === 1 ? "" : "s"
    } Category with "${category}"`

    return (
      <Layout location={this.props.location}>
        <SEO title={siteTitle} description={siteDescription} url={url} />
        <Constrain>
          <Box>
            <ContentHeader>
              <h1
                style={{
                  marginTop: 0,
                }}
              >
                {categoryHeader}
              </h1>
              <p>
                Click this link to view{" "}
                <Link to="/categories">all categories</Link>.
              </p>
            </ContentHeader>
            <RightSideBarLayout>
              <MainContent>
                {edges.map(({ node }) => {
                  return (
                    <Excerpt key={node.fields.slug} type="blog" node={node} />
                  )
                })}
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
            date
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
