import injectSheet from 'react-jss'
import React from 'react'

import Container from '../Container'
import Footer from '../Footer'
import Header from '../Header'
import Spacer from '../Spacer'
import ThemeSelector from '../ThemeSelector'

const MainLayout = ({ classes, children }) => (
  <div className={classes.wrapper}>
    <Header />
    <main className={classes.main}>
      <Container>
        <Spacer height={50} />
        <ThemeSelector />
        {children}
        <Spacer height={50} />
      </Container>
    </main>
    <Footer />
  </div>
)

export default injectSheet(({ colors, units }) => ({
  wrapper: {
    display: 'grid',
    gridRowGap: units.gutter,
    gridTemplateRows: `${units.headerHeight}px 1fr ${units.footerHeight}px`,
    gridTemplateAreas: `
      "header"
      "main"
      "footer"
    `,
    minHeight: '100%'
  },
  main: {
    backgroundColor: colors.background.primary,
    gridArea: 'main'
  }
}))(MainLayout)
