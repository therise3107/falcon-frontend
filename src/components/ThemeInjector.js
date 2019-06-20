import darkThemeStyle from '../styles/dark.theme'
import defaultTheme from '../styles/default.theme'

import mergeDeep from '../lib/mergeDeep'
import { withQuery } from '../lib/api'
import GET_THEME from '../client/queries/theme'

function ThemeInjector({ children, darkTheme, ...restProps }) {
  const selectedTheme = darkTheme ? darkThemeStyle : defaultTheme
  const mergedTheme = mergeDeep(defaultTheme, selectedTheme)

  return children(mergedTheme, restProps)
}

ThemeInjector = withQuery(ThemeInjector)(GET_THEME)

export default ThemeInjector
