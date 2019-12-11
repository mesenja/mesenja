import { FunctionComponent, useEffect } from 'react'
import { useHistory } from 'react-router'

import { useAuth } from '../store'

export const Logout: FunctionComponent = () => {
  const [, { logout }] = useAuth()

  const history = useHistory()

  useEffect(() => {
    logout()

    history.replace('/')
  }, [logout, history])

  return null
}
