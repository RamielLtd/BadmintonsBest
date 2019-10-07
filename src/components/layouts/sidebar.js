import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"
import { BREAKPOINTS } from "../../constants/css-vars"

const SideBar = styled("aside")`
  @media ${BREAKPOINTS.MEDIUM} {
    flex: 1 1 30%;
    padding-left: ${rhythm(2.5)};
  }

  > * + * {
    margin-top: ${rhythm(2)};
  }
`

export default SideBar
