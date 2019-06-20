import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import Headline from '../typography/Headline'
import Spacer from '../Spacer'
import SelectDestinationForm from '../forms/SelectDestinationForm'
import { withMutation, withQuery } from '../../lib/api'

import FIND_FALCON from '../../client/mutations/falcon'
import GET_PLANETS from '../../client/queries/planets'
import GET_VEHICLES from '../../client/queries/vehicles'

function Home(props) {
  const handleSubmit = values => {
    const requestBody = {
      planets: Object.values(values.planets).map(({ value }) => value),
      vehicles: Object.values(values.vehicles)
    }

    props.findFalcon({ variables: { ...requestBody } }).then(response => props.history.push('/status', response.data.findFalconPlanet))
  }

  return (
    <Fragment>
      <Headline>Finding Falcon!</Headline>
      <Spacer height={30} />
      <Headline as="h2" size="md">Select planets you want to search in:</Headline>
      <Spacer height={50} />
      <SelectDestinationForm {...props} onSubmit={handleSubmit} />
      <Spacer height={30} />
    </Fragment>
  )
}

Home = withMutation(Home)(FIND_FALCON, { name: 'findFalcon' })
Home = withQuery(Home)(GET_PLANETS)
Home = withQuery(Home)(GET_VEHICLES)

export default withRouter(Home)
