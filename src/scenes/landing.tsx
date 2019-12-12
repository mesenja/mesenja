import React, { FunctionComponent } from 'react'

import { img_illustration_landing } from '../assets'
import { useAuth } from '../store'

export const Landing: FunctionComponent = () => {
  const [{ loggedIn }, { login }] = useAuth()

  return (
    <main className="p-8 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold text-accent">Mesenja</h1>
      <img src={img_illustration_landing} alt="Collaboration" />
      <p>Epic team collaboration.</p>
      {!loggedIn && (
        <button
          className="button mx-auto mt-8 inline-block"
          onClick={() => login()}
        >
          Sign in
        </button>
      )}
    </main>
  )
}
