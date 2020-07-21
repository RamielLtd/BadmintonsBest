import styled from "@emotion/styled"

import { CONSTRAIN_CONTENT, rhythm } from "src/utils/typography"
import { BREAKPOINTS } from "src/constants/css-vars"

const SingleColumn = styled("main")`
  margin-left: auto;
  margin-right: auto;
  max-width: ${CONSTRAIN_CONTENT};
  padding: ${rhythm(1)} ${rhythm(1 / 2)};

  @media ${BREAKPOINTS.MEDIUM} {
    padding-top: ${rhythm(2)};
    padding-bottom: ${rhythm(2)};
  }
`

export default SingleColumn
