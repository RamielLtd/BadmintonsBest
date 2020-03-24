import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"
import { BREAKPOINTS } from "../../constants/css-vars"

const MainContent = styled("main")`
  twitter-widget {
    margin-top: 0 !important;
    margin-bottom: ${rhythm(1)} !important;
  }

  @media ${BREAKPOINTS.MEDIUM} {
    flex: 1 1 70%;
    max-width: ${rhythm(22)};
    padding-left: ${rhythm(2.5)};
  }
`

export default MainContent
