import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "src/utils/typography"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import SingleColumn from "src/components/layouts/single-column"

class AlmostDonePage extends React.Component {
  render() {
    const {
      data: {
        confirmSubscription,
        site: { siteMetadata },
      },
    } = this.props
    const url = this.props.location.href

    return (
      <Layout location={this.props.location}>
        <SEO title={`${siteMetadata.description}`} url={url} />
        <SingleColumn>
          <h1 style={{ marginTop: 0 }}>Almost done!</h1>
          <p>
            Before you can receive the latest news, tips and insights from
            BadmintonsBest{" "}
            <strong>you need to confirm your email right now.</strong>
          </p>
          <p>(It’s easy)</p>
          <p>
            Just go your inbox, open the email from BadmintonsBest, and click
            the link.
          </p>
          <Image
            fluid={confirmSubscription.childImageSharp.fluid}
            alt="Screenshot of email displaying button to 'Confirm my email'"
            style={{
              marginBottom: rhythm(1),
              border: "1px solid #CCC",
              borderRadius: "5px",
            }}
          />
          <p>
            <strong>PS:</strong> If you don’t see a confirmation email, please
            check your spam/junk folder. Sometimes the confirmation message ends
            up there by mistake.
          </p>
        </SingleColumn>
      </Layout>
    )
  }
}

export default AlmostDonePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    confirmSubscription: file(
      absolutePath: { regex: "/email-signup/confirm-subscription.png/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
