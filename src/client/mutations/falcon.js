import gql from 'graphql-tag'

const FIND_FALCON = gql`
  mutation findFalcon($planets: [String!]!, $vehicles: [String!]!) {
    findFalconPlanet(planets: $planets, vehicles: $vehicles) {
      planetName,
      status,
      error
    }
  }
`
export default FIND_FALCON
