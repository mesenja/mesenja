import React, { FunctionComponent, useEffect } from 'react'
import { useHistory } from 'react-router'

import { Footer, Header } from '../components'
import { useAuth } from '../store'

export const Login: FunctionComponent = () => {
  const [state, actions] = useAuth()
  const history = useHistory()

  const { loggedIn } = state

  useEffect(() => {
    if (loggedIn) {
      history.replace('/')
    }
  }, [loggedIn, history])

  return (
    <>
      <Header />

      <main className="m-8">
        <h1 className="text-5xl font-semibold text-primary">Sign in</h1>
        <button className="button mt-8" onClick={() => actions.login()}>
          Sign in
        </button>
      </main>

      <Footer />
    </>
  )
}
