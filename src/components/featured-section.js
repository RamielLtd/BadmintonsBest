import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import { rhythm } from "src/utils/typography"
import { BREAKPOINTS } from "src/constants/css-vars"

import Featured from "./featured"

const FeaturedsContainer = styled("div")`
  @media ${BREAKPOINTS.SMALLEST} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: -${rhythm(1)};
    margin-left: -${rhythm(1)};

    & > * {
      flex: 1 1 ${100 / 2}%;
      margin: 0 !important;
      padding-top: ${rhythm(1)};
      padding-left: ${rhythm(1)};
    }
  }

  @media ${BREAKPOINTS.MEDIUM} {
    & > * {
      flex-basis: ${100 / 3}%;
    }
  }
`

const FeaturedSection = ({ title, description, posts }) => (
  <div>
    <h2
      style={{
        marginTop: 0,
      }}
    >
      {title}
    </h2>
    <p>{description}</p>
    <FeaturedsContainer>
      {posts.map((post, i) => {
        const title = post.node.frontmatter.title
        const featuredImgFluid =
          post.node.frontmatter.featured.childImageSharp.fluid
        const link = post.node.fields.slug

        return (
          <Featured
            key={i}
            title={title}
            featuredImg={featuredImgFluid}
            link={link}
          />
        )
      })}
    </FeaturedsContainer>
  </div>
)

FeaturedSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
}

export default FeaturedSection
