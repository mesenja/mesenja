import { Chance } from 'chance'
import { orderBy, random, range, shuffle } from 'lodash'
import moment from 'moment'
import { createHook, createStore } from 'react-sweet-state'

import { Post, User } from './types'

const chance = new Chance()

export const users: User[] = [
  {
    id: 'ali-zahid',
    name: 'Ali Zahid'
  },
  ...range(10).map(() => ({
    id: chance.guid(),
    name: chance.name()
  }))
]

const topics: string[] = range(10).map(() => chance.word())

const posts: Post[] = range(100).map(index => ({
  body: chance.paragraph(),
  comments: range(0, random(3)).map(() => ({
    body: chance.paragraph(),
    createdAt: moment().subtract(random(10000), 'seconds'),
    id: chance.guid(),
    user: users[random(users.length - 1)]
  })),
  createdAt: moment().subtract(random(10000), 'seconds'),
  id: chance.guid(),
  topics: range(0, random(3)).map(index => shuffle(topics)[index]),
  user: users[random(users.length - 1)]
}))

const Store = createStore({
  actions: {},
  initialState: {
    posts: orderBy(posts, 'createdAt', 'desc'),
    topics
  },
  name: 'posts'
})

export const usePosts = createHook(Store)
