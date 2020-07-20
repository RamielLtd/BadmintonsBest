import styled from "@emotion/styled"
import Color from "color"

import { rhythm } from "src/utils/typography"
import {
  BUTTON_BACKGROUND_COLOUR,
  BUTTON_TEXT_COLOUR,
  BUTTON_CTA_BACKGROUND_COLOUR,
  BUTTON_CTA_TEXT_COLOUR,
} from "src/constants/css-vars"

const Button = styled("button")`
  display: inline-block;
  padding: ${rhythm(0.3)} ${rhythm(0.7)};
  border: none;
  border-radius: 5px;

  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;

  ${props =>
    props.cta
      ? `
        background-color: ${BUTTON_CTA_BACKGROUND_COLOUR};
        color: ${BUTTON_CTA_TEXT_COLOUR};
        box-shadow: 4px 4px 0px 0px ${Color(BUTTON_CTA_BACKGROUND_COLOUR)
          .darken(0.3)
          .string()};
      `
      : `
        background-color: ${BUTTON_BACKGROUND_COLOUR};
        color: ${BUTTON_TEXT_COLOUR};
        box-shadow: 4px 4px 0px 0px ${Color(BUTTON_BACKGROUND_COLOUR)
          .darken(0.3)
          .string()};
      `}

  &:disabled {
    cursor: not-allowed;
  }
`

export default Button
