import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Color from "color"

import {
  FEATURED_BACKGROUND_COLOUR,
  FEATURED_BACKGROUND_COLOUR_FADE,
  FEATURED_TEXT_COLOUR,
  BREAKPOINTS,
} from "src/constants/css-vars"
import { EVENT_CLICK, HOMEPAGE_FEATURED_LINK_CLICK } from "src/constants/gtm"
import { rhythm } from "src/utils/typography"

const FeaturedContainer = styled("div")`
  & + & {
    margin-top: ${rhythm(1)};
  }
`

const FeaturedTitle = styled("h2")`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;

  display: block;
  margin: 0;
  padding: ${rhythm(0.5)};

  @media ${BREAKPOINTS.SMALL} {
    padding: ${rhythm(1)};
  }
`

const FeaturedImage = styled(Img)`
  transition: transform 200ms ease;
`

const FeaturedLink = styled(Link)`
  position: relative;
  overflow: hidden;
  z-index: 0;

  display: block;

  color: ${FEATURED_TEXT_COLOUR};

  &:hover,
  &:focus {
    color: ${FEATURED_TEXT_COLOUR};

    ${FeaturedImage} {
      transform: scale(1.1, 1.1);
      transform-origin: center;
    }
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    display: block;
    width: 100%;
    height: 100%;

    background: ${FEATURED_BACKGROUND_COLOUR};
    background: -webkit-linear-gradient(
      to top,
      ${FEATURED_BACKGROUND_COLOUR} 20%,
      ${Color(FEATURED_BACKGROUND_COLOUR_FADE)
        .alpha(0.25)
        .string()}
    );
    background: linear-gradient(
      to top,
      ${FEATURED_BACKGROUND_COLOUR} 20%,
      ${Color(FEATURED_BACKGROUND_COLOUR_FADE)
        .alpha(0.25)
        .string()}
    );

    content: "";
  }
`

const Featured = ({ title, featuredImg, link }) => (
  <FeaturedContainer>
    <FeaturedLink
      style={{ boxShadow: `none` }}
      to={link}
      data-ga-event={EVENT_CLICK}
      data-ga-event-category={HOMEPAGE_FEATURED_LINK_CLICK}
      data-ga-event-action={title}
      data-ga-event-label={link}
    >
      <FeaturedTitle>{title}</FeaturedTitle>
      <FeaturedImage fluid={featuredImg} />
    </FeaturedLink>
  </FeaturedContainer>
)

Featured.propTypes = {
  title: PropTypes.string.isRequired,
  featuredImg: PropTypes.shape({}).isRequired,
  link: PropTypes.string.isRequired,
}

export default Featured
