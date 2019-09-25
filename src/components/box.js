import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Constrain from "./constrain"

import { rhythm } from "../utils/typography"
import { BREAKPOINTS } from "../constants/css-vars"

const Container = styled("div")``

class Box extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
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
