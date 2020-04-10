import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { MDXProvider } from "@mdx-js/react"
import { TwitterTweetEmbed as Tweet } from "react-twitter-embed"

import BirdsEyeCourt from "./interactives/court-birds-eye-view"

import Menu from "./menu"
import Footer from "./footer"

const shortcodes = { Tweet, BirdsEyeCourt }

const SiteContainer = styled("div")``
const Main = styled("div")``

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <MDXProvider components={shortcodes}>
        <SiteContainer>
          <Global styles={css``} />
          <Menu />
          <Main>{children}</Main>
          <Footer />
        </SiteContainer>
      </MDXProvider>
    )
  }
}

export default Layout