import React from 'react'
import { Route } from 'react-router-dom'

const CustomRoute = ({ component: Component, layout: Layout, ...otherProps }) => (
  <Route
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
    {...otherProps}
  />
)

export default CustomRoute
