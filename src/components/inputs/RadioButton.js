import injectSheet from 'react-jss'
import React from 'react'

import Label from './Label'

const RadioButton = ({
  classes, actions, field, form, id, label, value, ...inputProps
}) => (
  <div className={classes.inputWrapper}>
    <input
      type="radio"
      {...{ id, ...field, ...inputProps }}
      onChange={() => form.setFieldValue(field.name, value)}
    />
    <Label htmlFor={id}>{label}</Label>
  </div>
)

export default injectSheet({
  inputWrapper: {
    opacity: props => props.disabled && 0.5,

    '& input': {
      marginRight: 10
    }
  }
})(RadioButton)
