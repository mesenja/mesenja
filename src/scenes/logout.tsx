import { FunctionComponent, useEffect } from 'react'
import { useHistory } from 'react-router'

import { useAuth } from '../store'

export const Logout: FunctionComponent = () => {
  const [, actions] = useAuth()
  const history = useHistory()

  useEffect(() => {
    actions.logout()

    history.replace('/')
  }, [actions, history])

  return null
}
