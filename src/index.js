import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/Root'

const rootElement = document.getElementById('root')

const renderRoot = () => {
  ReactDOM.render(<Root />, rootElement)
}

renderRoot()
