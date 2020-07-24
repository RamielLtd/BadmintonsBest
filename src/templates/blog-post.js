import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import { rhythm } from "src/utils/typography"

import About from "src/components/content/about"
import Bio from "src/components/bio"
import RelatedContent from "src/components/content/related-content"

import Attribution from "src/components/attribution"
import BlogPostSignup from "src/components/embeds/blogpost-signup"
import Box from "src/components/box"
import Constrain from "src/components/constrain"
import RightSideBarLayout from "src/components/layouts/right-sidebar-layout"
import MainContent from "src/components/layouts/main-content"
import SideBar from "src/components/layouts/sidebar"
import ContentHeader from "src/components/content-header"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const slug = post.fields.slug
    const url = this.props.location.href
    const categories = post.frontmatter.categories
    const dateModified = post.parent.mtime
    const datePublished = post.frontmatter.date
    const featuredImgAlt = post.frontmatter.featuredalt
    const featuredImgAttribution = post.frontmatter.featured_attribute
    const featuredImgFluid = post.frontmatter.featured
      ? post.frontmatter.featured.childImageSharp.fluid
      : null
    const featuredImgFluidSocial = post.frontmatter.featuredSocial
      ? post.frontmatter.featuredSocial.childImageSharp.fluid
      : null

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          dateModified={dateModified}
          datePublished={datePublished}
          image={featuredImgFluidSocial}
          schemaType="BlogPosting"
          url={url}
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
                  <figure
                    style={{
                      marginBottom: rhythm(1),
                    }}
                  >
                    <Img
                      style={{
                        marginBottom: rhythm(0.25),
                      }}
                      fluid={featuredImgFluid}
                      alt={featuredImgAlt}
                    />
                    {featuredImgAttribution && (
                      <Attribution content={featuredImgAttribution} />
                    )}
                  </figure>
                )}
                <MDXRenderer>{post.body}</MDXRenderer>
                <hr
                  style={{
                    marginTop: rhythm(1.5),
                    marginBottom: rhythm(1.5),
                  }}
                />
                <BlogPostSignup />
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
        featuredalt
        featured_attribute
        featured {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredSocial: featured {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 675, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      parent {
        ... on File {
          mtime(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`
