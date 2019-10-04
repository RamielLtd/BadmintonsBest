import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import Menu from "./menu"
import Footer from "./footer"
import Adspot from "./adspot"

const SiteContainer = styled("div")``
const Main = styled("div")``

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <SiteContainer>
        <Global styles={css``} />
        <Menu />
        <Main>
          <Adspot slug="leaderboard-top-unit" />
          {children}
        </Main>
        <Footer />
      </SiteContainer>
    )
  }
}

export default Layout
