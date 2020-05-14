import React, { useState } from "react"

import ScoringAppContainer from "./scoring-app-container"
import ScoreBoard from "./scoreboard/"
import Welcome from "./welcome/"

import { MATCH_TYPE } from "./constants"

const ScoringApp = () => {
  const [playerOne, setPlayerOne] = useState("")
  const [playerTwo, setPlayerTwo] = useState("")
  const [playerThree, setPlayerThree] = useState("")
  const [playerFour, setPlayerFour] = useState("")
  const [matchType, setMatchType] = useState("")
  const [matchStarted, setMatchStarted] = useState(false)

  const doublesEvents = [MATCH_TYPE.MD, MATCH_TYPE.WD, MATCH_TYPE.XD]
  const isDoubles = doublesEvents.includes(matchType) ? true : false

  const teamOne = isDoubles ? [playerOne, playerTwo] : [playerOne]
  const teamTwo = isDoubles ? [playerThree, playerFour] : [playerThree]

  const updatePlayerOne = event => {
    setPlayerOne(event.target.value)
  }

  const updatePlayerTwo = event => {
    setPlayerTwo(event.target.value)
  }

  const updatePlayerThree = event => {
    setPlayerThree(event.target.value)
  }

  const updatePlayerFour = event => {
    setPlayerFour(event.target.value)
  }

  const updateMatchType = event => {
    setMatchType(event.target.value)
  }

  const startMatch = event => {
    event.preventDefault()

    setMatchStarted(true)
  }

  const welcomeProps = {
    matchType,
    playerOne,
    playerTwo,
    playerThree,
    playerFour,
    updatePlayerOne,
    updatePlayerTwo,
    updatePlayerThree,
    updatePlayerFour,
    updateMatchType,
    startMatch,
  }

  return (
    <ScoringAppContainer>
      {!matchStarted ? (
        <Welcome {...welcomeProps} />
      ) : (
        <ScoreBoard teamOne={teamOne} teamTwo={teamTwo} matchType={matchType} />
      )}
    </ScoringAppContainer>
  )
}

export default ScoringApp
