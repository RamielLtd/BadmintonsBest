/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { React, Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Image from "gatsby-image"

import { CONSTRAIN, rhythm } from "../utils/typography"
import {
  BREAKPOINTS,
  BRAND_SECONDARY,
  BACKGROUND,
  MIDGROUND,
  FOREGROUND,
  MENU_BACKGROUND_COLOUR,
  MENU_LINK_COLOUR,
} from "../constants/css-vars"
import { EVENT_CLICK, MENU_LINK_CLICK } from "../constants/gtm"

import { ReactComponent as OpenIcon } from "../../content/assets/open-icon.svg"
import { ReactComponent as CloseIcon } from "../../content/assets/close-icon.svg"

const MenuWrapper = styled("header")`
  position: relative;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: ${CONSTRAIN};
  margin-left: auto;
  margin-right: auto;
  padding: ${rhythm(1 / 2)};

  background-color: ${MENU_BACKGROUND_COLOUR};

  &:before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: ${BACKGROUND};

    display: block;
    width: 100vw;
    height: 100%;

    background-color: ${MENU_BACKGROUND_COLOUR};

    content: "";
  }
`

const MenuLogo = styled("a")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;

  color: ${MENU_LINK_COLOUR} !important;
`

const MenuToggle = styled("a")`
  position: relative;
  overflow: hidden;

  display: block;
  width: ${rhythm(1.5)};
  height: ${rhythm(1.5)};
  box-shadow: none;
  outline: none;

  text-decoration: none;

  color: transparent !important;

  @media ${BREAKPOINTS.MEDIUM} {
    display: none;
  }

  &[href="#menu-navigation"] > svg {
    fill: ${MENU_LINK_COLOUR};
  }

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: block;
    width: 100%;
    height: 100%;
    padding: ${rhythm(0.4)};

    fill: ${MENU_BACKGROUND_COLOUR};
  }
`

const MenuNavigation = styled("nav")`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${FOREGROUND};

  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: 100vh;

  background: ${BRAND_SECONDARY};

  opacity: 0;
  transform: translate3d(${rhythm(2)}, 0, 0);
  visibility: hidden;

  transition-delay: 400ms, 0ms, 100ms;
  transition-duration: 0ms, 300ms, 300ms;
  transition-property: visibility, opacity, transform;
  transition-timing-function: ease-in;

  @media ${BREAKPOINTS.MEDIUM} {
    position: static;
    z-index: ${MIDGROUND};

    display: block;
    width: auto;
    min-height: auto;

    background: none;

    opacity: 1;
    transform: none;
    transition: none;
    visibility: visible;
  }

  &.is-open {
    opacity: 1;
    transform: none;
    visibility: visible;

    transition-delay: 0ms, 0ms, 100ms;
  }
`

const MenuNavigationList = styled("ul")`
  display: block;
  width: 100%;
  margin: 0;
  padding: ${rhythm(1)};

  list-style: none;

  @media ${BREAKPOINTS.MEDIUM} {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0;

    white-space: nowrap;
  }
`

const MenuNavigationItem = styled("li")`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;

  @media ${BREAKPOINTS.MEDIUM} {
    &:first-child {
      display: none;
    }
  }
`

const MenuNavigationLink = styled(Link)`
  display: block;
  width: 100%;
  margin: 0;
  padding: ${rhythm(0.5)};

  box-shadow: none;
  outline: none;
  text-decoration: none;

  color: ${MENU_BACKGROUND_COLOUR};

  &:visited,
  &:hover,
  &:focus {
    color: ${MENU_BACKGROUND_COLOUR};
  }

  @media ${BREAKPOINTS.MEDIUM} {
    color: ${MENU_LINK_COLOUR};

    &:visited,
    &:hover,
    &:focus {
      color: ${MENU_LINK_COLOUR};
    }
  }
`

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  toggleMenu = e => {
    e.preventDefault()
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }))
  }

  render() {
    const { menu, title } = this.props.data.site.siteMetadata
    return (
      <MenuWrapper>
        <MenuLogo href="/">
          <Image
            fixed={this.props.data.logo.childImageSharp.fixed}
            alt={title}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />{" "}
          Badmintons Best
        </MenuLogo>
        <MenuToggle href="#menu-navigation" onClick={this.toggleMenu}>
          <OpenIcon /> Open Menu
        </MenuToggle>
        <MenuNavigation
          id="menu-navigation"
          className={this.state.menuOpen ? "is-open" : ""}
        >
          <MenuNavigationList>
            <MenuNavigationItem key="0">
              <MenuToggle
                href="#close-menu-navigation"
                onClick={this.toggleMenu}
                css={{
                  width: "100%",
                  "> svg": {
                    width: "auto",
                    right: 0,
                    transform: "translate(0, -50%)",
                    left: "initial",
                  },
                }}
              >
                <CloseIcon /> Close Menu
              </MenuToggle>
            </MenuNavigationItem>
            {menu.map((item, index) => {
              return (
                <MenuNavigationItem key={index}>
                  <MenuNavigationLink
                    to={item.link}
                    data-ga-event={EVENT_CLICK}
                    data-ga-event-category={MENU_LINK_CLICK}
                    data-ga-event-action={item.text}
                    data-ga-event-label={item.link}
                  >
                    {item.text}
                  </MenuNavigationLink>
                </MenuNavigationItem>
              )
            })}
          </MenuNavigationList>
        </MenuNavigation>
      </MenuWrapper>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
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
    `}
    render={data => <Menu data={data} {...props} />}
  />
)
