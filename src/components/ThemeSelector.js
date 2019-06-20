import Switch from 'react-switch'
import React from 'react'

import Flex from './Flex'
import Spacer from './Spacer'
import Text from './typography/Text'

import { withMutation, withQuery } from '../lib/api'
import CHANGE_THEME from '../client/mutations/theme'
import GET_THEME from '../client/queries/theme'

function ThemeSelector({ changeTheme, darkTheme }) {
  return (
    <Flex align="center" justify="end">
      <label htmlFor="dark-mode-switch">
        <Text size="md">Night mode</Text>
      </label>
      <Spacer width={10} />
      <Switch id="dark-mode-switch" checked={darkTheme} onChange={changeTheme} height={24} width={48} />
    </Flex>
  )
}

ThemeSelector = withMutation(ThemeSelector)(CHANGE_THEME, { name: 'changeTheme' })
ThemeSelector = withQuery(ThemeSelector)(GET_THEME)

export default ThemeSelector
