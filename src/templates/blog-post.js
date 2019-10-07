import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import About from "../components/content/about"

import Constrain from "../components/constrain"
import Box from "../components/box"
import RightSideBarLayout from "../components/layouts/right-sidebar-layout"
import MainContent from "../components/layouts/main-content"
import SideBar from "../components/layouts/sidebar"
import ContentHeader from "../components/content-header"
import Adspot from "../components/adspot"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext
    const featuredImgFluid = post.frontmatter.featured
      ? post.frontmatter.featured.childImageSharp.fluid
      : false

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Constrain>
          <Box>
            <ContentHeader>
              <h1
                style={{
                  marginTop: 0,
                }}
              >
                {post.frontmatter.title}
              </h1>
            </ContentHeader>
            <RightSideBarLayout>
              <MainContent>
                {featuredImgFluid && (
                  <Img
                    style={{
                      marginBottom: rhythm(1),
                    }}
                    fluid={featuredImgFluid}
                  />
                )}

                <Adspot slug="in-content-ad-unit" />

                <div dangerouslySetInnerHTML={{ __html: post.html }} />

                <hr
                  style={{
                    marginBottom: rhythm(1),
                  }}
                />

                <ul
                  style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                  }}
                >
                  <li>
                    {previous && (
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </li>
                </ul>

                <hr
                  style={{
                    marginBottom: rhythm(1),
                  }}
                />

                <Bio />
              </MainContent>
              <SideBar>
                <Adspot slug="sidebar-unit" />
                <About />
              </SideBar>
            </RightSideBarLayout>
          </Box>
        </Constrain>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featured {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
