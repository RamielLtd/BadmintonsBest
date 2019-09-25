import React from "react"
import styled from "@emotion/styled"

const AdspotContainer = styled("div")`
  display: block;
  margin-right: auto;
  margin-left: auto;
`

class Adspot extends React.Component {
  render() {
    const { id } = this.props

    return <AdspotContainer data-adspot={id} />
  }
}

export default Adspot
