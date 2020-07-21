// Settings
export const BACKGROUND = "-10"
export const MIDGROUND = "0"
export const FOREGROUND = "10"

// Colours
export const BRAND_PRIMARY = "#D10003"
export const BRAND_SECONDARY = "#2B2D42"
export const BRAND_TERTIARY = "#8D99AE"
export const BRAND_HIGHLIGHT = "#0A2463"
export const BRAND_HIGHLIGHT_LIGHT = "#3E92CC"

export const BUTTON_BACKGROUND_COLOUR = BRAND_PRIMARY
export const BUTTON_TEXT_COLOUR = "white"
export const BUTTON_CTA_BACKGROUND_COLOUR = "forestgreen"
export const BUTTON_CTA_TEXT_COLOUR = "white"

export const MENU_BACKGROUND_COLOUR = "white"
export const MENU_LINK_COLOUR = "#333333"

export const FEATURED_BACKGROUND_COLOUR = BRAND_SECONDARY
export const FEATURED_BACKGROUND_COLOUR_FADE = BRAND_PRIMARY
export const FEATURED_TEXT_COLOUR = "white"

// Media Queries
const BREAKPOINT_SIZES = {
  SMALLEST: `36em`,
  SMALL: `48em`,
  MEDIUM: `62em`,
  LARGE: `75em`,
}
export const BREAKPOINTS = {
  SMALLEST: `(min-width: ${BREAKPOINT_SIZES.SMALLEST})`,
  SMALL: `(min-width: ${BREAKPOINT_SIZES.SMALL})`,
  MEDIUM: `(min-width: ${BREAKPOINT_SIZES.MEDIUM})`,
  LARGE: `(min-width: ${BREAKPOINT_SIZES.LARGE})`,
}
