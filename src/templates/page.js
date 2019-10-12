import React from "react"
import { graphql } from "gatsby"

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

class PageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const url = this.props.location.href
    const dateModified = post.parent.mtime
    const datePublished = post.frontmatter.date

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          dateModified={dateModified}
          datePublished={datePublished}
          url={url}
        />
        <Constrain>
          <Box>
            <ContentHeader>
              <h1
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                {post.frontmatter.title}
              </h1>
            </ContentHeader>
            <RightSideBarLayout>
              <MainContent>
                <Adspot slug="in-content-ad-unit" />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
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

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
        description
        date(formatString: "YYYY-MM-DD")
      }
      parent {
        ... on File {
          mtime(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`
