import React, { FunctionComponent, useEffect } from 'react'
import { useHistory } from 'react-router'

import { Footer } from '../components'
import { useAuth } from '../store'

export const Login: FunctionComponent = () => {
  const [{ loggedIn }, { login }] = useAuth()

  const history = useHistory()

  useEffect(() => {
    if (loggedIn) {
      history.replace('/')
    }
  }, [loggedIn, history])

  return (
    <>
      <main className="m-8">
        <h1 className="text-5xl font-semibold text-primary">Sign in</h1>
        <button className="button mt-8" onClick={() => login()}>
          Sign in
        </button>
      </main>

      <Footer />
    </>
  )
}
