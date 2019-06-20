import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'react-jss'

import 'normalize.css'
import '../assets/global.css'

import App from './App'
import client from '../client'
import ThemeInjector from './ThemeInjector'

const Root = () => (
  <ApolloProvider client={client}>
    <ThemeInjector>
      {
        (theme, restProps) => (
          <ThemeProvider {...{ theme, ...restProps }}>
            <App />
          </ThemeProvider>
        )
      }
    </ThemeInjector>
  </ApolloProvider>
)

export default Root
