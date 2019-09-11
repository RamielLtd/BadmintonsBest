import Typography from "typography"
import wordpress2015Theme from "typography-theme-wordpress-2015"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

wordpress2015Theme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "ul, ol": {
      listStyle: `disc inside`,
      marginLeft: 0,
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
    styles: ["700"],
  },
  {
    name: "Open Sans",
    styles: ["400", "400i", "700", "700i"],
  },
]
wordpress2015Theme.headerFontFamily = ["Open Sans", "sans-serif"]
wordpress2015Theme.bodyFontFamily = ["Open Sans", "sans-serif"]

const typography = new Typography(wordpress2015Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
