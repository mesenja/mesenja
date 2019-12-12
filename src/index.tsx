import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from './components'
import { Chat, Landing, Login, Logout, Posts, Team } from './scenes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Header />

    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/chat">
        <Chat />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
