import gql from 'graphql-tag'

const GET_VEHICLES = gql`
  {
    vehicles: getVehicles {
      name
      totalNumber
      maxDistance
      speed
    }
  }
`

export default GET_VEHICLES
