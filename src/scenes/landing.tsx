import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { img_illustration_landing } from '../assets'
import { Footer, Header } from '../components'

export const Landing: FunctionComponent = () => (
  <>
    <Header />

    <main className="m-4 flex flex-col items-center justify-center">
      <h1 className="mt-16 text-5xl font-semibold text-accent">Mesenja</h1>
      <img src={img_illustration_landing} alt="Collaboration" />
      <p className="mb-8">Epic team collaboration.</p>
      <Link className="button mb-16" to="/register">
        Get started
      </Link>
    </main>

    <Footer />
  </>
)
