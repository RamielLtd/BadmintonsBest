import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Disqus } from "gatsby-plugin-disqus"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import About from "../components/content/about"
import Bio from "../components/bio"
import RelatedContent from "../components/content/related-content"

import Constrain from "../components/constrain"
import Box from "../components/box"
import RightSideBarLayout from "../components/layouts/right-sidebar-layout"
import MainContent from "../components/layouts/main-content"
import SideBar from "../components/layouts/sidebar"
import ContentHeader from "../components/content-header"
import Adspot from "../components/adspot"

class BlogPostTemplate extends React.Component {
  render() {
    const siteUrl = this.props.data.site.siteMetadata.siteUrl
    const post = this.props.data.markdownRemark
    const slug = post.fields.slug
    const categories = post.frontmatter.categories
    const featuredImgFluid = post.frontmatter.featured
      ? post.frontmatter.featured.childImageSharp.fluid
      : false
    const disqusConfig = {
      url: `${siteUrl + this.props.location.pathname}`,
      identifier: post.id,
      title: post.title,
    }

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
                    marginTop: rhythm(1.5),
                    marginBottom: rhythm(1.5),
                  }}
                />
                <Bio />
                {categories.length > 0 && (
                  <>
                    <hr
                      style={{
                        marginTop: rhythm(1.5),
                        marginBottom: rhythm(1.5),
                      }}
                    />
                    <RelatedContent
                      categories={categories}
                      currentArticleSlug={slug}
                    />
                  </>
                )}
                <hr
                  style={{
                    marginTop: rhythm(1.5),
                    marginBottom: rhythm(1.5),
                  }}
                />
                <Disqus config={disqusConfig} />
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
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
        featured {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
