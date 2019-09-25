/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, Link } from "gatsby"
import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"
import { GREEN, DARK_GREEN, BREAKPOINTS } from "../constants/css-vars"
import Constrain from "./constrain"

const FooterElement = styled("footer")`
  padding: ${rhythm(1)} 0;

  background: ${GREEN};
  background: -webkit-linear-gradient(to left, ${DARK_GREEN}, ${GREEN});
  background: linear-gradient(to left, ${DARK_GREEN}, ${GREEN});
  color: white;

  @media ${BREAKPOINTS.MEDIUM} {
    padding-top: ${rhythm(2)};
    padding-bottom: ${rhythm(2)};
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

  &:visited {
    color: white;
  }
`

const FooterExternalLink = styled("a")`
  color: white;

  &:visited {
    color: white;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            facebook
            instagram
            twitter
            youtube
          }
          contact {
            email
          }
        }
      }
    }
  `)

  const { social, contact } = data.site.siteMetadata

  return (
    <FooterElement>
      <Constrain
        style={{
          padding: `0 ${rhythm(1 / 2)}`,
        }}
      >
        <FooterSections>
          <FooterSection>
            <h3>About</h3>
            <p>
              Hi{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>{" "}
              I'm Liam. I've been playing Badminton for over 15 years and along
              with my family is my biggest passion in life. If I'm not with
              family I'm either playing or watching Badminton on a mission to be
              the best I can be. This site is where I can share what I've learnt
              from playing, being coached and from watching... Badmintons Best.
            </p>
            <p>
              <FooterLink to="/about-us">Read more</FooterLink>
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
                <FooterExternalLink
                  href={`https://youtube.com/${social.youtube}`}
                >
                  YouTube
                </FooterExternalLink>
              </li>
              <li>
                <FooterExternalLink
                  href={`https://instagram.com/${social.instagram}`}
                >
                  Instagram
                </FooterExternalLink>
              </li>
              <li>
                <FooterExternalLink
                  href={`https://twitter.com/${social.twitter}`}
                >
                  Twitter
                </FooterExternalLink>
              </li>
              <li>
                <FooterExternalLink
                  href={`https://facebook.com/${social.twitter}`}
                >
                  Facebook
                </FooterExternalLink>
              </li>
              <li>
                <FooterExternalLink href={`mailto:${contact.email}`}>
                  Email
                </FooterExternalLink>
              </li>
            </ul>
          </FooterSection>
        </FooterSections>
      </Constrain>
      <Constrain
        style={{
          textAlign: `center`,
          marginTop: rhythm(1.5),
          padding: `0 ${rhythm(1 / 2)}`,
        }}
      >
        © {new Date().getFullYear()} Badmintons Best, Built with
        {` `}
        <a style={{ color: `white` }} href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </Constrain>
    </FooterElement>
  )
}

export default Footer
