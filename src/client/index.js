import ApolloClient from 'apollo-boost'

import resolvers from './resolvers'
import defaults from './defaultState'

const client = new ApolloClient({
  uri: `${process.env.API_BASE_URL}`,
  clientState: {
    defaults,
    resolvers
  }
})

export default client
