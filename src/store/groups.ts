import moment from 'moment'
import { createHook, createStore } from 'react-sweet-state'

import { ali } from './auth'
import { Group } from './types'

export const groups: Group[] = [
  {
    createdAt: moment(),
    id: 'general',
    name: 'General',
    private: false,
    users: [ali]
  },
  {
    createdAt: moment(),
    id: 'random',
    name: 'Random',
    private: false,
    users: [ali]
  },
  {
    createdAt: moment(),
    id: 'engineering',
    name: 'Engineering',
    private: false,
    users: [ali]
  },
  {
    createdAt: moment(),
    id: 'design',
    name: 'Design',
    private: false,
    users: [ali]
  }
]

const Store = createStore({
  actions: {},
  initialState: {
    groups
  },
  name: 'groups'
})

export const useGroups = createHook(Store)
