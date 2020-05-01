import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Disqus } from "gatsby-plugin-disqus"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import Attribution from "../components/attribution"
import HeroPillar from "../components/heros/pillar"
import PillarMainContent from "../components/layouts/pillar-main-content"

class PillarTemplate extends React.Component {
  render() {
    const siteUrl = this.props.data.site.siteMetadata.siteUrl
    const post = this.props.data.mdx
    const url = this.props.location.href
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
          dateModified={dateModified}
          datePublished={datePublished}
          image={featuredImgFluidSocial}
          schemaType="BlogPosting"
          url={url}
        />
        <HeroPillar>
          <h1
            style={{
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          {featuredImgFluid && (
            <figure>
              <Img
                fluid={featuredImgFluid}
                alt={featuredImgAlt}
                style={{ width: "100%", height: "100%" }}
              />
            </figure>
          )}
        </HeroPillar>
        <PillarMainContent>
          {featuredImgFluid && (
            <Attribution
              style={{
                marginBottom: rhythm(1),
              }}
              content={featuredImgAttribution}
            />
          )}
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr
            style={{
              marginTop: rhythm(1.5),
              marginBottom: rhythm(1.5),
            }}
          />
          <Disqus config={disqusConfig} />
        </PillarMainContent>
      </Layout>
    )
  }
}

export default PillarTemplate

export const pageQuery = graphql`
  query PillarBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
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
