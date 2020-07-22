import React from "react"
import { graphql } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import Box from "src/components/box"

import EssentialReading from "src/components/homepage/essential-reading"
import BeginnerReading from "src/components/homepage/beginner-reading"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const url = this.props.location.href
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" url={url} />
        <Box theme="hero">
          <h1 style={{ marginTop: 0 }}>
            Awesome Badminton content not found{" "}
            <span role="img" aria-label="Badminton">
              🏸
            </span>{" "}
            <span role="img" aria-label="Detective">
              🕵️‍♂️
            </span>
          </h1>
          <p style={{ marginBottom: 0 }}>
            This can happen when juggling too many shuttles at once. Why not try
            some of our best reads below.
          </p>
        </Box>
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

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
