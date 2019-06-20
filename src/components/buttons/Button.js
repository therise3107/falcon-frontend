import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import React from 'react'

const Button = ({
  classes, label, onClick, ...restProps
}) => (
  <button {...restProps} className={classes.button} onClick={onClick}>
    {label}
  </button>
)

const buttonTypes = [ 'button', 'reset', 'submit' ]
const buttonVaritants = [ 'primary', 'secondary' ]

Button.propTypes = {
  type: PropTypes.oneOf(buttonTypes),
  variant: PropTypes.oneOf(buttonVaritants),
  width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ])
}

Button.defaultProps = {
  type: 'submit',
  variant: 'primary',
  width: 150
}

export default injectSheet(({ colors, typography, units }) => {
  const baseButton = {
    ...typography.primary,

    alignItems: 'center',
    borderRadius: units.button.radius,
    cursor: 'pointer',
    display: 'inline-flex',
    height: units.button.height,
    justifyContent: 'center',
    border: 'none',
    outline: 'none',
    padding: units.button.padding,
    position: 'relative',
    textTransform: 'capitalize'
  }
  return {
    button: {
      ...baseButton,

      backgroundColor: props => colors.button[`background_${props.variant}`],
      color: props => colors.button[`text_${props.variant}`],
      width: props => props.width || units.button.width,

      '&:hover': {
        backgroundColor: props => colors.button[`hover_${props.variant}`]
      },

      '&:disabled': {
        backgroundColor: colors.button.background_muted,
        color: colors.button.text_muted,
        pointerEvents: 'none'
      }
    }
  }
})(Button)
