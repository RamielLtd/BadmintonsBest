import React from "react"
import styled from "@emotion/styled"

import { rhythm } from "../../../utils/typography"
import SVG from "-!svg-react-loader!./court-birds-eye-view.svg"

const SvgHolder = styled("div")`
  display: block;
  padding: ${rhythm(1)};

  background-color: #333;
  color: white;

  text-align: center;

  > svg {
    display: block;
    margin: 0;
    padding: 0;

    #Doubles-Area-of-Play,
    #Singles-Area-of-Play,
    #Doubles-Service-Court,
    #Singles-Service-Court {
      display: none;
    }
  }

  &.spacing-normal {
    margin-bottom: ${rhythm(1)};
  }

  &.singles {
  }

  &.doubles {
  }
`

const BirdsEyeCourtComponent = props => {
  const { spacing, format, redScore, blueScore, serving } = props

  const singles = format === "singles" ? true : false
  const doubles = format === "doubles" ? true : false

  return (
    <SvgHolder
      className={`
        ${spacing ? `spacing-${spacing}` : ""}
        ${doubles ? "doubles" : ""}
        `}
    >
      <p>
        The score is {redScore} - {blueScore}
      </p>
      <SVG />
    </SvgHolder>
  )
}

BirdsEyeCourtComponent.defaultProps = {
  spacing: "",
  format: "singles",
  redScore: 0,
  blueScore: 0,
  serving: "red",
}

export default BirdsEyeCourtComponent
