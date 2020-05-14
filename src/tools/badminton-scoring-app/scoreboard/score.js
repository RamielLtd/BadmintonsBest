import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import {
  SCOREBOARD_BG_COLOUR_HIGHLIGHT,
  SCOREBOARD_TEXT_COLOUR,
  SCOREBOARD_TEXT_COLOUR_CONTRAST,
  TEAM_ONE,
  TEAM_TWO,
} from "../constants"

const Container = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  user-select: none;

  @media (orientation: portrait) {
    flex-direction: column;
  }
`

const Count = styled("div")`
  position: relative;

  display: block;
  min-width: 3.5em;
  padding: 0.5em;

  font-size: 70%;
  text-align: center;
  vertical-align: middle;

  background-color: ${props =>
    props.team === props.serving
      ? SCOREBOARD_BG_COLOUR_HIGHLIGHT
      : SCOREBOARD_TEXT_COLOUR};
  border: 2px solid ${SCOREBOARD_TEXT_COLOUR_CONTRAST};
  color: ${SCOREBOARD_TEXT_COLOUR_CONTRAST};

  ${props =>
    props.side === "left"
      ? `
        border-radius: 1em 0 0 1em;
        margin-right: -1em;
        padding-right: 1.5em;

        @media (orientation: portrait) {
            border-radius: 1em 1em 0 0;
            margin-right: 0;
            padding-right: 0.5em;
            margin-bottom: -1.25em;
            padding-bottom: 1.5em;
        }
  `
      : `
        border-radius: 0 1em 1em 0;
        margin-left: -1em;
        padding-left: 1.5em;

        @media (orientation: portrait) {
            border-radius: 0 0 1em 1em;
            margin-left: 0;
            padding-left: 0.5em;
            margin-top: -1.25em;
            padding-top: 1.5em;
        }
  `}

  @media (orientation: portrait) {
    min-width: 2.5em;
  }
`

const Vs = styled("div")`
  position: relative;
  z-index: 1;

  display: block;
  border-radius: 50%;
  padding: 1.5rem;

  background-color: ${SCOREBOARD_TEXT_COLOUR};
  border: 2px solid ${SCOREBOARD_TEXT_COLOUR_CONTRAST};
  color: ${SCOREBOARD_TEXT_COLOUR_CONTRAST};

  &::before {
    content: "VS";
  }
`

const Score = ({ game, server: { team: servingTeam }, teamOne, teamTwo }) => {
  const swapSides =
    game === 2 || (game === 3 && (teamOne >= 11 || teamTwo >= 11))
      ? true
      : false

  return (
    <Container>
      <Count
        team={swapSides ? TEAM_TWO : TEAM_ONE}
        serving={servingTeam}
        side="left"
      >
        {swapSides ? teamTwo : teamOne}
      </Count>
      <Vs />
      <Count
        team={swapSides ? TEAM_ONE : TEAM_TWO}
        serving={servingTeam}
        side="right"
      >
        {swapSides ? teamOne : teamTwo}
      </Count>
    </Container>
  )
}

Score.propTypes = {
  game: PropTypes.number,
  server: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    team: PropTypes.string,
  }),
  teamOne: PropTypes.number,
  teamTwo: PropTypes.number,
}

Score.defaultProps = {
  server: {
    id: null,
    name: null,
    team: null,
  },
}

export default Score
