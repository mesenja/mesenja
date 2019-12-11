import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { img_illustration_landing } from '../assets'
import { Footer } from '../components'
import { useAuth } from '../store'

export const Landing: FunctionComponent = () => {
  const [{ loggedIn }] = useAuth()

  return (
    <>
      <main className="m-4 flex flex-col items-center justify-center">
        <h1 className="mt-16 text-5xl font-semibold text-accent">Mesenja</h1>
        <img src={img_illustration_landing} alt="Collaboration" />
        <section className="flex flex-col items-center mb-16">
          <p>Epic team collaboration.</p>
          {!loggedIn && (
            <Link className="button mt-8" to="/login">
              Sign in
            </Link>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}
