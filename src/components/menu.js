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

import { rhythm } from "../utils/typography"
import {
  BLUE,
  RED,
  GREEN,
  FOREGROUND,
  MENU_LINK_COLOUR,
} from "../constants/css-vars"

const MenuWrapper = styled("header")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: ${rhythm(1 / 2)};

  background-color: ${BLUE};
`

const MenuLogo = styled("div")``

const MenuToggle = styled("a")`
  box-shadow: none;
  outline: none;
  text-decoration: none;

  color: ${MENU_LINK_COLOUR};
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

  background-color: ${BLUE};

  opacity: 0;
  visibility: hidden;

  &.is-open {
    opacity: 1;
    visibility: visible;
  }
`

const MenuNavigationList = styled("ul")`
  display: block;
  width: 100%;
  margin: 0;
  padding: ${rhythm(1)};

  list-style: none;
`

const MenuNavigationItem = styled("li")`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
`

const MenuNavigationLink = styled(Link)`
  display: block;
  width: 100%;
  margin: 0;
  padding: ${rhythm(0.5)};

  box-shadow: none;
  outline: none;
  text-decoration: none;

  color: ${MENU_LINK_COLOUR};
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
        <MenuLogo>
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
          />
        </MenuLogo>
        <MenuToggle href="#menu-navigation" onClick={this.toggleMenu}>
          Toggle Menu
        </MenuToggle>
        <MenuNavigation
          id="menu-navigation"
          className={this.state.menuOpen ? "is-open" : ""}
        >
          <MenuNavigationList>
            {menu.map((item, index) => {
              return (
                <MenuNavigationItem key={index}>
                  <MenuNavigationLink to={item.link}>
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
