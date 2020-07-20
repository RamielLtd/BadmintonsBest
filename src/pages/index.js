import React from "react"
import { graphql } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import Box from "src/components/box"

import HomepageHero from "src/components/homepage/homepage-hero"
// import AboutMe from "src/components/homepage/about-me"
import EssentialReading from "src/components/homepage/essential-reading"
import BeginnerReading from "src/components/homepage/beginner-reading"

class HomePage extends React.Component {
  render() {
    const {
      data: {
        site: { siteMetadata },
      },
    } = this.props
    const url = this.props.location.href

    return (
      <Layout location={this.props.location}>
        <SEO title={`${siteMetadata.description}`} url={url} />
        <HomepageHero />
        {/* <Box>
          <AboutMe />
        </Box> */}
        <Box>
          <EssentialReading />
        </Box>
        <Box>
          <BeginnerReading />
        </Box>
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
