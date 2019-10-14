import { Link } from "gatsby"
import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: ${rhythm(0.3)} ${rhythm(0.7)};
  border: 1px solid;
  border-radius: 5px;

  text-decoration: none;
`

export default ButtonLink
