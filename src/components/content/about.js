import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../../utils/typography"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 350, height: 350) {
            ...GatsbyImageSharpFixed
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
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{ marginBottom: rhythm(1) }}
      />
      <p>
        Hi{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>{" "}
        I'm Liam. I've been playing Badminton for over 15 years and along with
        my family is my biggest passion in life. If I'm not with family I'm
        either playing or watching Badminton on a mission to be the best I can
        be. This site is where I can share what I've learnt from playing, being
        coached and from watching... Badmintons Best.
      </p>
      <p>
        <Link to="/about">Read more</Link>
      </p>
    </div>
  )
}

export default About
