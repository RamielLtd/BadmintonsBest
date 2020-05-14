import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import { MATCH_TYPE } from "../constants"

const WelcomeContainer = styled("div")`
  max-width: 30rem;
`

const Welcome = ({
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
}) => {
  const doublesEvents = [MATCH_TYPE.MD, MATCH_TYPE.WD, MATCH_TYPE.XD]
  const isDoubles = doublesEvents.includes(matchType) ? true : false

  return (
    <WelcomeContainer>
      <h1>Welcome to the BadmintonsBest Scoring App</h1>
      <form onSubmit={startMatch}>
        <div>
          <p>To get started please select the match type you'll be playing:</p>
          <select value={matchType} onChange={updateMatchType} required>
            <option value="" disabled>
              Select event
            </option>
            <option value={MATCH_TYPE.MS}>Mens singles</option>
            <option value={MATCH_TYPE.WS}>Womens singles</option>
            <option value={MATCH_TYPE.MD}>Mens doubles</option>
            <option value={MATCH_TYPE.WD}>Womens doubles</option>
            <option value={MATCH_TYPE.XD}>Mixed doubles</option>
          </select>
        </div>

        <div>
          <p>Now enter the names of the players</p>

          <strong>Team One</strong>
          <div>
            <label>Server name</label>
            <input
              type="text"
              name="playerOne"
              value={playerOne}
              onChange={updatePlayerOne}
              required
            />
          </div>
          {isDoubles && (
            <div>
              <label>Partner name</label>
              <input
                type="text"
                name="playerTwo"
                value={playerTwo}
                onChange={updatePlayerTwo}
              />
            </div>
          )}

          <strong>Team Two</strong>
          <div>
            <label>Receiver name</label>
            <input
              type="text"
              name="playerThree"
              value={playerThree}
              onChange={updatePlayerThree}
              required
            />
          </div>
          {isDoubles && (
            <div>
              <label>Partner name</label>
              <input
                type="text"
                name="playerFour"
                value={playerFour}
                onChange={updatePlayerFour}
              />
            </div>
          )}
        </div>

        <div>
          <button type="submit">Start Match</button>
        </div>
      </form>
    </WelcomeContainer>
  )
}

Welcome.propTypes = {
  matchType: PropTypes.string.isRequired,
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired,
  playerThree: PropTypes.string.isRequired,
  playerFour: PropTypes.string.isRequired,
  updatePlayerOne: PropTypes.func.isRequired,
  updatePlayerTwo: PropTypes.func.isRequired,
  updatePlayerThree: PropTypes.func.isRequired,
  updatePlayerFour: PropTypes.func.isRequired,
  updateMatchType: PropTypes.func.isRequired,
  startMatch: PropTypes.func.isRequired,
}

export default Welcome
