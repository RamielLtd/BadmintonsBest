import React from "react"
import styled from "@emotion/styled"

import { CONSTRAIN_CONTENT_DIVIDERS, rhythm } from "../../../utils/typography"
import {
  BRAND_PRIMARY,
  BRAND_SECONDARY,
  BRAND_TERTIARY,
  BRAND_HIGHLIGHT,
  BRAND_HIGHLIGHT_LIGHT,
  BREAKPOINTS,
} from "../../../constants/css-vars"

// Example Usage
// eslint-disable-next-line
{
  /*
  <PillarSectionTitle>

    ## Have a consistent warmup and cooldown routine

    ![Bears!!!](https://placebear.com/400/300)

    Having a consistent warmup gets you ready physically and mentally. The simple act of doing a warmup consistently gets your brain into the mindset of “it’s game time!”

    Like people have their morning rituals the ritual of doing your warmup will tell your brain that it’s time to focus now.

  </PillarSectionTitle>
*/
}

const SectionContainer = styled("div")`
  position: relative;
  left: -50vw;

  margin-bottom: ${rhythm(1)};
  margin-left: 50%;
  padding: ${rhythm(1)} ${rhythm(1 / 2)};
  width: 100vw;

  background: ${BRAND_PRIMARY};
  color: white;

  &.theme-secondary {
    background-color: ${BRAND_SECONDARY};
  }

  &.theme-tertiary {
    background-color: ${BRAND_TERTIARY};
  }

  &.theme-highlight {
    background-color: ${BRAND_HIGHLIGHT};
  }

  &.theme-highlight-light {
    background-color: ${BRAND_HIGHLIGHT_LIGHT};
  }

  @media ${BREAKPOINTS.MEDIUM} {
    padding: ${rhythm(2)};
  }
`

const SectionContent = styled("div")`
  overflow: hidden;

  margin-left: auto;
  margin-right: auto;
  max-width: ${CONSTRAIN_CONTENT_DIVIDERS};

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  h2 {
    text-align: center;
  }

  img,
  .wall-post {
    @media ${BREAKPOINTS.MEDIUM} {
      float: right;
      margin: 0 0 0 ${rhythm(1)};
      max-width: 60%;
    }
  }
`

const PillarSectionTitleComponent = props => {
  const { children, theme } = props

  return (
    <SectionContainer className={`theme-${theme}`}>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  )
}

PillarSectionTitleComponent.defaultProps = {
  theme: "",
}

export default PillarSectionTitleComponent
