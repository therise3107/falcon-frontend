import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import React from 'react'

import { breakpointBetween, breakpointMax, breakpointMin } from '../styles/breakpoints'

const Column = ({ classes, children }) => <div className={classes.container}>{children}</div>

Column.propTypes = {
  xxs: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xlg: PropTypes.number
}

Column.defaultProps = {
  xxs: 12,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xlg: null
}

export default injectSheet(({ units }) => ({
  container: {
    margin: [ units.gutter / 2 ],
    position: 'relative',

    [breakpointMax('xs')]: {
      gridColumn: props => `span ${props.xxs}`
    },
    [breakpointBetween('xs', 'sm')]: {
      gridColumn: props => `span ${props.xs}`
    },
    [breakpointBetween('sm', 'md')]: {
      gridColumn: props => `span ${props.sm}`
    },
    [breakpointBetween('md', 'lg')]: {
      gridColumn: props => `span ${props.md}`
    },
    [breakpointBetween('lg', 'xlg')]: {
      gridColumn: props => `span ${props.lg}`
    },
    [breakpointMin('xlg')]: {
      gridColumn: props => `span ${props.xlg}`
    }
  }
}))(Column)
