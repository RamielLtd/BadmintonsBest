import React from "react"
import { graphql } from "gatsby"
import { TwitterFollowButton } from "react-twitter-embed"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import SingleColumn from "src/components/layouts/single-column"

class ThanksPage extends React.Component {
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
        <SingleColumn>
          <h1 style={{ marginTop: 0 }}>
            Thanks, you're all set!{" "}
            <span role="img" aria-label="Thumbs up">
              👍
            </span>
          </h1>
          <p>
            Your email is now confirmed and you’re now the newest member of the
            BadmintonsBest community. Check your email for a message from us.
          </p>
          <p>In the meantime, go ahead and follow us on Twitter:</p>
          <TwitterFollowButton screenName={"BadmintonsBest"} />
          <p>With that, welcome to the BadmintonsBest community!</p>
          <p>
            Now that you’re signed up, you’ll start to receive useable and
            actionable content to help you improve your Badminton game.
          </p>
          <p>
            Happy smashing,
            <br />
            Liam, BadmintonsBest
          </p>
        </SingleColumn>
      </Layout>
    )
  }
}

export default ThanksPage

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
