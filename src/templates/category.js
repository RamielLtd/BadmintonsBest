import React from "react"
import { Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Constrain from "../components/constrain"
import Box from "../components/box"
import RightSideBarLayout from "../components/layouts/right-sidebar-layout"
import MainContent from "../components/layouts/main-content"
import SideBar from "../components/layouts/sidebar"
import ContentHeader from "../components/content-header"

class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const { edges, totalCount } = this.props.data.allMarkdownRemark
    const categoryHeader = `${totalCount} Post${
      totalCount === 1 ? "" : "s"
    } Category with "${category}"`

    return (
      <Layout location={this.props.location}>
        <SEO title={siteTitle} description={siteDescription} />
        <Constrain>
          <Box>
            <ContentHeader>
              <h1
                style={{
                  marginTop: rhythm(1),
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
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div key={node.fields.slug}>
                      <h3>
                        <Link
                          style={{ boxShadow: `none` }}
                          to={node.fields.slug}
                        >
                          {title}
                        </Link>
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </div>
                  )
                })}
              </MainContent>
              <SideBar></SideBar>
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
            description
          }
        }
      }
    }
  }
`
