import styled from "@emotion/styled"

import { rhythm } from "../../utils/typography"
import {
  BUTTON_BACKGROUND_COLOUR,
  BUTTON_TEXT_COLOUR,
} from "../../constants/css-vars"

const Button = styled("button")`
  display: inline-block;
  padding: ${rhythm(0.3)} ${rhythm(0.7)};
  border: none;
  border-radius: 5px;

  background-color: ${BUTTON_BACKGROUND_COLOUR};
  color: ${BUTTON_TEXT_COLOUR};

  cursor: pointer;
  text-decoration: none;
`

export default Button
