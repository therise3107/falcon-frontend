import injectSheet, { withTheme } from 'react-jss'
import React from 'react'
import Select from 'react-select'

const selectInputCustomStyles = ({ typography }) => ({
  option: provided => ({
    ...provided,
    ...typography.inputText
  }),
  placeholder: provided => ({
    ...provided,
    ...typography.inputText,
    opacity: 0.5
  }),
  singleValue: provided => ({
    ...provided,
    ...typography.inputText
  })
})

const SelectInput = ({
  classes, form, field, label, theme, ...inputProps
}) => (
  <div className={classes.wrapper}>
    <Select
      {...{ ...field, ...inputProps }}
      styles={selectInputCustomStyles(theme)}
      onChange={value => form.setFieldValue(field.name, value)}
      onBlur={() => form.setFieldTouched(field.name, true)}
    />
  </div>
)

// const SelectInput = () => <div>Hello</div>

export default withTheme(injectSheet({
  wrapper: {
    width: '100%'
  }
})(SelectInput))
