import React from 'react'
import { Mutation, Query } from 'react-apollo'

import Loader from '../components/Loader'

// eslint-disable-next-line
export const withMutation = Wrapper => (query, options) => class extends React.Component {
  render() {
    return (
      <Mutation mutation={query}>
        {(mutationName, { loading, error }) => {
          if (loading) return <Loader />
          if (error) return `Error! ${error.message}`

          return <Wrapper {...{ ...this.props, [options.name]: mutationName }} />
        }}
      </Mutation>
    )
  }
}

// eslint-disable-next-line
export const withQuery = Wrapper => query => class extends React.Component {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return `Error! ${error.message}`

          return <Wrapper {...{ ...data, ...this.props }} />
        }}
      </Query>
    )
  }
}
