import React from "react"
import styled from "@emotion/styled"

import { rhythm } from "../../../utils/typography"
import { ReactComponent as SVG } from "./court-birds-eye-view.svg"

const SvgHolder = styled("div")`
  display: block;
  padding: ${rhythm(1)};

  background-color: #333;
  color: white;

  text-align: center;

  > svg {
    display: block;
    margin: 0;
    padding: 0;

    #Doubles-Area-of-Play,
    #Singles-Area-of-Play,
    #Doubles-Service-Court,
    #Singles-Service-Court,
    [id^="Even-Service-Court-LS"],
    [id^="Odd-Service-Court-LS"],
    [id^="Even-Service-Court-RS"],
    [id^="Odd-Service-Court-RS"],
    #Player-Even-LS,
    #Player-Odd-LS,
    #Player-Even-RS,
    #Player-Odd-RS,
    [id^="Shuttlecock"] {
      display: none;
    }
  }

  &.spacing-normal {
    margin-bottom: ${rhythm(1)};
  }

  .message {
    margin-bottom: ${rhythm(0.5)};
  }

  .scoreboard {
    margin-bottom: ${rhythm(0.5)};
  }

  &.demonstrate-scoring {
    &.singles {
      #Singles-Service-Court {
        display: initial;
      }

      &.serving-red {
        &.red-score-odd {
          #Player-Odd-LS,
          #Player-Odd-LS [id^="Shuttlecock"],
          #Player-Odd-RS,
          #Singles-Service-Court [id^="Odd-Service-Court-RS"] {
            display: initial;
          }
        }

        &.red-score-even {
          #Player-Even-LS,
          #Player-Even-LS [id^="Shuttlecock"],
          #Player-Even-RS,
          #Singles-Service-Court [id^="Even-Service-Court-RS"] {
            display: initial;
          }
        }
      }

      &.serving-blue {
        &.blue-score-odd {
          #Player-Odd-RS,
          #Player-Odd-RS [id^="Shuttlecock"],
          #Player-Odd-LS,
          #Singles-Service-Court [id^="Odd-Service-Court-LS"] {
            display: initial;
          }
        }

        &.blue-score-even {
          #Player-Even-RS,
          #Player-Even-RS [id^="Shuttlecock"],
          #Player-Even-LS,
          #Singles-Service-Court [id^="Even-Service-Court-LS"] {
            display: initial;
          }
        }
      }
    }

    &.doubles {
      #Player-Odd-LS,
      #Player-Even-LS,
      #Player-Odd-RS,
      #Player-Even-RS,
      #Doubles-Service-Court {
        display: initial;
      }

      &.serving-red {
        &.red-score-odd {
          #Player-Odd-LS [id^="Shuttlecock"],
          #Doubles-Service-Court [id^="Odd-Service-Court-RS"] {
            display: initial;
          }
        }

        &.red-score-even {
          #Player-Even-LS [id^="Shuttlecock"],
          #Doubles-Service-Court [id^="Even-Service-Court-RS"] {
            display: initial;
          }
        }
      }

      &.serving-blue {
        &.blue-score-odd {
          #Player-Odd-RS [id^="Shuttlecock"],
          #Doubles-Service-Court [id^="Odd-Service-Court-LS"] {
            display: initial;
          }
        }

        &.blue-score-even {
          #Player-Even-RS [id^="Shuttlecock"],
          #Doubles-Service-Court [id^="Even-Service-Court-LS"] {
            display: initial;
          }
        }
      }
    }
  }

  &.demonstrate-service-court {
    &.singles {
      #Singles-Service-Court {
        display: initial;
      }

      &.serving-red {
        &.red-score-odd {
          #Singles-Service-Court [id^="Odd-Service-Court-RS"],
          #Singles-Service-Court [id^="Odd-Service-Court-LS"] {
            display: initial;
          }
        }

        &.red-score-even {
          #Singles-Service-Court [id^="Even-Service-Court-RS"],
          #Singles-Service-Court [id^="Even-Service-Court-LS"] {
            display: initial;
          }
        }
      }

      &.serving-blue {
        &.blue-score-odd {
          #Singles-Service-Court [id^="Odd-Service-Court-LS"],
          #Singles-Service-Court [id^="Odd-Service-Court-RS"] {
            display: initial;
          }
        }

        &.blue-score-even {
          #Singles-Service-Court [id^="Even-Service-Court-LS"],
          #Singles-Service-Court [id^="Even-Service-Court-RS"] {
            display: initial;
          }
        }
      }
    }

    &.doubles {
      #Doubles-Service-Court {
        display: initial;
      }

      &.serving-red {
        &.red-score-odd {
          #Doubles-Service-Court [id^="Odd-Service-Court-RS"],
          #Doubles-Service-Court [id^="Odd-Service-Court-LS"] {
            display: initial;
          }
        }

        &.red-score-even {
          #Doubles-Service-Court [id^="Even-Service-Court-RS"],
          #Doubles-Service-Court [id^="Even-Service-Court-LS"] {
            display: initial;
          }
        }
      }

      &.serving-blue {
        &.blue-score-odd {
          #Doubles-Service-Court [id^="Odd-Service-Court-LS"],
          #Doubles-Service-Court [id^="Odd-Service-Court-RS"] {
            display: initial;
          }
        }

        &.blue-score-even {
          #Doubles-Service-Court [id^="Even-Service-Court-LS"],
          #Doubles-Service-Court [id^="Even-Service-Court-RS"] {
            display: initial;
          }
        }
      }
    }
  }

  &.demonstrate-area-of-play {
    &.singles {
      #Singles-Area-of-Play {
        display: initial;
      }
    }

    &.doubles {
      #Doubles-Area-of-Play {
        display: initial;
      }
    }
  }
`

const BirdsEyeCourtComponent = props => {
  const {
    spacing,
    demonstrate,
    message,
    format,
    redScore,
    blueScore,
    serving,
  } = props

  const singles = format === "singles" ? true : false
  const doubles = format === "doubles" ? true : false

  return (
    <SvgHolder
      className={`
        ${spacing ? `spacing-${spacing}` : ""}
        ${`demonstrate-${demonstrate}`}
        ${singles ? "singles" : ""}
        ${doubles ? "doubles" : ""}
        ${redScore % 2 ? "red-score-odd" : "red-score-even"}
        ${blueScore % 2 ? "blue-score-odd" : "blue-score-even"}
        ${`serving-${serving}`}
        `}
    >
      {message && <p className="message">{message}</p>}
      {demonstrate === "scoring" && (
        <p className="scoreboard">
          The score is {redScore} - {blueScore}
        </p>
      )}
      <SVG />
    </SvgHolder>
  )
}

BirdsEyeCourtComponent.defaultProps = {
  spacing: "",
  demonstrate: "scoring",
  message: null,
  format: "singles",
  redScore: 0,
  blueScore: 0,
  serving: "red",
}

export default BirdsEyeCourtComponent
