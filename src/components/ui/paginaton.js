import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"

const Pagination = styled("nav")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: ${rhythm(2)};
`

export default Pagination
