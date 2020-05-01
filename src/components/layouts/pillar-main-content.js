import styled from "@emotion/styled"

import { CONSTRAIN_CONTENT, rhythm } from "../../utils/typography"
import { BREAKPOINTS } from "../../constants/css-vars"

const PillarMainContent = styled("main")`
  max-width: ${CONSTRAIN_CONTENT};
  margin-left: auto;
  margin-right: auto;
  padding: ${rhythm(1)} ${rhythm(1 / 2)};

  @media ${BREAKPOINTS.MEDIUM} {
    padding-top: ${rhythm(2)};
    padding-bottom: ${rhythm(2)};
  }

  twitter-widget {
    margin: 0 auto ${rhythm(1)} auto !important;
  }
`

export default PillarMainContent
