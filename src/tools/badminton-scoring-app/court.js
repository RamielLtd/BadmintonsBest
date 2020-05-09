import styled from "@emotion/styled"

import { COURT_BG_COLOUR, COURT_LINES_COLOUR } from "./constants"

const Court = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;

  border: 2px solid ${COURT_LINES_COLOUR};
  background-color: ${COURT_BG_COLOUR};

  @media (orientation: portrait) {
    flex-direction: column;
  }

  > * {
    flex: 1 1 50%;
    width: 50%;

    @media (orientation: portrait) {
      height: 50%;
      width: 100%;
    }
  }
`

export default Court
