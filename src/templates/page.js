import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

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

class PageTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const url = this.props.location.href
    const dateModified = post.parent.mtime
    const datePublished = post.frontmatter.date
    const schemaType = post.frontmatter.schemaType

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          dateModified={dateModified}
          datePublished={datePublished}
          schemaType={schemaType}
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
                <MDXRenderer>{post.body}</MDXRenderer>
                <hr
                  style={{
                    marginBottom: rhythm(1),
                  }}
                />

                <Bio />
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

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
        date(formatString: "YYYY-MM-DD")
        schemaType
      }
      parent {
        ... on File {
          mtime(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`
