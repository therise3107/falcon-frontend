import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import React from 'react'

import { breakpointMax, breakpointMin } from '../styles/breakpoints'

const Container = ({ classes, children, fluid }) => (
  <section className={fluid ? classes.container_fluid : classes.container}>{children}</section>
)

Container.propTypes = {
  fluid: PropTypes.bool
}

Container.defaultProps = {
  fluid: false
}

export default injectSheet(({ units }) => ({
  container: {
    margin: '0 auto',
    position: 'relative',
    width: `calc(100% - ${units.gutter}px)`,

    [breakpointMax('xs')]: {
      width: `calc(100% - ${units.gutter / 2}px)`
    },

    [breakpointMin('lg')]: {
      width: units.containerMaxWidth
    }
  },
  container_fluid: {
    margin: [ 0, 'auto' ],
    position: 'relative',
    width: `calc(100% - ${units.gutter}px)`,

    [breakpointMax('sm')]: {
      padding: [ 0, units.gutter ]
    }
  }
}))(Container)
