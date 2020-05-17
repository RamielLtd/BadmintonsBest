import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import Court from "./court"
import CourtSide from "./court-side"
import ServiceCourt from "./service-court"
import Settings from "./settings/"
import Score from "./score"

import { SCOREBOARD_BG_COLOUR, SCOREBOARD_TEXT_COLOUR } from "../constants"
import { useMatch } from "../useMatch"

const ScoreBoardContainer = styled("div")`
  position: absolute;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem;

  background-color: ${SCOREBOARD_BG_COLOUR};
  color: ${SCOREBOARD_TEXT_COLOUR};

  font-size: 10vh;
  font-weight: 900;
  line-height: 1;

  @media (orientation: portrait) {
    font-size: 10vw;
  }
`

const ScoreBoard = ({ teamOne, teamTwo, matchType }) => {
  const {
    getCurrentGame,
    getCurrentPlayerFormation,
    getCurrentReceivingPlayer,
    getCurrentServingPlayer,
    newMatch,
    wonPoint,
  } = useMatch()

  useEffect(() => {
    newMatch(teamOne, teamTwo, matchType)
  }, [])

  const {
    currentAwayScore,
    currentHomeScore,
    gameNumber: currentGameNumber,
    homeSide,
    awaySide,
  } = getCurrentGame()

  const currentServingPlayer = getCurrentServingPlayer()
  const currentReceivingPlayer = getCurrentReceivingPlayer()

  const {
    homeOddPlayer,
    homeEvenPlayer,
    awayOddPlayer,
    awayEvenPlayer,
  } = getCurrentPlayerFormation()

  const homeSideWonPoint = () => {
    wonPoint(homeSide)
  }

  const awaySideWonPoint = () => {
    wonPoint(awaySide)
  }

  return (
    <ScoreBoardContainer>
      <Court>
        <CourtSide onClick={() => homeSideWonPoint()}>
          <ServiceCourt
            side="odd"
            player={homeOddPlayer}
            server={currentServingPlayer}
            receiver={currentReceivingPlayer}
          />
          <ServiceCourt
            side="even"
            player={homeEvenPlayer}
            server={currentServingPlayer}
            receiver={currentReceivingPlayer}
          />
        </CourtSide>
        <CourtSide onClick={() => awaySideWonPoint()}>
          <ServiceCourt
            side="even"
            player={awayEvenPlayer}
            server={currentServingPlayer}
            receiver={currentReceivingPlayer}
          />
          <ServiceCourt
            side="odd"
            player={awayOddPlayer}
            server={currentServingPlayer}
            receiver={currentReceivingPlayer}
          />
        </CourtSide>
      </Court>
      <Score
        teamOne={currentHomeScore}
        teamTwo={currentAwayScore}
        game={currentGameNumber}
        server={currentServingPlayer}
      />
      <Settings />
    </ScoreBoardContainer>
  )
}

ScoreBoard.propTypes = {
  teamOne: PropTypes.arrayOf(PropTypes.string).isRequired,
  teamTwo: PropTypes.arrayOf(PropTypes.string).isRequired,
  matchType: PropTypes.string.isRequired,
}

export default ScoreBoard
