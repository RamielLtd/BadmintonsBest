import styled from "@emotion/styled"
import { rgba } from "emotion-rgba"

import { CONSTRAIN_CONTENT_DIVIDERS, rhythm } from "../../utils/typography"
import { BRAND_PRIMARY, BREAKPOINTS } from "../../constants/css-vars"

const HeroPillar = styled("header")`
  position: relative;

  padding: ${rhythm(1)} ${rhythm(1 / 2)} ${rhythm(8)};

  @media ${BREAKPOINTS.SMALL} {
    padding-bottom: ${rhythm(12)};
  }

  @media ${BREAKPOINTS.MEDIUM} {
    z-index: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: ${rhythm(8)};

    padding-top: ${rhythm(2)};
    padding-bottom: ${rhythm(2)};
  }

  background: ${BRAND_PRIMARY};
  color: white;

  text-align: center;

  h1 {
    @media ${BREAKPOINTS.MEDIUM} {
      width: ${CONSTRAIN_CONTENT_DIVIDERS};
      margin-left: auto;
      margin-right: auto;

      text-align: left;
    }
  }

  figure {
    position: absolute;
    right: 0;
    bottom: 0;

    display: block;
    width: 100%;
    height: ${rhythm(7)};

    @media ${BREAKPOINTS.SMALL} {
      height: ${rhythm(11)};
    }

    @media ${BREAKPOINTS.MEDIUM} {
      z-index: -1;

      width: 65%;
      height: 100%;

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;

        display: block;
        width: 100%;
        height: 100%;

        background-image: linear-gradient(
          to right,
          ${BRAND_PRIMARY},
          ${rgba(BRAND_PRIMARY, 0.3)}
        );

        content: "";
      }
    }
  }

  *:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

export default HeroPillar
