import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import {
  COURT_LINES_COLOUR,
  SCOREBOARD_BG_COLOUR_HIGHLIGHT,
  SERVICE_SITUATION_SERVE,
  SERVICE_SITUATION_RECEIVE,
  SERVICE_SITUATION_INACTIVE,
} from "./constants"

const Container = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  border: 2px solid ${COURT_LINES_COLOUR};

  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   white-space: nowrap;

  &.is-${SERVICE_SITUATION_SERVE} {
    background-color: ${SCOREBOARD_BG_COLOUR_HIGHLIGHT};
  }

  &.is-${SERVICE_SITUATION_RECEIVE} {
  }

  &.is-${SERVICE_SITUATION_INACTIVE} {
  }
`

// const serviceSituation = (player, serving) => {
//   if (player === serving) {
//     return SERVICE_SITUATION_SERVE
//   }

//   return SERVICE_SITUATION_INACTIVE
// }

const ServiceCourt = ({ is, player: { name }, side }) => {
  return <Container className={`is-${is}`}>{name}</Container>
}

ServiceCourt.propTypes = {
  is: PropTypes.string,
  player: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    team: PropTypes.string,
  }),
  side: PropTypes.string,
}

ServiceCourt.defaultProps = {
  player: {
    id: null,
    name: null,
    team: null,
  },
}

export default ServiceCourt
