import { Chance } from 'chance'
import { cloneDeep, random, range, shuffle, uniqBy } from 'lodash'
import moment from 'moment'
import { createHook, createStore } from 'react-sweet-state'

import { ali } from './auth'
import { users } from './team'
import { Thread } from './types'

const chance = new Chance()

export const threads: Thread[] = range(100).map(index => {
  const members = uniqBy(
    range(2, random(5)).map(index => shuffle(users)[index]),
    'id'
  )

  if (members.length === 1 && members[0] === ali) {
    members.push(users[1])
  }

  if (members.length === 0) {
    members.push(shuffle(users)[0])
    members.push(shuffle(users)[0])
  }

  const id =
    index === 0
      ? 'general'
      : index === 1
      ? 'random'
      : index === 2
      ? 'engineering'
      : index === 3
      ? 'design'
      : chance.guid()

  const time = moment().subtract(random(10000), 'seconds')

  return {
    createdAt: time,
    id,
    messages: range(100).map(() => ({
      body: chance.sentence(),
      createdAt: moment().subtract(random(10000), 'seconds'),
      id: chance.guid(),
      user: shuffle(members)[0]
    })),
    updatedAt: time,
    users: members
  }
})

const Store = createStore({
  actions: {
    reply: (threadId: string, body: string) => ({ setState, getState }) => {
      const { threads } = getState()

      const data = cloneDeep(threads)

      const thread = data.find(({ id }) => id === threadId)

      if (thread) {
        thread.messages.push({
          body,
          createdAt: moment(),
          id: chance.guid(),
          user: ali
        })

        thread.updatedAt = moment()

        setState({
          threads: data
        })
      }
    }
  },
  initialState: {
    threads
  },
  name: 'chat'
})

export const useChat = createHook(Store)
