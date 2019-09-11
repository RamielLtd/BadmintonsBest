import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"

import Menu from "./menu"
import Footer from "./footer"

const SiteContainer = styled("div")``

const Wrapper = styled("div")`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <SiteContainer>
        <Global styles={css``} />
        <Menu />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </SiteContainer>
    )
  }
}

export default Layout
