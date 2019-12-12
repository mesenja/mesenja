import { Chance } from 'chance'
import { random, range } from 'lodash'
import moment from 'moment'
import { createHook, createStore } from 'react-sweet-state'

import { ali } from './auth'
import { Role, User } from './types'
const chance = new Chance()

export const users: User[] = [
  ali,
  ...range(20).map(() => ({
    createdAt: moment().subtract(random(10000), 'seconds'),
    email: chance.email(),
    id: chance.guid(),
    name: chance.name(),
    role: Role.MEMBER
  }))
]

const Store = createStore({
  actions: {},
  initialState: {
    users
  },
  name: 'team'
})

export const useTeam = createHook(Store)
