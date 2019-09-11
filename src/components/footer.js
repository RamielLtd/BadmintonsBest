/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import {
  BLUE,
  RED,
  GREEN,
  FOREGROUND,
  MENU_LINK_COLOUR,
  BREAKPOINTS,
} from "../constants/css-vars"

const FooterElement = styled("footer")`
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};

  background-color: ${BLUE};
  color: white;
`

const FooterWrapper = styled("section")`
  margin: 0 auto;
  max-width: ${rhythm(36)};

  & + & {
    margin-top: ${rhythm(1.5)};
  }
`

const FooterSections = styled("div")`
  @media ${BREAKPOINTS.MEDIUM} {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    margin-left: -${rhythm(1.5)};
  }
`

const FooterSection = styled("div")`
  & + & {
    margin-top: ${rhythm(1.5)};
  }

  @media ${BREAKPOINTS.MEDIUM} {
    flex: 1 1 ${100 / 3}%;
    margin-top: 0;
    padding-left: ${rhythm(1.5)};

    & + & {
      margin-top: 0;
    }
  }

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`

const FooterLink = styled(Link)`
  color: white;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      logo: file(absolutePath: { regex: "/badmintonsbest-logo.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          menu {
            text
            link
          }
        }
      }
    }
  `)

  const { menu, title } = data.site.siteMetadata
  return (
    <FooterElement>
      <FooterWrapper>
        <FooterSections>
          <FooterSection>
            <h3>About</h3>
            <p>
              Hi 👋 I'm Liam. I've been playing Badminton for over 15 years and
              along with my family is my biggest passion in life. If I'm not
              with family I'm either playing or watching Badminton on a mission
              to be the best I can be. This site is where I can share what I've
              learnt from playing, being coached and from watching... Badmintons
              Best.
            </p>
          </FooterSection>

          <FooterSection>
            <h3>Legal Information</h3>
            <p>
              This site is owned and operated by Ramiel Ltd. Ramiel Ltd is a
              participant in the Amazon Services LLC Associates Program, an
              affiliate advertising program designed to provide a means for
              sites to earn advertising fees by advertising and linking to
              Amazon.com. Ramiel Ltd is compensated for referring traffic and
              business to these companies. Copyright © Ramiel Ltd
            </p>
            <ul>
              <li>
                <FooterLink to="/terms-and-conditions">
                  Terms and Conditions
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <FooterLink to="/terms-and-conditions">
                  Terms and Conditions
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              </li>
            </ul>
          </FooterSection>
        </FooterSections>
      </FooterWrapper>
      <FooterWrapper style={{ textAlign: `center` }}>
        © {new Date().getFullYear()} Badmintons Best, Built with
        {` `}
        <a style={{ color: `white` }} href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </FooterWrapper>
    </FooterElement>
  )
}

export default Footer
