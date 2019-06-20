import gql from 'graphql-tag'

const GET_PLANETS = gql`
  {
    planets: getPlanets {
      name
      distance
    }
  }
`
export default GET_PLANETS
