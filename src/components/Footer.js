import injectSheet from 'react-jss'
import React from 'react'

import Container from './Container'
import Text from './typography/Text'

const Footer = ({ classes }) => (
  <div className={classes.wrapper}>
    <Container>
      <Text align="center">2019 no right reserved.</Text>
    </Container>
  </div>
)

export default injectSheet(({ colors }) => ({
  wrapper: {
    alignItems: 'center',
    borderTop: `1px solid ${colors.border.primary}`,
    display: 'flex',
    gridArea: 'footer'
  }
}))(Footer)
