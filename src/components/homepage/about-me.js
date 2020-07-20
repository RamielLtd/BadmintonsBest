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

const AboutMe = () => (
  <div>
    <h1>Hi there! 👋😄🏸</h1>
  </div>
)

export default AboutMe
