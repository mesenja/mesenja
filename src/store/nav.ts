import { createHook, createStore } from 'react-sweet-state'

import { storage } from '../lib'

const Store = createStore({
  actions: {
    setGroupId: (groupId: string) => ({ setState }) => {
      storage.set('groupId', groupId)

      setState({
        groupId: groupId
      })
    }
  },
  initialState: {
    groupId: storage.get('groupId', 'general')
  },
  name: 'nav'
})

export const useNav = createHook(Store)
