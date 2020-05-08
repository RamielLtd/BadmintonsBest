import styled from "@emotion/styled"

import { SCOREBOARD_BG_COLOUR, SCOREBOARD_TEXT_COLOUR } from "./constants"

const ScoreBoard = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  padding: 1rem;
  overflow: hidden;

  background-color: ${SCOREBOARD_BG_COLOUR};
  color: ${SCOREBOARD_TEXT_COLOUR};

  font-size: 10vh;
  font-weight: 900;
  line-height: 1;
`
export default ScoreBoard
