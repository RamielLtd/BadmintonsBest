import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"
import { GREEN } from "../constants/css-vars"

const ContentHeader = styled("header")`
  position: relative;

  margin-bottom: ${rhythm(1.5)};
  padding-bottom: ${rhythm(1.5)};

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;

    display: inline-block;
    height: 2px;
    width: 10em;
    max-width: 100%;

    background-color: ${GREEN};

    content: "";
    opacity: 0.5;
  }

  *:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

export default ContentHeader
