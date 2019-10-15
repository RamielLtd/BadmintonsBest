import React from "react"
import styled from "@emotion/styled"

const AdspotContainer = styled("div")`
  display: block;

  &[data-adspot="sidebar-unit"] {
    margin-right: auto;
    margin-left: auto;
  }

  &[data-adspot="leaderboard-top-unit"] {
    margin-right: auto;
    margin-left: auto;

    iframe {
      display: block;
      margin: 0 auto;
    }
  }

  &[data-adspot="in-content-ad-unit"] {
    float: right;
    margin: 0 0 1rem 1rem;
  }
`

class Adspot extends React.Component {
  render() {
    const { slug } = this.props

    return <AdspotContainer data-adspot={slug} />
  }
}

export default Adspot
