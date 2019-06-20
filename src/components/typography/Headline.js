import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import React from 'react'

import cleanProps from '../../lib/cleanProps'
import { breakpointMax } from '../../styles/breakpoints'

const DEFAULT_COLOR_VARIANT = 'dark'

const Headline = ({ classes, as: HtmlTag, children, ...restProps }) => (
  <HtmlTag className={classes.headline} {...cleanProps(restProps)}>{children}</HtmlTag>
)

const fontSizeVariants = {
  xlg: 28,
  lg: 20,
  md: 16,
  sm: 12
}

const smFontSizeVariants = {
  xlg: 24,
  lg: 18,
  md: 14,
  sm: 12
}

const colorVariants = [ 'dark', 'light' ]

Headline.propTypes = {
  as: PropTypes.oneOf([ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ]),
  bold: PropTypes.bool,
  color: PropTypes.oneOf(colorVariants),
  size: PropTypes.oneOf(Object.keys(fontSizeVariants))
}

Headline.defaultProps = {
  as: 'h1',
  bold: false,
  color: DEFAULT_COLOR_VARIANT,
  size: 'xlg'
}

export default injectSheet(({ colors, typography }) => ({
  headline: {
    ...typography.headline,

    color: props => colors.headline[props.color],
    fontSize: props => fontSizeVariants[props.size],
    fontWeight: props => props.bold && 'bold',

    [breakpointMax('sm')]: {
      fontSize: props => smFontSizeVariants[props.size]
    }
  }
}))(Headline)
