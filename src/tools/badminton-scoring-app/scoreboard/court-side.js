import styled from "@emotion/styled"

const CourtSide = styled("div")`
  display: flex;
  flex-direction: column;

  @media (orientation: portrait) {
    flex-direction: row;
  }

  > * {
    flex: 1 1 50%;

    @media (orientation: portrait) {
    }
  }
`

export default CourtSide
