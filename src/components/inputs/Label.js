import injectSheet from 'react-jss'
import React from 'react'

const Label = ({ classes, htmlFor, ...otherProps }) => (
  <label className={classes.label} htmlFor={htmlFor} {...otherProps} />
)

export default injectSheet(({ typography }) => ({
  label: {
    ...typography.label
  }
}))(Label)
