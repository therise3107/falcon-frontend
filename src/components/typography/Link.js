import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import React from 'react'

const Link = ({ classes, children, external, to, ...restProps }) => <a className={classes.base} href={to} target={external && '_blank'} {...restProps}>{children}</a>

Link.propTypes = {
  external: PropTypes.bool,
  to: PropTypes.string
}

Link.defaultProps = {
  external: false,
  to: '/'
}

export default injectSheet(({ colors, typography }) => ({
  base: {
    ...typography.primary,

    color: colors.link.primary,

    '&:hover': {
      color: colors.link.primary_hover
    }
  }
}))(Link)
