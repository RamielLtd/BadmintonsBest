import React, { useEffect } from "react"

import ScoreBoard from "./scoreboard"
import Court from "./court"
import CourtSide from "./court-side"
import ServiceCourt from "./service-court"
import Score from "./score"

import { EVENTS } from "./constants"

import { useMatch } from "./useMatch"

const ScoringApp = () => {
  const {
    getCurrentGame,
    getCurrentPlayerFormation,
    getCurrentReceivingPlayer,
    getCurrentServingPlayer,
    newMatch,
    wonPoint,
  } = useMatch()

  useEffect(() => {
    newMatch(["Liam", "Gemma"], ["Lee Chong Wei", "Lin Dan"], EVENTS.XD)
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
    <ScoreBoard>
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
    </ScoreBoard>
  )
}

export default ScoringApp
