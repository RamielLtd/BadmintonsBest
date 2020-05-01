import React from "react"
import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"

const AttributionParagraph = styled("p")`
  display: block;

  p {
    display: inline;
    font-size: ${rhythm(0.5)} !important;
  }

  img {
    display: inline-block;
    margin-bottom: 0;
  }
`

const Attribution = ({ content }) => (
  <AttributionParagraph>
    <em dangerouslySetInnerHTML={{ __html: `Image credit: ${content}` }} />
  </AttributionParagraph>
)

export default Attribution
