import React from "react"
import { graphql } from "gatsby"

import SEO from "../../../components/seo"
import ScoringApp from "../../../tools/badminton-scoring-app"

class ScoringAppContainer extends React.Component {
  render() {
    const { data, location } = this.props
    const featuredImgFluidSocial = data.featuredSocial
      ? data.featuredSocial.childImageSharp.fluid
      : null
    const url = location.href

    return (
      <div>
        <SEO
          title={"Badminton Scoring App"}
          description={"Some descriptino here"}
          image={featuredImgFluidSocial}
          schemaType="BlogPosting"
          url={url}
        />
        <ScoringApp />
      </div>
    )
  }
}

export default ScoringAppContainer

export const pageQuery = graphql`
  query {
    featuredSocial: file(
      relativePath: { eq: "tools/badminton-scoring-app/images/bear.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 675, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
