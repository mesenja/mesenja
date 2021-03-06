import clsx from 'clsx'
import React, { FunctionComponent } from 'react'
import { Link, useLocation } from 'react-router-dom'

import {
  img_mesenja_light,
  img_nav_chat,
  img_nav_logout,
  img_nav_posts,
  img_nav_profile,
  img_nav_settings,
  img_nav_team
} from '../assets'
import { useAuth } from '../store'

export const Header: FunctionComponent = () => {
  const [{ loggedIn }] = useAuth()

  const { pathname } = useLocation()

  if (!loggedIn && ['/', '/login'].includes(pathname)) {
    return null
  }

  const routes = [
    {
      auth: true,
      icon: img_nav_posts,
      label: 'Posts',
      link: '/posts'
    },
    {
      auth: true,
      icon: img_nav_chat,
      label: 'Chat',
      link: '/chat'
    },
    {
      auth: true,
      icon: img_nav_team,
      label: 'Team',
      link: '/team'
    },
    {
      auth: true,
      icon: img_nav_settings,
      label: 'Settings',
      link: '/settings'
    },
    {
      auth: true,
      icon: img_nav_profile,
      label: 'Profile',
      link: '/profile'
    },
    {
      auth: true,
      icon: img_nav_logout,
      label: 'Logout',
      link: '/logout'
    }
  ].filter(({ auth }) => auth === loggedIn)

  return (
    <header className="bg-primary flex flex-col justify-between h-screen shadow-lg">
      <Link className="m-4" to="/">
        <img className="h-6 w-6" src={img_mesenja_light} alt="Mesenja" />
      </Link>
      <nav className="flex flex-col">
        {routes.map(({ icon, label, link }, index) => (
          <Link
            key={index}
            className={clsx(
              'flex',
              'items-center',
              'hover:bg-primary-light',

              pathname.includes(link) && 'bg-primary-light'
            )}
            to={link}
          >
            {icon && <img className="m-4 h-6 w-6" src={icon} alt={label} />}
            {!icon && <span className="mx-5 text-white">{label}</span>}
          </Link>
        ))}
      </nav>
    </header>
  )
}
