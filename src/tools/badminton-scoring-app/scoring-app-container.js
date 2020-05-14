import styled from "@emotion/styled"

import { SCOREBOARD_BG_COLOUR, SCOREBOARD_TEXT_COLOUR } from "./constants"

const ScoringAppContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding: 1rem;

  background-color: ${SCOREBOARD_BG_COLOUR};
  color: ${SCOREBOARD_TEXT_COLOUR};
`

export default ScoringAppContainer
