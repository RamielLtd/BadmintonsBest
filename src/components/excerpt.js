import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const ExcerptContainer = styled("div")``

class Excerpt extends React.Component {
  render() {
    const { node } = this.props
    const title = node.frontmatter.title || node.fields.slug
    const featuredImgFluid = node.frontmatter.featured
      ? node.frontmatter.featured.childImageSharp.fluid
      : false

    return (
      <ExcerptContainer>
        {featuredImgFluid && <Img fluid={featuredImgFluid} />}
        <h2>
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </ExcerptContainer>
    )
  }
}

export default Excerpt
