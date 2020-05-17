import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import { rhythm } from "../../../utils/typography"
import Button from "../../../components/ui/button"
import { COURT_LINES_COLOUR, MATCH_TYPE } from "../constants"

const WelcomeContainer = styled("div")`
  max-width: 30rem;
`

const WelcomeTitle = styled("h1")`
  margin-top: 0;
  text-align: center;
`

const WelcomeSection = styled("div")`
  & + & {
    margin-top: ${rhythm(1.5)};
  }
`

const WelcomeSubSection = styled("div")`
  & + & {
    margin-top: ${rhythm(0.5)};
  }
`

const WelcomeSectionHeading = styled("p")`
  margin-bottom: ${rhythm(0.5)};
`

const FormInputCombo = styled("div")`
  > label {
    display: block;
  }

  > input {
    display: block;
    width: 100%;
    padding: ${rhythm(0.25)};
  }

  & + & {
    margin-top: ${rhythm(0.5)};
  }
`

const FormSelect = styled("select")`
  display: block;
  width: 100%;
  padding: ${rhythm(0.25)};

  background-color: ${COURT_LINES_COLOUR};
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
  const canSubmit =
    matchType &&
    (isDoubles
      ? playerOne && playerTwo && playerThree && playerFour
      : playerOne && playerThree)
      ? true
      : false

  return (
    <WelcomeContainer>
      <WelcomeTitle>Welcome to the BadmintonsBest Scoring App</WelcomeTitle>
      <form onSubmit={startMatch}>
        <WelcomeSection>
          <WelcomeSectionHeading>
            To get started please select the match type you'll be playing:
          </WelcomeSectionHeading>
          <FormSelect
            name="matchType"
            value={matchType}
            onChange={updateMatchType}
            required
          >
            <option value="" disabled>
              Select event
            </option>
            <option value={MATCH_TYPE.MS}>Mens singles</option>
            <option value={MATCH_TYPE.WS}>Womens singles</option>
            <option value={MATCH_TYPE.MD}>Mens doubles</option>
            <option value={MATCH_TYPE.WD}>Womens doubles</option>
            <option value={MATCH_TYPE.XD}>Mixed doubles</option>
          </FormSelect>
        </WelcomeSection>

        {matchType && (
          <WelcomeSection>
            <WelcomeSectionHeading>
              Now enter the names of the players:
            </WelcomeSectionHeading>

            <WelcomeSubSection>
              <strong>Team One</strong>
              <FormInputCombo>
                <label htmlFor="playerOne">Server name</label>
                <input
                  type="text"
                  name="playerOne"
                  value={playerOne}
                  onChange={updatePlayerOne}
                  required
                />
              </FormInputCombo>
              {isDoubles && (
                <FormInputCombo>
                  <label htmlFor="playerTwo">Partner name</label>
                  <input
                    type="text"
                    name="playerTwo"
                    value={playerTwo}
                    onChange={updatePlayerTwo}
                  />
                </FormInputCombo>
              )}
            </WelcomeSubSection>

            <WelcomeSubSection>
              <strong>Team Two</strong>
              <FormInputCombo>
                <label htmlFor="playerThree">Receiver name</label>
                <input
                  type="text"
                  name="playerThree"
                  value={playerThree}
                  onChange={updatePlayerThree}
                  required
                />
              </FormInputCombo>
              {isDoubles && (
                <FormInputCombo>
                  <label htmlFor="playerFour">Partner name</label>
                  <input
                    type="text"
                    name="playerFour"
                    value={playerFour}
                    onChange={updatePlayerFour}
                  />
                </FormInputCombo>
              )}
            </WelcomeSubSection>
          </WelcomeSection>
        )}

        {canSubmit && (
          <WelcomeSection>
            <Button type="submit">Start Match</Button>
          </WelcomeSection>
        )}
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
