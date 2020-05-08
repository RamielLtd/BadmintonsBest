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
    getCurrentServingTeam,
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

  const currentServingTeam = getCurrentServingTeam()

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
          <ServiceCourt side="odd" player={homeOddPlayer} />
          <ServiceCourt side="even" player={homeEvenPlayer} />
        </CourtSide>
        <CourtSide onClick={() => awaySideWonPoint()}>
          <ServiceCourt side="even" player={awayEvenPlayer} />
          <ServiceCourt side="odd" player={awayOddPlayer} />
        </CourtSide>
      </Court>
      <Score
        teamOne={currentHomeScore}
        teamTwo={currentAwayScore}
        game={currentGameNumber}
        servingTeam={currentServingTeam}
      />
    </ScoreBoard>
  )
}

export default ScoringApp
