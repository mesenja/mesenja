import { createHook, createStore } from 'react-sweet-state'

import { storage } from '../lib'

const Store = createStore({
  actions: {
    login: () => ({ setState }) => {
      storage.set('loggedIn', true)

      setState({
        loggedIn: true
      })
    },
    logout: () => ({ setState }) => {
      storage.remove('loggedIn')

      setState({
        loggedIn: false
      })
    }
  },
  initialState: {
    loggedIn: !!storage.get('loggedIn')
  },
  name: 'auth'
})

export const useAuth = createHook(Store)
