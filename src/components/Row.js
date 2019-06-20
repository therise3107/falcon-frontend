import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import React from 'react'

import { cleanObj, compose, filterBy, sortBy } from '../utils'

const allowedSizes = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xlg' ]

// 1. Make sure child is grid column if not throw error
// 2. Grab the props of the children
// 3. Sort them according to the order of allowedSizes
// 4. Enhance the props of the children
const processGrid = children => React.Children.map(children, child => {
  const injectedProps = {}
  const childProps = compose(cleanObj, Object.keys, arr => filterBy(arr, allowedSizes), arr => sortBy(arr, allowedSizes))(child.props)

  if (allowedSizes.length === childProps.length) {
    return child
  }

  const makeSize = index => child.props[childProps.filter(size => index - allowedSizes.indexOf(size) > 0).sort()[0]]

  allowedSizes.forEach((size, index) => {
    if (childProps.includes(size)) {
      injectedProps[size] = child.props[size]
    } else if (index !== 0) {
      injectedProps[size] = makeSize(index)
    }
  })

  return React.cloneElement(child,
    {
      ...child.props,
      ...injectedProps
    })
})

const GridContainer = ({ classes, children }) => <div className={classes.container}>{processGrid(children)}</div>

GridContainer.propTypes = {
  inline: PropTypes.bool
}

GridContainer.defaultProps = {
  inline: false
}

export default injectSheet(({ units }) => ({
  container: {
    display: props => (!props.inline ? 'grid' : 'inline-grid'),
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridRowGap: `${units.gutter}px`,
    margin: [ 0, -units.gutter / 2 ]
  }
}))(GridContainer)
