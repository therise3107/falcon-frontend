import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import Button from '../buttons/Button'
import Headline from '../typography/Headline'
import Flex from '../Flex'
import Spacer from '../Spacer'

const Status = ({ location }) => {
  const { state } = location

  if (!state) {
    return <Redirect to="/" />
  }

  const { planetName, status } = state

  return (
    <Flex reversed justify="center">
      {
        status === 'success' && (
          <Fragment>
            <Headline as="h1" size="lg">
              Success! Congratulations on Finding Falcon. King Shan is mighty pleased.
            </Headline>
            <Spacer height={20} />
            <Headline as="h2" size="lg">
              Planet found:
              {' '}
              {planetName}
            </Headline>
          </Fragment>
        )
      }
      {
        status === 'false' && (
          <Headline>Failure! You failed the task of Finding Falcon. King Shan is angry.</Headline>
        )
      }
      <Spacer height={30} />
      <a href="/">
        <Button type="button" label="Start again" />
      </a>
    </Flex>
  )
}

export default Status
