import { useState } from "react"

import { MATCH_TYPE, TEAM_ONE, TEAM_TWO } from "./constants"

const GAME_TEMPLATE = {
  gameNumber: 1,
  currentServer: null,
  currentReceiver: null,
  homeSide: null,
  awaySide: null,
  currentHomeScore: 0,
  currentAwayScore: 0,
  winner: null,
  timeline: [],
}

const TIMELINE_TEMPLATE = {
  homeScore: 0,
  awayScore: 0,
  server: null,
  receiver: null,
}

const isNumEven = num => {
  return num % 2 === 0 ? true : false
}

const canScore = (scorer, opponent) => {
  if (scorer <= 20) {
    return true
  } else if (
    scorer >= 21 &&
    opponent >= 20 &&
    scorer - opponent < 2 &&
    scorer <= 29 &&
    opponent <= 29
  ) {
    return true
  }

  return false
}

export function useMatch() {
  const [players, setPlayers] = useState([])
  const [games, setGames] = useState([GAME_TEMPLATE])
  const [matchType, setMatchType] = useState(null)

  const doublesEvents = [MATCH_TYPE.MD, MATCH_TYPE.WD, MATCH_TYPE.XD]
  const isDoubles = doublesEvents.includes(matchType) ? true : false

  const createGame = (
    currentGameNumber,
    server,
    receiver,
    homeSide,
    awaySide
  ) => {
    return {
      ...GAME_TEMPLATE,
      gameNumber: currentGameNumber + 1,
      currentServer: server,
      currentReceiver: receiver,
      homeSide,
      awaySide,
      timeline: [
        {
          ...TIMELINE_TEMPLATE,
          server,
          receiver,
        },
      ],
    }
  }

  const newGame = newGame => {
    setGames([...games, newGame])
  }

  const newMatch = (teamOnePlayers, teamTwoPlayers, event) => {
    const joinedPlayers = [...teamOnePlayers, ...teamTwoPlayers]

    const allPlayers = joinedPlayers.map((player, index) => {
      return {
        id: index,
        name: player,
        team: teamOnePlayers.includes(player) ? TEAM_ONE : TEAM_TWO,
      }
    })

    // Set players
    setPlayers(allPlayers)

    // Setup first game
    const server = allPlayers.find(({ team }) => team === TEAM_ONE)
    const receiver = allPlayers.find(({ team }) => team === TEAM_TWO)

    const gameOne = createGame(0, server.id, receiver.id, TEAM_ONE, TEAM_TWO)
    setGames([gameOne])

    // Set event
    setMatchType(event)
  }

  const getCurrentGame = () => {
    return games[games.length - 1]
  }

  const updateCurrentGame = updatedCurrentGame => {
    let updatedGames = [...games]

    updatedGames[updatedGames.length - 1] = updatedCurrentGame

    setGames(updatedGames)
  }

  const getCurrentServingTeam = () => {
    const currentServer = getCurrentServingPlayer()

    if (currentServer) {
      return currentServer.team
    } else {
      return TEAM_ONE
    }
  }

  const getCurrentServingPlayer = () => {
    const { currentServer } = getCurrentGame()

    if (currentServer !== null || undefined) {
      return players.find(player => player.id === currentServer)
    } else {
      return undefined
    }
  }

  const getCurrentReceivingTeam = () => {
    const currentReceiver = getCurrentServingPlayer()

    if (currentReceiver) {
      return currentReceiver.team
    } else {
      return TEAM_TWO
    }
  }

  const getCurrentReceivingPlayer = () => {
    const { currentReceiver } = getCurrentGame()

    if (currentReceiver !== null || undefined) {
      return players.find(player => player.id === currentReceiver)
    } else {
      return undefined
    }
  }

  const getCurrentPlayerFormation = () => {
    let { homeOddPlayer, homeEvenPlayer, awayOddPlayer, awayEvenPlayer } = ""

    const {
      currentServer,
      currentReceiver,
      homeSide,
      awaySide,
      currentHomeScore,
      currentAwayScore,
    } = getCurrentGame()

    const homePlayers = players.filter(player => player.team === homeSide)
    const awayPlayers = players.filter(player => player.team === awaySide)

    homePlayers.map(homePlayer => {
      if (homePlayer.id === currentServer) {
        if (isNumEven(currentHomeScore)) {
          return (homeEvenPlayer = homePlayer)
        } else {
          return (homeOddPlayer = homePlayer)
        }
      } else if (homePlayer.id === currentReceiver) {
        if (isNumEven(currentAwayScore)) {
          return (homeEvenPlayer = homePlayer)
        } else {
          return (homeOddPlayer = homePlayer)
        }
      } else if (homeSide === getCurrentServingTeam()) {
        if (isNumEven(currentHomeScore)) {
          return (homeOddPlayer = homePlayer)
        } else {
          return (homeEvenPlayer = homePlayer)
        }
      } else {
        if (isNumEven(currentAwayScore)) {
          return (homeOddPlayer = homePlayer)
        } else {
          return (homeEvenPlayer = homePlayer)
        }
      }
    })

    awayPlayers.map(awayPlayer => {
      if (awayPlayer.id === currentServer) {
        if (isNumEven(currentAwayScore)) {
          return (awayEvenPlayer = awayPlayer)
        } else {
          return (awayOddPlayer = awayPlayer)
        }
      } else if (awayPlayer.id === currentReceiver) {
        if (isNumEven(currentHomeScore)) {
          return (awayEvenPlayer = awayPlayer)
        } else {
          return (awayOddPlayer = awayPlayer)
        }
      } else if (awaySide === getCurrentServingTeam()) {
        if (isNumEven(currentAwayScore)) {
          return (awayOddPlayer = awayPlayer)
        } else {
          return (awayEvenPlayer = awayPlayer)
        }
      } else {
        if (isNumEven(currentHomeScore)) {
          return (awayOddPlayer = awayPlayer)
        } else {
          return (awayEvenPlayer = awayPlayer)
        }
      }
    })

    return {
      homeOddPlayer,
      homeEvenPlayer,
      awayOddPlayer,
      awayEvenPlayer,
    }
  }

  const updateCurrentServerReceiver = (scoringTeam, currentGame) => {
    const {
      awayEvenPlayer,
      awayOddPlayer,
      homeEvenPlayer,
      homeOddPlayer,
    } = getCurrentPlayerFormation()

    if (isDoubles) {
      if (scoringTeam === currentGame.homeSide) {
        // Check if serve changes side
        if (scoringTeam !== getCurrentServingTeam()) {
          // Update receiver before server changes
          currentGame.currentReceiver = isNumEven(currentGame.currentHomeScore)
            ? awayEvenPlayer.id
            : awayOddPlayer.id

          // Update server
          currentGame.currentServer = isNumEven(currentGame.currentHomeScore)
            ? homeEvenPlayer.id
            : homeOddPlayer.id
        } else {
          // Update receiver
          currentGame.currentReceiver = isNumEven(currentGame.currentHomeScore)
            ? awayOddPlayer.id
            : awayEvenPlayer.id
        }
      } else {
        // Check if serve changes side
        if (scoringTeam !== getCurrentServingTeam()) {
          // Update receiver before server changes
          currentGame.currentReceiver = isNumEven(currentGame.currentAwayScore)
            ? homeEvenPlayer.id
            : homeOddPlayer.id

          // Update server
          currentGame.currentServer = isNumEven(currentGame.currentAwayScore)
            ? awayEvenPlayer.id
            : awayOddPlayer.id
        } else {
          // Update receiver
          currentGame.currentReceiver = isNumEven(currentGame.currentAwayScore)
            ? homeOddPlayer.id
            : homeEvenPlayer.id
        }
      }
    } else {
      if (scoringTeam === currentGame.homeSide) {
        // Check if serve changes side
        if (scoringTeam !== getCurrentServingTeam()) {
          // Update receiver before server changes
          currentGame.currentReceiver = awayEvenPlayer
            ? awayEvenPlayer.id
            : awayOddPlayer.id

          // Update server
          currentGame.currentServer = homeEvenPlayer
            ? homeEvenPlayer.id
            : homeOddPlayer.id
        }
      } else {
        // Check if serve changes side
        if (scoringTeam !== getCurrentServingTeam()) {
          // Update receiver before server changes
          currentGame.currentReceiver = homeEvenPlayer
            ? homeEvenPlayer.id
            : homeOddPlayer.id

          // Update server
          currentGame.currentServer = awayEvenPlayer
            ? awayEvenPlayer.id
            : awayOddPlayer.id
        }
      }
    }

    return currentGame
  }

  const scoreHomePoint = () => {
    let currentGame = getCurrentGame()

    currentGame.currentHomeScore++
    currentGame = updateCurrentServerReceiver(currentGame.homeSide, currentGame)

    updateCurrentGame(currentGame)
  }

  const scoreAwayPoint = () => {
    let currentGame = getCurrentGame()

    currentGame.currentAwayScore++
    currentGame = updateCurrentServerReceiver(currentGame.awaySide, currentGame)

    updateCurrentGame(currentGame)
  }

  const wonPoint = team => {
    let {
      gameNumber,
      currentHomeScore,
      currentAwayScore,
      currentServer,
      currentReceiver,
      homeSide,
      awaySide,
    } = getCurrentGame()
    if (team === TEAM_ONE) {
      if (canScore(currentHomeScore, currentAwayScore)) {
        scoreHomePoint()
      } else if (gameNumber < 3) {
        const newHomeSide = awaySide
        const newAwaySide = homeSide

        newGame(
          createGame(
            gameNumber,
            currentServer,
            currentReceiver,
            newHomeSide,
            newAwaySide
          )
        )
        return
      }
    }

    if (team === TEAM_TWO) {
      if (canScore(currentAwayScore, currentHomeScore)) {
        scoreAwayPoint()
      } else if (gameNumber < 3) {
        const newHomeSide = awaySide
        const newAwaySide = homeSide

        newGame(
          createGame(
            gameNumber,
            currentServer,
            currentReceiver,
            newHomeSide,
            newAwaySide
          )
        )
        return
      }
    }
  }

  return {
    games,
    getCurrentGame,
    getCurrentPlayerFormation,
    getCurrentServingTeam,
    getCurrentServingPlayer,
    getCurrentReceivingTeam,
    getCurrentReceivingPlayer,
    newMatch,
    wonPoint,
  }
}
