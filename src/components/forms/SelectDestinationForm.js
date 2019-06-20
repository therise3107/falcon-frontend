import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Field, Formik } from 'formik'

import Button from '../buttons/Button'
import Column from '../Column'
import Flex from '../Flex'
import Label from '../inputs/Label'
import RadioButton from '../inputs/RadioButton'
import Row from '../Row'
import SelectInput from '../inputs/SelectInput'
import Spacer from '../Spacer'

const MAX_NUMBER_OF_DESTINATION = 4
const destinations = []
const initialPlanetsAndVehicles = {}

for (let i = 1; i <= MAX_NUMBER_OF_DESTINATION; i += 1) {
  destinations.push({ label: `Destination ${i}`, key: `destination${i}` })
}

destinations.forEach(({ key }) => {
  initialPlanetsAndVehicles[key] = ''
})

const initialValues = {
  planets: initialPlanetsAndVehicles,
  vehicles: initialPlanetsAndVehicles
}

const validate = ({ planets, vehicles }) => {
  const errors = {}

  Object.keys(planets).forEach(key => {
    if (!planets[key] && !planets[key].trim()) {
      errors[key] = 'Required'
    }
  })

  Object.keys(vehicles).forEach(key => {
    if (!vehicles[key] && !vehicles[key].trim()) {
      errors[key] = 'Required'
    }
  })

  return errors
}

const SelectDestinationForm = ({ planets, vehicles, onSubmit }) => {
  const planetsOptions = planets.map(({ name }) => ({
    value: name,
    label: name
  }))

  const renderFields = ({
    dirty, isSubmitting, isValid, values, handleReset, handleSubmit
  }) => {
    const filteredOption = () => planetsOptions.filter(option => !Object
      .values(values.planets).includes(option))
    const checkVehicleAvailability = (destination, vehicleName) => {
      const choosenPlanet = planets.filter(
        ({ name }) => name === values.planets[destination].value
      )[0]
      const filteredVehilce = vehicles.filter(({ name }) => name === vehicleName)[0]
      const selectedVehicleCount = Object.values(values.vehicles).filter(
        name => name === vehicleName
      ).length
      const isVehicleAvailable = filteredVehilce.totalNumber - selectedVehicleCount > 0
      const isPlantReachableByVehicle = filteredVehilce.maxDistance >= choosenPlanet.distance

      return isVehicleAvailable && isPlantReachableByVehicle
    }

    const vehicleLabel = vehicleName => {
      // count the number of times vehicle is being used then subtract from totalnumber
      const vehiclesNames = Object.values(values.vehicles)
      const isVehicleAlreadySelect = vehiclesNames.includes(vehicleName)
      const selectedVehcileTotalNumberAvailable = vehicles.filter(
        ({ name }) => name === vehicleName
      )[0].totalNumber

      if (isVehicleAlreadySelect) {
        const selectedVehicleNumber = selectedVehcileTotalNumberAvailable
          - vehiclesNames.filter(name => name === vehicleName).length

        return `${vehicleName}(${selectedVehicleNumber})`
      }

      return `${vehicleName}(${selectedVehcileTotalNumberAvailable})`
    }

    return (
      <form onSubmit={handleSubmit}>
        <Row>
          {destinations.map(({ label, key }) => (
            <Column key={key} sm={12} md={3}>
              <Label htmlFor={key}>{label}</Label>
              <Spacer height={10} />
              <Field
                inputId={key}
                name={`planets.${key}`}
                options={filteredOption()}
                component={SelectInput}
              />
              <Spacer height={30} />
              {values.planets[key] && (
                <div role="radiogroup">
                  {vehicles.map(({ name }) => (
                    <Fragment key={name}>
                      <Field
                        disabled={!checkVehicleAvailability(key, name)}
                        id={`${key}Vehicle${name}`}
                        name={`vehicles.${key}`}
                        value={name}
                        component={RadioButton}
                        label={vehicleLabel(name)}
                      />
                      <Spacer height={10} />
                    </Fragment>
                  ))}
                </div>
              )}
            </Column>
          ))}
        </Row>
        <Spacer height={30} />
        <Flex justify="center">
          <Button
            disabled={!dirty}
            label="Reset"
            onClick={handleReset}
          />
          <Spacer width={30} />
          <Button
            disabled={isSubmitting || !dirty || !isValid}
            label="Find falcon"
          />
        </Flex>
      </form>
    )
  }

  return (
    <Formik enableReinitialize initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      {renderFields}
    </Formik>
  )
}

SelectDestinationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  planets: PropTypes.array.isRequired,
  vehicles: PropTypes.array.isRequired
}

export default SelectDestinationForm
