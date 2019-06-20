const breakpoints = {
  xxs: 0,
  xs: 768,
  sm: 960,
  md: 1024,
  lg: 1280,
  xlg: 1480
}

export const breakpointMin = size => `@media (min-width: ${breakpoints[size]}px)`

export const breakpointMax = size => `@media (max-width: ${breakpoints[size] - 1}px)`

export const breakpointBetween = (lower, upper) => `@media (min-width: ${breakpoints[lower]}px) and (max-width: ${breakpoints[upper] - 1}px)`
