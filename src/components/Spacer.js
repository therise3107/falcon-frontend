import PropTypes from 'prop-types'
import React from 'react'

const Spacer = ({ height, width }) => <div style={{ height, width }} />

Spacer.propTypes = {
  height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  width: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
}

Spacer.defaultProps = {
  height: 0,
  width: 0
}

export default Spacer
