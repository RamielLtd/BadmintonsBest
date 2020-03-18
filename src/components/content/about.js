import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import ButtonLink from "../ui/button-link"
import { rhythm } from "../../utils/typography"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 350, maxHeight: 350, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <div style={{}}>
      <h3 style={{ marginTop: 0 }}>About</h3>
      <Image
        fluid={data.avatar.childImageSharp.fluid}
        alt={author}
        style={{ marginBottom: rhythm(1) }}
      />
      <p>
        Hi{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>{" "}
        I'm Liam. I've been playing Badminton for over 17 years. Second only to
        my family, Badminton is my biggest passion in life. If I'm not with
        family I'm either playing or watching Badminton with the mission to be
        the best I can be. I'm a qualified Badminton coach with a UKCC Level 2
        Certificate from Badminton England. This site is where I can share what
        I've learnt from playing, coaching and from watching the best in the
        world! BadmintonsBest.
      </p>
      <p>
        <ButtonLink to="/about">Read more</ButtonLink>
      </p>
    </div>
  )
}

export default About
