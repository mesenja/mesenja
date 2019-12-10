import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { img_mesenja_light } from '../assets'

export const Header: FunctionComponent = () => (
  <header className="bg-primary flex flex-none items-stretch justify-between m-8 overflow-hidden rounded">
    <Link className="m-4" to="/">
      <img className="h-8 w-8" src={img_mesenja_light} alt="Mesenja" />
    </Link>
    <nav className="flex">
      <Link
        className="flex items-stretch text-white px-4 hover:bg-primary-light"
        to="/login"
      >
        <span className="self-center">Sign in</span>
      </Link>
      <Link
        className="flex items-stretch text-white px-4 hover:bg-primary-light"
        to="/register"
      >
        <span className="self-center">Sign up</span>
      </Link>
    </nav>
  </header>
)
