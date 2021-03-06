import Typography from "typography"
import wordpress2015Theme from "typography-theme-wordpress-2015"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

import { BRAND_PRIMARY, BRAND_HIGHLIGHT } from "../constants/css-vars"

wordpress2015Theme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      color: BRAND_PRIMARY,
    },
    "a:visited": {
      color: BRAND_PRIMARY,
    },
    "a:hover, a:focus": {
      color: BRAND_HIGHLIGHT,
    },
    "ul, ol": {
      listStyle: `disc inside`,
      marginLeft: 0,
    },
    "li > p": {
      display: `inline`,
    },
    "blockquote p": {
      marginBottom: 0,
    },
    "blockquote cite": {
      display: `block`,
    },
    [MOBILE_MEDIA_QUERY]: {
      "ul, ol": {
        marginLeft: 0,
      },
    },
  }
}

wordpress2015Theme.baseFontSize = "19px"
wordpress2015Theme.baseLineHeight = "1.68"
wordpress2015Theme.scaleRatio = 2
wordpress2015Theme.googleFonts = [
  {
    name: "Open Sans",
    styles: ["600"],
  },
  {
    name: "Open Sans",
    styles: ["400", "400i", "600", "600i"],
  },
]
wordpress2015Theme.headerFontFamily = ["Open Sans", "sans-serif"]
wordpress2015Theme.bodyFontFamily = ["Open Sans", "sans-serif"]
wordpress2015Theme.headerWeight = "600"
wordpress2015Theme.boldWeight = 600

const typography = new Typography(wordpress2015Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const CONSTRAIN = rhythm(36)
export const CONSTRAIN_CONTENT = rhythm(22)
export const CONSTRAIN_CONTENT_HALF = rhythm(11)
export const CONSTRAIN_CONTENT_DIVIDERS = rhythm(26)
