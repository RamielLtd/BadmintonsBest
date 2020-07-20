import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

import Box from "src/components/box"
import HomepageSignup from "src/components/embeds/homepage-signup"

import { rhythm } from "src/utils/typography"
import { BREAKPOINTS } from "src/constants/css-vars"

const HeroContainer = styled("div")`
  position: relative;
  z-index: 0;
`

const HeroContent = styled("div")`
  position: relative;
  z-index: 1;

  @media ${BREAKPOINTS.SMALL} {
    width: 50%;
    padding-top: ${rhythm(1)};
    padding-bottom: ${rhythm(1)};
  }

  @media ${BREAKPOINTS.MEDIUM} {
    padding-top: ${rhythm(3)};
    padding-bottom: ${rhythm(3)};
  }
`

const HeroTitle = styled("h1")`
  margin-top: 0;
  max-width: 65%;

  @media ${BREAKPOINTS.SMALL} {
    max-width: none;
  }
`

const HeroImage = styled("div")`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;

  width: 70%;
  max-height: 100%;
  margin: 0;
  padding-left: ${rhythm(1)};

  transform: translateX(25%);

  img,
  picture,
  .gatsby-image-wrapper {
    width: 100%;
    margin: 0 !important;
  }

  @media ${BREAKPOINTS.SMALL} {
    width: 50%;
    transform: none;
  }
`

const HomepageHero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      avatar: file(absolutePath: { regex: "/homepage-hero.png/" }) {
        childImageSharp {
          fluid(maxWidth: 500, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <HeroContainer>
      <Box theme="hero">
        <HeroContent>
          <HeroTitle>
            Get Exclusive Badminton Tips That I Only Share With Email
            Subscribers
          </HeroTitle>
          <HomepageSignup />
        </HeroContent>
        <HeroImage>
          <Image
            fluid={data.avatar.childImageSharp.fluid}
            alt={data.site.siteMetadata.author}
            style={{ marginBottom: rhythm(1) }}
          />
        </HeroImage>
      </Box>
    </HeroContainer>
  )
}

export default HomepageHero
