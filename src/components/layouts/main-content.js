import styled from "@emotion/styled"

import { CONSTRAIN_CONTENT, rhythm } from "../../utils/typography"
import { BREAKPOINTS } from "../../constants/css-vars"

const MainContent = styled("main")`
  twitter-widget {
    margin: 0 auto ${rhythm(1)} auto !important;
  }

  @media ${BREAKPOINTS.MEDIUM} {
    flex: 1 1 70%;
    max-width: ${CONSTRAIN_CONTENT};
    padding-left: ${rhythm(2.5)};
  }
`

export default MainContent
