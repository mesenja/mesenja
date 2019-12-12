import { createHook, createStore } from 'react-sweet-state'

import { storage } from '../lib'

const Store = createStore({
  actions: {
    setGroupId: (groupId: string) => ({ setState }) => {
      storage.set('groupId', groupId)

      setState({
        groupId
      })
    },
    setThreadId: (threadId: string) => ({ setState }) => {
      storage.set('threadId', threadId)

      setState({
        threadId
      })
    }
  },
  initialState: {
    groupId: storage.get('groupId', 'general'),
    threadId: storage.get('threadId', '')
  },
  name: 'nav'
})

export const useNav = createHook(Store)
