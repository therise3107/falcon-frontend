import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import React from 'react'

import cleanProps from '../../lib/cleanProps'

const Text = ({ classes, children, ...restProps }) => <p className={classes.text} {...cleanProps(restProps)}>{children}</p>

const textSizes = {
  sm: 12,
  md: 14,
  lg: 16
}

Text.propTypes = {
  align: PropTypes.oneOf([ 'left', 'center', 'right' ]),
  bold: PropTypes.bool,
  color: PropTypes.oneOf([ 'dark', 'light' ]),
  size: PropTypes.oneOf(Object.keys(textSizes))
}

Text.defaultProps = {
  align: 'left',
  bold: false,
  color: 'dark',
  size: 'sm'
}

export default injectSheet(({ colors, typography }) => ({
  text: {
    ...typography.primary,

    bold: props => props.bold,
    color: props => colors.text[props.color],
    fontSize: props => textSizes[props.size],
    textAlign: props => props.align
  }
}))(Text)
