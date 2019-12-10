import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Landing, Login, Logout, Register } from './scenes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
)

serviceWorker.unregister()
