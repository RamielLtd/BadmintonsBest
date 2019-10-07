import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Constrain from "./constrain"

import { rhythm } from "../utils/typography"
import { BLUE, DARK_BLUE, BREAKPOINTS } from "../constants/css-vars"

const Container = styled("div")`
  &.hero {
    background: ${BLUE};
    background: -webkit-linear-gradient(to top, ${DARK_BLUE}, ${BLUE});
    background: linear-gradient(to top, ${DARK_BLUE}, ${BLUE});
    color: white;
  }
`

class Box extends React.Component {
  render() {
    const { children, theme } = this.props

    return (
      <Container className={theme}>
        <Constrain
          css={css`
            padding: ${rhythm(1)} ${rhythm(1 / 2)};
            @media ${BREAKPOINTS.MEDIUM} {
              padding-top: ${rhythm(2)};
              padding-bottom: ${rhythm(2)};
            }
          `}
        >
          {children}
        </Constrain>
      </Container>
    )
  }
}

export default Box
