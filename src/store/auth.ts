import { random } from 'lodash'
import moment from 'moment'
import { createHook, createStore } from 'react-sweet-state'

import { storage } from '../lib'
import { Role, User } from './types'

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
    loggedIn: storage.get('loggedIn', false)
  },
  name: 'auth'
})

export const useAuth = createHook(Store)

export const ali: User = {
  createdAt: moment().subtract(random(10000), 'seconds'),
  email: 'ali.zahid@live.com',
  id: 'ali-zahid',
  name: 'Ali Zahid',
  role: Role.OWNER
}
