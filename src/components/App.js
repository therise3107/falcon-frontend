import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from './pages/Home'
import Status from './pages/Status'

import MainLayout from './layouts/MainLayout'
import Route from './routes/Route'

const App = () => (
  <Router>
    <Route exact path="/" component={Home} layout={MainLayout} />
    <Route path="/status" component={Status} layout={MainLayout} />
  </Router>
)

export default App
