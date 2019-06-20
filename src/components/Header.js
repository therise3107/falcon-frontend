import injectSheet from 'react-jss'
import React from 'react'

import Container from './Container'
import Flex from './Flex'
import Headline from './typography/Headline'
import Link from './typography/Link'
import Spacer from './Spacer'

const Header = ({ classes }) => (
  <header className={classes.wrapper}>
    <Container>
      <Flex align="center">
        <Headline data-grow>Falcon Finder</Headline>
        <Link external to="https://geektrust.in/">Geektrust home</Link>
        <Spacer width={15} />
        <Link external to="https://www.linkedin.com/in/innovatorly/">Lalit Yadav</Link>
      </Flex>
    </Container>
  </header>
)

export default injectSheet(({ colors }) => ({
  wrapper: {
    alignItems: 'center',
    borderBottom: `1px solid ${colors.border.primary}`,
    display: 'flex',
    gridArea: 'header'
  }
}))(Header)
