import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import { ReactComponent as CogwheelIcon } from "./cogwheel.svg"
import { ReactComponent as CloseIcon } from "./close-icon.svg"
import { SETTINGS_BG_COLOUR, SETTINGS_TEXT_COLOUR } from "../../constants"

const SettingsOpen = styled("a")`
  position: fixed;
  bottom: 0;
  right: 0;

  display: block;
  width: 5rem;
  height: 5rem;
  padding: 2rem 1rem 1rem 2rem;
  border-radius: 100% 0 0 0;

  background-color: ${SETTINGS_BG_COLOUR};

  > svg {
    display: block;
    width: auto;
    height: auto;

    fill: ${SETTINGS_TEXT_COLOUR};
  }
`

const SettingsClose = styled("a")`
  position: fixed;
  top: 1rem;
  right: 1rem;

  display: block;
  width: 4rem;
  height: 4rem;
  padding: 1.25rem;

  > svg {
    display: block;
    width: auto;
    height: auto;

    fill: ${SETTINGS_TEXT_COLOUR};
  }
`

const SettingsContainer = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  transform: translate3d(0, 100%, 0);
  transition: transform 200ms ease;

  display: block;
  width: 100%;
  height: 100%;
  padding: 2rem;

  background-color: ${SETTINGS_BG_COLOUR};
  color: ${SETTINGS_TEXT_COLOUR};

  &:target {
    transform: none;
  }
`

const SettingsTitle = styled("h2")`
  margin-top: 0;
`

const Settings = () => {
  return (
    <>
      <SettingsOpen href="#settings">
        <CogwheelIcon />
      </SettingsOpen>
      <SettingsContainer id="settings">
        <SettingsClose href="#scoreboard">
          <CloseIcon />
        </SettingsClose>
        <SettingsTitle>Match Settings</SettingsTitle>
      </SettingsContainer>
    </>
  )
}

Settings.propTypes = {}

export default Settings
