import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import React from 'react'

const Flex = ({ classes, children }) => <div className={classes.flex}>{children}</div>

const flexColumnAlignment = {
  center: 'center',
  initial: 'initial',
  start: 'flex-start',
  end: 'flex-end'
}

const flexRowAlignment = {
  center: 'center',
  end: 'flex-end',
  initial: 'initial',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
  spaceEvenly: 'space-evenly',
  start: 'flex-start'
}

Flex.propTypes = {
  align: PropTypes.oneOf(Object.keys({ ...flexColumnAlignment, ...flexRowAlignment })),
  justify: PropTypes.oneOf(Object.keys({ ...flexColumnAlignment, ...flexRowAlignment })),
  reversed: PropTypes.bool
}

Flex.defaultProps = {
  align: flexColumnAlignment.initial,
  justify: flexRowAlignment.initial,
  reversed: false
}

export default injectSheet({
  flex: {
    display: 'flex',
    alignItems: props => flexColumnAlignment[props.reversed ? props.justify : props.align],
    flexDirection: props => props.reversed && 'column',
    justifyContent: props => flexRowAlignment[props.reversed ? props.align : props.justify],

    '& [data-grow]': {
      flex: 1
    },

    '& [data-shrink]': {
      flex: 0
    }
  }
})(Flex)
