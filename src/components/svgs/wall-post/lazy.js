import React from "react"
import styled from "@emotion/styled"

import { ReactComponent as SVG } from "./wall-post.svg"
import { BRAND_HIGHLIGHT_LIGHT } from "../../../constants/css-vars"

const SVGContainer = styled("div")`
  > svg {
    [fill="#6c63ff"] {
      fill: ${BRAND_HIGHLIGHT_LIGHT};
    }
  }
`

const WallPostComponent = () => (
  <SVGContainer className="wall-post">
    <SVG />
  </SVGContainer>
)

export default WallPostComponent
